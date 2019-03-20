import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Store, Select } from '@ngxs/store';

import { Login } from 'src/app/stores/auth.actions';
import { AuthState } from 'src/app/stores/auth.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Select(AuthState.authenticated) authenticated$: Observable<boolean>;
  @Select(AuthState.error) error$: Observable<Error>;
  loginForm: FormGroup;
  get login() { return this.loginForm.get('login'); }
  get password() { return this.loginForm.get('password'); }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authenticated$.subscribe((authenticated) => {
      if (authenticated) {
        this.router.navigate(['/']);
      }
    });
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  shouldShowErrors(control: FormControl) { return control.invalid && (control.dirty || control.touched); }

  tryLogin() {
    const {login, password} = this.loginForm.value;
    this.store.dispatch(new Login(login, password));
  }
}
