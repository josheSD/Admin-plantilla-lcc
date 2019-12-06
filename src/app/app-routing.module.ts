
import { AuthComponent } from './layouts/auth/auth.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',redirectTo: 'login',pathMatch: 'full'
  },
  {
    path:'',component:AdminComponent,
    children:[
      {path:'',loadChildren:() => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path:'profile',loadChildren:() => import('./modules/profile/profile.module').then(m => m.ProfileModule)}
    ]
  },
  {
    path:'',component: AuthComponent,
    children:[
      {path:'',loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)}
    ]
  },
  {
    path:'**',component:  NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
