import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './components/index/index.component';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from 'src/app/stores/auth.state';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    NgxsModule.forFeature([AuthState]),
  ],
  declarations: [IndexComponent],
})
export class IndexModule { }
