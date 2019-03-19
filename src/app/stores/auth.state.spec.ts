import { async, TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { of, throwError } from 'rxjs';

import { AuthState } from './auth.state';
import { Login } from './auth.actions';
import { AuthService } from '../services/auth.service';

describe('AuthState', () => {
  let store: Store;

  const spyAuthService = jasmine.createSpyObj('AuthService', ['login']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthState])],
      providers: [
        { provide: AuthService, useValue: spyAuthService },
      ],
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('set authenticate on valid login and password', async(() => {
    spyAuthService.login.and.returnValue(of(null));
    store.dispatch(new Login('admin', 'password'));
    store.select(AuthState.authenticated).subscribe((authenticated) => expect(authenticated).toBeTruthy());
  }));

  it('unset authenticate on invalid login or password', async(() => {
    spyAuthService.login.and.returnValue(throwError(new Error('invalid login or password')));
    store.dispatch(new Login('admin', 'notpassword'));
    store.select(AuthState.authenticated).subscribe(
      (authenticated) => expect(authenticated).toBeFalsy(),
      (error) => expect(error).toBeTruthy(),
    );
  }));
});