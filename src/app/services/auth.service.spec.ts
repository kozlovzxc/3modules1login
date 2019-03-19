import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should log in with valid login and password', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.login('admin', 'password').subscribe(() => expect().nothing());
  });

  it('should not log in with invalid login and password', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.login('admin', 'notpassword').subscribe(
      () => {},
      (error) => expect(error).toBeTruthy(),
    );
  });
});
