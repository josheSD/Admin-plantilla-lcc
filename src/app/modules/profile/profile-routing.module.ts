import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


const routes: Routes = [
  {
    path: '',redirectTo: 'my-profile',pathMatch: 'full'
  },
  {
    path:'',
    children: [
      {
        path:'my-profile',
        component: MyProfileComponent,
        data:{title:'Perfil'}
      },
      {
        path:'configuration',
        component: ConfigurationComponent,
        data:{title:'Configuración'}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
