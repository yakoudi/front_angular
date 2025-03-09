import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { Component } from '@angular/core';
import { TarifComponent } from './tarif/tarif.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
        path:'contact ',
        component:ContactComponent
    },
    {
        path:'tarif',
       component:TarifComponent
    },
    {
        path:'register',
       component:RegisterComponent
    }
];
