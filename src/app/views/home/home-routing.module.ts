import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',   
    redirectTo: 'home'       
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
