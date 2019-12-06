import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [ConfigurationComponent, MyProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
