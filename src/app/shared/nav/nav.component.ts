import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  userLoginOn:boolean=true;

  visibleBadge:boolean=false;

  constructor(private appComponent:AppComponent, private loginService:LoginService){}

  rol:string=this.loginService.rol;

  ngOnInit(): void {
  }

  logout(){
    this.appComponent.userLoginOn = false;
  }

  checked(){
    this.visibleBadge = true;
  }


}
