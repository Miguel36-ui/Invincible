import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Para navegación

@Component({
  selector: 'app-form',
  standalone: true, // Obligatorio en Angular 17+
  imports: [CommonModule], // Módulos requeridos
  templateUrl: './form.component.html', // Ruta relativa al HTML
  styleUrls: ['./form.component.css']  // Ruta relativa al CSS
})
export class FormComponent {
    
}