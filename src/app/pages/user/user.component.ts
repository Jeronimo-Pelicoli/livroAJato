import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/user';
import { Lido } from 'src/app/shared/lido';
import { State } from 'src/app/store/state.state';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User
  lido: Lido[] = []
  users: User[] = []
  pontuacao: number = 0
  rank: Array<rank> = []

  constructor(
    private storeUser: Store<{ state: State }>,
    private location: Location,
    private userService: LoginService
  ) { }

  ngOnInit(): void {
    this.storeUser.select('state').subscribe(state => {
      this.user = state.user
      this.lido = state.lido
    })
    this.users = this.userService.getUser()
    if(!this.user.login) {
      this.location.back()
    }
    for( const lidos of this.lido) {
      if(lidos.iduser === this.user.id) {
        this.pontuacao += lidos.pontos
      }
      for(const [index, user] of this.users.entries()) {
        if(user.id === lidos.iduser) {
          let aux = this.rank[index] ? this.rank[index].pontos : 0
          let pontos = lidos.pontos + aux
          this.rank[index] = { name: user.name, pontos}
        }
      }
    }
    this.rank.sort((a,b) => (a.pontos < b.pontos) ? 1 : ((b.pontos < a.pontos) ? -1 : 0))
  }
}

interface rank {
  name: string;
  pontos: number;
}
