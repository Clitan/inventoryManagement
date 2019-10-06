import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninSignUpModule } from './signin-sign-up/signin-sign-up.module';


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'',
    loadChildren:'./signin-sign-up/signin-sign-up.module#SigninSignUpModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
