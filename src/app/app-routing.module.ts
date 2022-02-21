import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utility/app.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome', loadChildren: ()=> import ('./views/home/home.module').then(m=> m.HomeModule)
  },
  {
    path: 'profile', 
    loadChildren: ()=> import ('./views/profile/profile.module').then(m=> m.ProfileModule),
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
