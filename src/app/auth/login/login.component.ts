import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';
import { UserRol } from 'src/app/services/auth/userRol';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    loginError:string="";
    loginSuccessAlert:boolean=false;

    loginForm=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })

    constructor(
      private formBuilder:FormBuilder,
      private router:Router,
      private loginService:LoginService,
      private appComponent:AppComponent
    ) { }

    ngOnInit(): void {
      this.appComponent.userLoginOn = false;
      this.loginSuccessAlert = false;
      console.log(this.appComponent.userLoginOn);
    }

    get email() { return this.loginForm.controls.email;}

    get password() { return this.loginForm.controls.password; }

    login():UserRol | any{

      if(this.loginForm.valid && this.loginService.validate(this.loginForm.value as LoginRequest) !== null){
        this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
          next: (userData) => {
            console.log(userData);

            this.appComponent.userLoginOn = true;
            console.log(this.appComponent.userLoginOn);

          },
          error: (errorData) => {
            console.log(errorData);
            this.loginError=errorData;
          },
          complete: () => {
            console.log("Login Completo")

            this.router.navigateByUrl('/inicio');
            this.loginForm.reset();
            return this.loginService.validate(this.loginForm.value as LoginRequest);
          }
        });

      } else {
        this.loginForm.markAllAsTouched();
        this.loginSuccessAlert = true;
      }
    }
}
