import { NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginMaterialComponent } from './login-material.component'

import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    LoginMaterialComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule
  ],
})
export class LoginMaterialModule {
}
