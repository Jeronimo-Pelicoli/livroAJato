import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/services/login.service';
import { loginUser, State } from 'src/app/store/state.state';
import { User } from '../../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User
  checkoutForm = this.formBuilder.group({
    id: '',
    name: '',
    password: ''
  })

  constructor(
    private store: Store<{ state: State }>,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private location: Location
  ) {
    this.store.select('state').subscribe(state => this.user = state.user)
  }
  
  ngOnInit(): void {
  }

  login() {
    const login = this.checkoutForm.value
    if(!login.name.toString() || !login.password.toString()) {
      console.log("empyt")
      return
    }
    this.user = this.loginService.login(this.checkoutForm.value)
    this.store.dispatch(loginUser({ payload: {user: this.user, lido: []} }))
    this.checkoutForm.reset()
    this.location.back()
  }
  
}
