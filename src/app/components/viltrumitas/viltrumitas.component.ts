import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Para navegación

@Component({
  selector: 'app-viltrumitas',
  standalone: true, // Obligatorio en Angular 17+
  imports: [CommonModule], // Módulos requeridos
  templateUrl: './viltrumitas.component.html', // Ruta relativa al HTML
  styleUrls: ['./viltrumitas.component.css']  // Ruta relativa al CSS
})
export class ViltrumitasComponent {
    
}