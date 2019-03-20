import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { NgxsModule, Store } from '@ngxs/store';
import { AuthState } from '../stores/auth.state';
import { SetState } from '../stores/auth.actions';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let store: Store;
  const spyRouterService = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([AuthState]),
      ],
      providers: [
        AuthGuard,
        { provide: Router, useValue: spyRouterService },
      ],
    });
    store = TestBed.get(Store);
  });

  it('pass on authenticated user', inject([AuthGuard], (guard: AuthGuard) => {
    store.dispatch(new SetState(true));
    const canActivate = guard.canActivate();
    expect(canActivate).toBeTruthy();
  }));

  it('redirect on authenticated user', inject([AuthGuard], (guard: AuthGuard) => {
    store.dispatch(new SetState(false));
    const canActivate = guard.canActivate();
    expect(canActivate).toBeFalsy();
    expect(spyRouterService.navigate).toHaveBeenCalledWith(['/login']);
  }));
});
