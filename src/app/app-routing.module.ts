import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/index/index.module#IndexModule',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'second',
    loadChildren: './modules/second/second.module#SecondModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'third',
    loadChildren: './modules/third/third.module#ThirdModule',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
