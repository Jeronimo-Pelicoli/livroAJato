import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListlivrosComponent } from './pages/listlivros/listlivros.component';
import { LivrodetailComponent } from './pages/livrodetail/livrodetail.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: 'livros', component: ListlivrosComponent},
  { path: 'detalhelivro/:id', component: LivrodetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},
  { path: '', redirectTo: 'livros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
