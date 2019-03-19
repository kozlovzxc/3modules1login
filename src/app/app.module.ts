import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { AuthState } from './stores/auth.state';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([AuthState]),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }), // must be last nxgs import
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
