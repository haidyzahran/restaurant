import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [

    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:"home", component:HomeComponent},
    {path:"category/:title", component:CategoryComponent},
    {path:"**", component:HomeComponent},
];
