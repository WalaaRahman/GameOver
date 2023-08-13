import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  constructor(private _AuthService: AuthenticationService, private _Router: Router) {
  }


  registerForm: FormGroup = new FormGroup({
    //     "firstName" : new FormControl(null,
    //       [
    //         Validators.required,
    //        Validators.minLength(5),
    //        Validators.maxLength(10),
    //        Validators.pattern(/^[A-Z]{1}[a-z]{0,}$/)

    //       ]),
    //       "lastName": new FormControl(null,
    //         [
    //           Validators.required,
    //           Validators.minLength(5),
    //           Validators.maxLength(10),
    //           Validators.pattern(/^[A-Z]{1}[a-z]{0,}$/)
    //         ]),
    //         "email": new FormControl (null,
    //           [
    //           Validators.required,
    //           Validators.email
    //         ]),
    //         "age": new FormControl(null,
    //           [
    //             Validators.required,
    //             Validators.pattern(/^[1-9]{1}[0-9]{0,1}$/)
    //           ]),
    //           "password": new FormControl(null,[
    //             Validators.required,
    //             Validators.minLength(6)
    //           ])


    'name': new FormControl(null,
      [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Z]{1}[a-z]{0,}$/)]),

    'email': new FormControl(null,
      [Validators.required,
      Validators.email]),

    'password': new FormControl(null,
      [Validators.required]),

    'rePassword': new FormControl(null,
      [Validators.required]),

    'phone': new FormControl(null,
      [Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/)])




  }
  )

  goLogin() {
    this._Router.navigate(['./login']);
  }

  register() {
    console.log("Register");
    console.log(this.registerForm.value);

    try {
      this._AuthService.register(this.registerForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.message == "success") {
            this._Router.navigate(['/login']);
            console.log("Done Registering");

          }

        },
        error: (err) => {
          //  console.log(err);
          //  console.log(err.error.message);
          alert(err.error.message)
          console.log(err.error);
          
        }
      })
    } catch (error) {
      console.log("catch error");

    }


  }
}
