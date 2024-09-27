import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NominacionComponent } from './pages/nominacion/nominacion.component';
import { LoginComponent } from './auth/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { DeactivateGuard } from './shared/guard/deactivate.guard';



const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
    {
      path:'',
      component:LayoutComponent,
      children:[
        {path:'inicio',component:HomeComponent, canActivate: [AuthGuard]},
        {path:'login',component:LoginComponent},
        {path:'nominacion',component:NominacionComponent, canActivate: [AuthGuard], canDeactivate: [DeactivateGuard]},
        {path:'contact',component:ContactComponent, canActivate: [AuthGuard]}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
