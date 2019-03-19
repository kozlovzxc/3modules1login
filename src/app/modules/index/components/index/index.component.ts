import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Logout } from 'src/app/stores/auth.actions';
import { AuthState } from 'src/app/stores/auth.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  @Select(AuthState.authenticated) authenticated$: Observable<boolean>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
