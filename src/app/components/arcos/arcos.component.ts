import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Para navegación


@Component({
  selector: 'app-arcos',
  standalone: true, // Obligatorio en Angular 17+
  imports: [CommonModule], // Módulos requeridos
  templateUrl: './arcos.component.html', // Ruta relativa al HTML
  styleUrls: ['./arcos.component.css']  // Ruta relativa al CSS
})
export class ArcosComponent {

  // Controla si el acordeón está abierto o cerrado
  isAccordionOpen = false;

  // Lista de arcos
  arcos = [
    { 
      title: "Family Matters", 
      issues: "números 1-4", 
      link: "https://readcomiconline.li/Comic/Invincible/TPB-1-Family-matters?id=34153" 
    },
    { 
      title: "Eight is Enough", 
      issues: "números 5-8", 
      link: "https://readcomiconline.li/Comic/Invincible/TPB-2-Eight-is-Enough?id=34246" 
    },
    { 
      title: "Perfect Strangers", 
      issues: "números 9-13", 
      link: "https://readcomiconline.li/Comic/Invincible/TPB-4-Head-of-The-Class?id=34262" 
    },
    
    { 
      title: "Head of the Class", 
      issues: "números 14-19", 
      link: "https://readcomiconline.li/Comic/Invincible/TPB-5-The-Facts-of-Life?id=34265" 
    },
    { 
      title: "The Facts of Life", 
      issues: "números 20-24", 
      link: "https://readcomiconline.li/Comic/Invincible/TPB-6-A-Different-World?id=34270" 
    },
    { 
      title: "A Different World ", 
      issues: "números 25-30", 
      link: "https://readcomiconline.li/Comic/Invincible/TPB-7-Threes-Company?id=34282" 
    },
    { 
      title: "Three's Company", 
      issues: "números 31-35", 
      link: "https://readcomiconline.li/Comic/Invincible/TPB-8-My-Favorite-Martian?id=34287" 
    },
    { 
      title: "My Favorite Martian ", 
      issues: "números 36-41", 
      link: "https://readcomiconline.li/Comic/Invincible/TPB-13-Growing-Pains" 
    },
    { 
      title: "Growing Pains ", 
      issues: "especial + numero 60", 
      link: "https://readcomiconline.li/Comic/Invincible" 
    },
    { 
      title: "Conquest", 
      issues: "numero 61-65", 
      link: "https://readcomiconline.li/Comic/Invincible" 
    },
    { 
      title: "Cautiously Optimistic", 
      issues: "numero 66-70", 
      link: "https://readcomiconline.li/Comic/Invincible" 
    },
    { 
      title: "Viltrumite War", 
      issues: "numero 71-78", 
      link: "https://readcomiconline.li/Comic/Invincible" 
    },
    { 
      title: "Get Smart", 
      issues: "numero 79-84", 
      link: "https://readcomiconline.li/Comic/Invincible" 
    },
    { 
      title: "The Death of Everyone", 
      issues: "numero 97-100", 
      link: "https://readcomiconline.li/Comic/Invincible" 
    },
    { 
      title: "The end of all things", 
      issues: "numero 133-144", 
      link: "https://readcomiconline.li/Comic/Invincible" 
    },
  ];

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
}
    
