import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, RouterLink, RouterOutlet } from '@angular/router';
import { AddappComponent } from '../addapp/addapp.component';
import { Router } from '@angular/router';
import { DashboradComponent } from '../dashborad/dashborad.component';

@Component({
  selector: 'app-listeappointment',
  imports: [RouterLink,RouterOutlet, CommonModule, AddappComponent  ],
  templateUrl: './listeappointment.component.html',
  styleUrl: './listeappointment.component.css'
})
export class ListeappointmentComponent {


}
