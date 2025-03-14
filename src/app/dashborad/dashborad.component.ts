import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ListeappointmentComponent } from '../listeappointment/listeappointment.component';

@Component({
  selector: 'app-dashborad',
  imports: [RouterLink,RouterOutlet, CommonModule ,AboutComponent, ListeappointmentComponent],
  templateUrl: './dashborad.component.html',
  styleUrl: './dashborad.component.css'
})
export class DashboradComponent {

}
