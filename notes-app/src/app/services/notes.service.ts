import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { NoteType } from '../models/note.model';

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
    id: '', title: '', lastEdited: Date.now(), text: '', tag: '', isArchived: false
  };

  currentNote: BehaviorSubject<NoteType> = new BehaviorSubject<NoteType>(this.defaultNote);
  currentNote$: Observable<NoteType> = this.currentNote.asObservable();

  isCurrentNoteArchived: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isCurrentNoteArchived$: Observable<boolean> = this.isCurrentNoteArchived.asObservable();

  isModalOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isModalOpen$: Observable<boolean> = this.isModalOpen.asObservable();

  constructor() {
    const retrievedData = localStorage.getItem('notes');

    if(!retrievedData){
      this.allNotes.next([
        {
          id: '1',
          title: 'Grocery List',
          lastEdited: Date.now() - 1000000,
          text: 'Milk, Bread, Eggs, Butter',
          tag: 'Personal',
          isArchived: false
        },
        {
          id: '2',
          title: 'Meeting Notes',
          lastEdited: Date.now() - 200000,
          text: 'Discuss Q3 roadmap and hiring goals.',
          tag: 'Work',
          isArchived: false
        },
        {
          id: '3',
          title: 'Books to Read',
          lastEdited: Date.now() - 5000000,
          text: 'Atomic Habits, Deep Work, Clean Architecture',
          tag: 'Personnal',
          isArchived: true
        },
        {
          id: '5',
          title: 'Vacation Plan',
          lastEdited: Date.now() - 700000,
          text: 'Look into flights to Italy and Airbnb options.',
          tag: 'Personnal',
          isArchived: true
        }
      ]);
      this.saveNotes(this.allNotes.value);
    } else {
      this.allNotes.next(JSON.parse(retrievedData));
    }
    this.notesData = this.allNotes.value;
    this.currentNote.next(this.allNotes.value[0]);
  }

  openModal() {
    this.isModalOpen.next(true);
  }

  closeModal() {
    this.isModalOpen.next(false);
  }

  addNewNote(note: NoteType) {
    const updatedList = [...this.allNotes.value, note];
    this.allNotes.next(updatedList);
    this.saveNotes(updatedList);
    this.getAllNotes();
  }

  getAllNotes() {
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

  deleteNote() {
    this.notesData.filter(note => note.id !== this.currentNote.value.id);
    this.allNotes.next(this.allNotes.value.filter(note => note.id !== this.currentNote.value.id));
    
    this.saveNotes(this.allNotes.value);
  }

  archiveNote() {
    this.notesData.forEach(note => {
      if(note.id === this.currentNote.value.id){
        note.isArchived = true;
      }
    });
    this.allNotes.value.forEach(note => {
      if(note.id === this.currentNote.value.id){
        note.isArchived = true;
      }
    });
    this.saveNotes(this.allNotes.value);
    this.isCurrentArchived();
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
  }

  isCurrentArchived() {
    this.isCurrentNoteArchived.next( this.currentNote.value.isArchived );
  }
}