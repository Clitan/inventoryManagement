import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { SigninSignUpRoutingModule } from './signin-sign-up-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [SignInComponent, LayoutComponent],
  imports: [
    CommonModule,
    SigninSignUpRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class SigninSignUpModule { }
