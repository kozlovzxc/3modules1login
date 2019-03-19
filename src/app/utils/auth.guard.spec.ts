import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { NgxsModule, Store } from '@ngxs/store';
import { AuthState } from '../stores/auth.state';
import { Login } from '../stores/auth.actions';
import { AuthService } from '../services/auth.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let store: Store;
  const spyAuthService = jasmine.createSpyObj('AuthService', ['login']);
  const spyRouterService = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([AuthState]),
      ],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: spyAuthService },
        { provide: Router, useValue: spyRouterService },
      ],
    });
    store = TestBed.get(Store);
  });

  it('pass on authenticated user', inject([AuthGuard], (guard: AuthGuard) => {
    spyAuthService.login.and.returnValue(of(null));
    store.dispatch(new Login('admin', 'password'));
    const canActivate = guard.canActivate();
    expect(canActivate).toBeTruthy();
  }));

  it('redirect on authenticated user', inject([AuthGuard], (guard: AuthGuard) => {
    spyAuthService.login.and.returnValue(throwError(new Error('invalid login or password')));
    store.dispatch(new Login('admin', 'password'));
    const canActivate = guard.canActivate();
    expect(canActivate).toBeFalsy();
    expect(spyRouterService.navigate).toHaveBeenCalledWith(['/login']);
  }));
});
