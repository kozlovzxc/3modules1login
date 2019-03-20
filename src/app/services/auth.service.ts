import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string) {
    return this.http.post<String>('/api/login', {
      username,
      password,
    });
  }

  logout() {
    return this.http.post<String>('/api/logout', {});
  }
}
