import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MainServiceService } from './main-service.service';
import { SigninSignUpModule } from './signin-sign-up/signin-sign-up.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterModule,
        SigninSignUpModule,
    ],
    providers: [MainServiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
