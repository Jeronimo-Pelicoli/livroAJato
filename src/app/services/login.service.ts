import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Users } from '../shared/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login( user: User) {
    const [ login ] = Users.filter( userbd => userbd.name === user.name && userbd.password === user.password)
    return login
  }

  getUser() {
    return Users
  }
}
