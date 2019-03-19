import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/stores/auth.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
