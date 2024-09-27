import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { UserRol } from './services/auth/userRol';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'proyecto';
  userLoginOn:boolean=false;
  userRol:string;

  constructor(private loginService:LoginService) {
    this.userRol=this.loginService.rol;
  }

  ngOnInit(): void {
    //this.userRol = this.loginService.rol;
  }
}
