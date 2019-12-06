import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

//Angular Material
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    MatIconModule
  ],
  exports : [
    NavbarComponent
  ]
})
export class NavbarModule { }
