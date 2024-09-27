import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  userLoginOn:boolean=true;

  visibleBadge:boolean=false;

  constructor(private appComponent:AppComponent){}

  ngOnInit(): void {

  }

  logout(){
    this.appComponent.userLoginOn = false;
  }

  checked(){
    this.visibleBadge = true;
  }


}
