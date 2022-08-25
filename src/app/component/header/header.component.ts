import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/user';
import { logoffUser, State } from 'src/app/store/state.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user!: User

  constructor(
    private store: Store<{ state: State }>
  ) { 
    this.store.select('state').subscribe(state => this.user = state.user)
  }

  ngOnInit(): void {
  }

  logoff() {
    this.store.dispatch(logoffUser())
  }
}
