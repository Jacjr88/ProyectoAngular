import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nominacion',
  templateUrl: './nominacion.component.html',
  styleUrls: ['./nominacion.component.scss']
})
export class NominacionComponent {
  showPopUp:boolean=true;

  constructor(private appComponent:AppComponent){}

  userLoginOn:boolean=this.appComponent.userLoginOn;

}
