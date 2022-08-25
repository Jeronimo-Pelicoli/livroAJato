import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { Livro } from 'src/app/shared/livro';

@Component({
  selector: 'app-listlivros',
  templateUrl: './listlivros.component.html',
  styleUrls: ['./listlivros.component.css']
})
export class ListlivrosComponent implements OnInit {

  livros: Livro[] = []
  
  constructor(
    private livroService: LivroService,   
  ) {  }

  ngOnInit(): void {
    this.livros = this.livroService.getLivros()
  }

}
