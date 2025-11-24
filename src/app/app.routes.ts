import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TendersComponent } from './pages/tenders/tenders.component';
import { ContantUsComponent } from './pages/contant-us/contant-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"",component:BlankLayoutComponent ,children:[
        {path:"home",loadComponent:() => import('./pages/home/home.component').then(m => m.HomeComponent),title:"Home Page"},
        {path:"tenders",loadComponent:() => import('./pages/tenders/tenders.component').then(m => m.TendersComponent),title:"Tenders Page"},
        {path:"contact-us",loadComponent:() => import('./pages/contant-us/contant-us.component').then(m => m.ContantUsComponent),title:"Contact Us Page"},
        {path:"**",loadComponent:() => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),title:"Not Found Page"}
    ]}
];
