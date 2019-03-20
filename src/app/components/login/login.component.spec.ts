import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';

import { LoginComponent } from './login.component';
import { AuthState } from 'src/app/stores/auth.state';
import { SetState } from 'src/app/stores/auth.actions';

describe('LoginComponent', () => {
  let store: Store;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const spyRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxsModule.forRoot([AuthState]),
      ],
      providers: [
        { provide: Router, useValue: spyRouter },
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
    store.dispatch(new SetState(true));
    store.select(AuthState.authenticated).subscribe((authenticated) => expect(authenticated).toBeTruthy());
  });
});
