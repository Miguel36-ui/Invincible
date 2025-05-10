import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Para navegación

@Component({
  selector: 'app-heroes',
  standalone: true, // Obligatorio en Angular 17+
  imports: [CommonModule], // Módulos requeridos
  templateUrl: './heroes.component.html', // Ruta relativa al HTML
  styleUrls: ['./heroes.component.css']  // Ruta relativa al CSS
})
export class HeroesComponent {
    
}