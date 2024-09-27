import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  constructor(private appComponent:AppComponent){}

  userLoginOn:boolean=this.appComponent.userLoginOn;

  ngOnInit(): void {
    //this.appComponent.userLoginOn = true;
  }

}
