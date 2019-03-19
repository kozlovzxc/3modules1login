import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';

import { LoginComponent } from './login.component';
import { AuthState } from 'src/app/stores/auth.state';
import { Login } from 'src/app/stores/auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let store: Store;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const spyRouter = jasmine.createSpyObj('Router', ['navigate']);
  const spyAuthService = jasmine.createSpyObj('AuthService', ['login']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxsModule.forRoot([AuthState]),
      ],
      providers: [
        { provide: Router, useValue: spyRouter },
        { provide: AuthService, useValue: spyAuthService },
      ],
    })
    .compileComponents();
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on authentication', () => {
    spyAuthService.login.and.returnValue(of(null));
    store.dispatch(new Login('admin', 'password'));
    store.select(AuthState.authenticated).subscribe((authenticated) => expect(authenticated).toBeTruthy());
  });
});
