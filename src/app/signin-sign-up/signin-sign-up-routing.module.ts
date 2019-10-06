import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RecordModule } from '../record/record.module';


const routes: Routes = [
  {
    path: 'login',
    component: LayoutComponent
  },
  {
    path: "record",
    loadChildren: '../record/record.module#RecordModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RecordModule]
})
export class SigninSignUpRoutingModule { }
