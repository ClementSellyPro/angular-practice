import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  private darkThemeClass = 'dark-theme';

  constructor() {
    const isDark = localStorage.getItem('theme') === 'dark'
    this.setDarkMode(isDark);
   }

  toggleTheme(): void {
    const isDark = document.body.classList.contains(this.darkThemeClass);
    this.setDarkMode(!isDark);
  }

  setDarkMode(isDark: boolean) {
    document.body.classList.toggle(this.darkThemeClass, isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  isDarkMode(): boolean {
    return document.body.classList.contains(this.darkThemeClass);
  }
}
