import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NominacionComponent } from './pages/nominacion/nominacion.component';
import { LoginComponent } from './auth/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nominacion',component:NominacionComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
