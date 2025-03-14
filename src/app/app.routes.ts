import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { Component } from '@angular/core';
import { TarifComponent } from './tarif/tarif.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { DashboardclientComponent } from './dashboardclient/dashboardclient.component';
import { ListeappointmentComponent } from './listeappointment/listeappointment.component';
import { AddappComponent } from './addapp/addapp.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    {
        path:'about',
        component:AboutComponent
    },
   
    {   path:'service',
        component:ServiceComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'tarif',
       component:TarifComponent
    },
    {
        path:'register',
       component:RegisterComponent
    },
    {
        path:'dashboard',
        component:DashboradComponent
      
    },
    {
        path:'dashboardpatient',
        component:DashboardclientComponent
      
    },
    { path: 'listeapp', 
      component: ListeappointmentComponent
     },
     { path: 'add-appointment', component: AddappComponent }
];
