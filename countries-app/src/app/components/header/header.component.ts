import { Component } from '@angular/core';
import { ThemeServiceService } from '../../services/theme-service.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private themeService: ThemeServiceService){}

  isDark = () => this.themeService.isDarkMode();

  onToggleTheme(){
    this.themeService.toggleTheme();
  }
}
