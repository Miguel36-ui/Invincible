import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  searchQuery = '';
  showSuggestions = false;
  
  searchOptions = [
    // Héroes
    "Invincible", "Atom Eve", "Rex Splode", "Dupli-Kate", 
    "Monster Girl", "Inmortal", "Samson", "Allen", "Oliver", "Techjacket",
    // Villanos
    "Thragg", "Conquest", "Angstrom Levy", "The Mauler Twins",
    "Robot", "Dinosaurus", "The Lizard League",
    // Viltrumitas
    "Omni-Man", "Ursaal", "Anissa", "Lucan", "Kregg", "Argall", "Thaedeus"
  ];

  filteredOptions: string[] = [];

  onSearchInput() {
    this.filteredOptions = this.searchOptions.filter(option =>
      option.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.showSuggestions = this.filteredOptions.length > 0 && this.searchQuery !== '';
  }

  hideSuggestions() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }

  selectSuggestion(option: string) {
    this.searchQuery = option;
    this.showSuggestions = false;
  }

  onSearchSubmit() {
    this.executeSearch(this.searchQuery);
    this.showSuggestions = false;
  }

  private executeSearch(query: string) {
    if (!query) return;

    // 1. Buscar sección
    const section = document.getElementById(this.getSectionId(query));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // 2. Resaltar tarjeta
    setTimeout(() => {
      this.highlightCard(query);
    }, 300);
  }

  private getSectionId(query: string): string {
    const normalizedQuery = query.toLowerCase();
    if (normalizedQuery.includes('hero') || normalizedQuery.includes('héroe')) return 'heroes';
    if (normalizedQuery.includes('villan') || normalizedQuery.includes('villano')) return 'villanos';
    if (normalizedQuery.includes('viltrumita')) return 'viltrumitas';
    if (normalizedQuery.includes('arco') || normalizedQuery.includes('argumental')) return 'arcos';
    return normalizedQuery;
  }

  private highlightCard(query: string) {
    const cards = document.querySelectorAll('.card');
    let found = false;
    
    cards.forEach(card => {
      const title = card.querySelector('.card-title')?.textContent?.toLowerCase();
      card.classList.remove('highlight-card');
      
      if (title?.includes(query.toLowerCase())) {
        card.classList.add('highlight-card');
        if (!found) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          found = true;
        }
      }
    });
  }
}