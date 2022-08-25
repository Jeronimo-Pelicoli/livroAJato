import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { LivroService } from 'src/app/services/livro.service';
import { Lido } from 'src/app/shared/lido';
import { Livro } from 'src/app/shared/livro';
import { User } from 'src/app/shared/user';
import { marcarlido, State } from 'src/app/store/state.state';

@Component({
  selector: 'app-livrodetail',
  templateUrl: './livrodetail.component.html',
  styleUrls: ['./livrodetail.component.css']
})
export class LivrodetailComponent implements OnInit {

  livro!: Livro
  user!: User
  lido!: Lido[]
  jaLido: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private livroService: LivroService,
    private store: Store<{ state: State }>
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.livro = this.livroService.getLivroById(id)
    this.store.select('state').subscribe(state => {
      this.user = state.user
      this.lido = state.lido
    })
    for(const livro of this.lido) {
      if(livro.idlivro === id && livro.iduser === this.user.id) {
        this.jaLido = true
      }
    }
    console.log(this.lido)
  }

  marcarLido() {
    const pontos = Math.floor(this.livro.quantpages /100) + 1
    const value: Lido = {idlivro: this.livro.id, iduser: this.user.id, quantpages: this.livro.quantpages, pontos: pontos}
    this.store.dispatch(marcarlido({ payload: value }))
  }

}
