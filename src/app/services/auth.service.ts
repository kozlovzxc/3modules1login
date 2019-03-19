import { Injectable } from '@angular/core';
import { Login } from '../stores/auth.actions';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }

  login(username: string, password: string) {
    const isExistingUser = username === 'admin' && password === 'password';
    return isExistingUser ? of(null) : throwError(new Error('Invalid login or password'));
  }
}
