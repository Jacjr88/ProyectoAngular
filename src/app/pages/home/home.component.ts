import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private appComponent:AppComponent){}

  userLoginOn:boolean=this.appComponent.userLoginOn;

  ngOnInit(): void {
    //this.appComponent.userLoginOn = true;
  }
}
