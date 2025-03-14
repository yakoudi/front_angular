import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { ContactComponent } from "./contact/contact.component";
import { TarifComponent } from "./tarif/tarif.component";
import { LoginComponent } from './login/login.component';
import { TeamstartComponent } from "./teamstart/teamstart.component";
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule, CommonModule, FooterComponent, HeaderComponent, AboutComponent, ServiceComponent, ContactComponent, TarifComponent, LoginComponent,RegisterComponent, TeamstartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontangprojet';
  showNavbarAndFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbarAndFooter = !event.url.includes('/dashboard')&& !event.url.includes('/add-appointment')&& !event.url.includes('/listeapp');
      }
    });
  }


}
