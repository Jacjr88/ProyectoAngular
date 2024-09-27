import { NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'

import {MatInputModule} from '@angular/material/input'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatMenuModule} from '@angular/material/menu'
import {MatBadgeModule} from '@angular/material/badge'


@NgModule({
  exports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule
  ],
})
export class MaterialModule {
}
