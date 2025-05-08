import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Para navegación

@Component({
  selector: 'app-villanos',
  standalone: true, // Obligatorio en Angular 17+
  imports: [CommonModule], // Módulos requeridos
  templateUrl: './villanos.component.html', // Ruta relativa al HTML
  styleUrls: ['./villanos.component.css']  // Ruta relativa al CSS
})
export class VillanosComponent {
    
}