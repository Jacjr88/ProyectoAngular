import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private appComponent:AppComponent, private loginService:LoginService){}

  userLoginOn:boolean=this.appComponent.userLoginOn;
  rol:string=this.loginService.rol;

  ngOnInit(): void {
    //this.appComponent.userLoginOn = true;
  }
}
