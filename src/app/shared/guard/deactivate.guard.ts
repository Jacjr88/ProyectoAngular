import { CanDeactivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { NominacionComponent } from "src/app/pages/nominacion/nominacion.component";

@Injectable()
export class DeactivateGuard implements CanDeactivate<NominacionComponent>{
  canDeactivate(component: NominacionComponent):boolean {
    if(component.showPopUp){
      return confirm("Desea dejar la pantalla de Nominación?")
    }
    return true;
  }
}
