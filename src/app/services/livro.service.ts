import { Injectable } from '@angular/core';
import { Livro } from '../shared/livro';
import { Livros } from '../shared/livros';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor() { }

  getLivros(): Livro[] {
    return Livros
  }

  getLivroById(id: string | null): Livro {
    const [livro] = Livros.filter(livro => livro.id === id)
    return livro
  }
}
