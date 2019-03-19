import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/index/index.module#IndexModule',
  },
  {
    path: 'second',
    loadChildren: './modules/second/second.module#SecondModule',
  },
  {
    path: 'third',
    loadChildren: './modules/third/third.module#ThirdModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
