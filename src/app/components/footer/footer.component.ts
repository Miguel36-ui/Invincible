import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Para navegación

@Component({
  selector: 'app-footer',
  standalone: true, // Obligatorio en Angular 17+
  imports: [CommonModule], // Módulos requeridos
  templateUrl: './footer.component.html', // Ruta relativa al HTML
  styleUrls: ['./footer.component.css']  // Ruta relativa al CSS
})
export class FooterComponent {
    
}