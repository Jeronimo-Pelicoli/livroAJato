import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListlivrosComponent } from './pages/listlivros/listlivros.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LivrodetailComponent } from './pages/livrodetail/livrodetail.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';

import { LivroService } from './services/livro.service';
import { stateReducer } from './store/state.state';

@NgModule({
  declarations: [
    AppComponent,
    ListlivrosComponent,
    HeaderComponent,
    FooterComponent,
    LivrodetailComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ state: stateReducer}),

  ],
  providers: [
    LivroService,
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
