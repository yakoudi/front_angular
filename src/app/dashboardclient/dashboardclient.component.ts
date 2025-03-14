import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ListeappointmentComponent } from '../listeappointment/listeappointment.component';



@Component({
  selector: 'app-dashboardclient',
  imports: [RouterLink,RouterOutlet, CommonModule ,AboutComponent , ListeappointmentComponent],
  templateUrl: './dashboardclient.component.html',
  styleUrl: './dashboardclient.component.css'
})
export class DashboardclientComponent {

}
