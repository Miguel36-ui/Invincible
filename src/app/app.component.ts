import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { VillanosComponent } from './components/villanos/villanos.component';
import { ViltrumitasComponent } from './components/viltrumitas/viltrumitas.component';
import { ArcosComponent } from './components/arcos/arcos.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, HeroesComponent, VillanosComponent, ViltrumitasComponent, 
    ArcosComponent, FormComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HolaMundo';
  showScrollButton = false;

  // Detecta el scroll
  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollButton = (window.scrollY > 200);
  }

  // Función para subir
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  }
}

