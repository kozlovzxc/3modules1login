import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdComponent } from './components/third/third.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdRoutingModule { }
