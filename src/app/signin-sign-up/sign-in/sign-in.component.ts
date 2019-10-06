import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/main-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  user = new FormControl('', [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),
  ]);

  Password = new FormControl('', [
    Validators.required,
  ]);

  form: FormGroup = new FormGroup({
    userName: this.user,
    password: this.Password
  });

  getErrorMessage(FormControlerName: FormControl) {
    return FormControlerName.hasError('required') ? 'You must enter a value' :
      FormControlerName.hasError('pattern') ? 'Not a valid Input' : '';
  }
  constructor(private router: Router, private service: MainServiceService) { }

  ngOnInit() {
  }

  submit(): void {
    if (this.user.value == "admin" && this.Password.value == "12345") {
      this.router.navigate(['/record'])
      this.service.loginUserName = this.user.value;
      Swal.fire(
        'successfully logged in',
        '',
        'success'
      )
    }
    else {
      Swal.fire(
        'Invalid User and password!',
        '',
        'error'
      )


    }
  }

}
