import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Principal/header/header.component';
import { FooterComponent } from './components/Principal/footer/footer.component';
import { ApiComponent } from './components/Conteudo/api/api.component';
import { PortfolioComponent } from './components/Conteudo/portfolio/portfolio.component';
import { HomeComponent } from './components/Conteudo/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MusicaComponent } from './components/Conteudo/musica/musica.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiComponent,
    PortfolioComponent,
    HomeComponent,
    MusicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
