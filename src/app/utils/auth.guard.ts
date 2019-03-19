import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { AuthState } from '../stores/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store,
  ) {}

  canActivate() {
    const authenticated = this.store.selectSnapshot(AuthState.authenticated);
    if (!authenticated) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
