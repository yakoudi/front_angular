import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-addapp',
  imports: [RouterLink,RouterOutlet, CommonModule ,AboutComponent],
  templateUrl: './addapp.component.html',
  styleUrl: './addapp.component.css'
})
export class AddappComponent {

}
