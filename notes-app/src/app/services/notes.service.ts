import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NoteType } from '../models/note.model';
import { supabase } from './supabaseClient';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesData!: NoteType[];
  allNotes: BehaviorSubject<NoteType[]> = new BehaviorSubject<NoteType[]>([]);
  allNotes$: Observable<NoteType[]> = this.allNotes.asObservable();

  isAllNotesSelected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isAllNotesSelected$: Observable<boolean> = this.isAllNotesSelected.asObservable();

  defaultNote: NoteType = {
    id: '', title: '', lastEdited: Date(), text: '', tag: '', isArchived: false
  };

  currentNote: BehaviorSubject<NoteType> = new BehaviorSubject<NoteType>(this.defaultNote);
  currentNote$: Observable<NoteType> = this.currentNote.asObservable();

  isCurrentNoteArchived: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isCurrentNoteArchived$: Observable<boolean> = this.isCurrentNoteArchived.asObservable();

  isModalOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isModalOpen$: Observable<boolean> = this.isModalOpen.asObservable();

  constructor() {
    this.fetchNotes();
    this.currentNote.next(this.allNotes.value[0]);
  }

  async fetchNotes() {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('lastEdited', { ascending: false });

    if (error) {
      console.error('Error fetching notes:', error);
    } else {
      this.allNotes.next(data as NoteType[]);
      this.notesData = this.allNotes.value;
    }
  }

  openModal() {
    this.isModalOpen.next(true);
  }

  closeModal() {
    this.isModalOpen.next(false);
  }

  async addNewNote(note: NoteType) {
    const newNote = { ...note, id: uuidv4(), lastEdited: new Date().toISOString() };
    
    const { error } = await supabase.from('notes').insert([newNote]);
    
    if (error) {
      console.error('Error adding note: ', error);
    } else {
      this.fetchNotes();
    }
  }

  getAllNotes() {
    this.sortNewNotesFirst();
    return this.allNotes;
  }

  saveNotes(allNotes: NoteType[]) {
    localStorage.setItem('notes', JSON.stringify(allNotes));
  }

  filterSelection() {
    if(!this.isAllNotesSelected.value){
      this.allNotes.next(this.notesData);
    } else {
      const archivedList = this.notesData.filter(note => note.isArchived === true);
      this.allNotes.next(archivedList);
    }
    this.isAllNotesSelected.next(!this.isAllNotesSelected.value);
  }

  noteSelection(id: string) {
    const selectedNote = this.allNotes.value.filter(note => note.id === id);
    this.currentNote.next(selectedNote[0]);
    this.isCurrentArchived();
  }

  async deleteNote() {
    const id = this.currentNote.value.id;
    
    const { error } = await supabase.from('notes').delete().eq('id', id);
    
    if (error) {
      console.log('Error deleting note:', error);
    } else {
      this.fetchNotes();
    }
  }

  async archiveNote() {
    // this.notesData.forEach(note => {
    //   if(note.id === this.currentNote.value.id){
    //     note.isArchived = true;
    //   }
    // });
    // this.allNotes.value.forEach(note => {
    //   if(note.id === this.currentNote.value.id){
    //     note.isArchived = true;
    //   }
    // });
    const id = this.currentNote.value.id;
    const updatedNote = {...this.currentNote.value, isArchived: true};

    const { error } = await supabase.from('notes').update(updatedNote).eq('id', id);
    this.saveNotes(this.allNotes.value);

    this.isCurrentArchived();
    this.sortNewNotesFirst();
  }

  unarchiveNote() {
    this.notesData.forEach(note => {
      if(note.id === this.currentNote.value.id){
        note.isArchived = false;
      }
    });
    this.allNotes.value.forEach(note => {
      if(note.id === this.currentNote.value.id){
        note.isArchived = false;
      }
    });
    this.saveNotes(this.allNotes.value);
    this.isCurrentArchived();
    this.sortNewNotesFirst();
  }

  isCurrentArchived() {
    this.isCurrentNoteArchived.next( this.currentNote.value.isArchived );
  }

  sortNewNotesFirst() {
    const sortedNotes = [...this.allNotes.value].sort((a, b) =>
      new Date(b.lastEdited).getTime() - new Date(a.lastEdited).getTime()
    );
    this.allNotes.next(sortedNotes);
  }
}