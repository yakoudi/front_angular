import { Component ,CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listanalysepatient',
  imports: [RouterLink,RouterOutlet, CommonModule,],
  templateUrl: './listanalysepatient.component.html',
  styleUrl: './listanalysepatient.component.css',
   schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
      encapsulation: ViewEncapsulation.None
})
export class ListanalysepatientComponent {

}
