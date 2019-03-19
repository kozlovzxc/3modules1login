import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/stores/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.store.dispatch(new Login('admin', 'password'));
  }

}
