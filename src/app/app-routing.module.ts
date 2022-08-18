import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './components/Conteudo/api/api.component';
import { HomeComponent } from './components/Conteudo/home/home.component';
import { PortfolioComponent } from './components/Conteudo/portfolio/portfolio.component';
import { MusicaComponent } from './components/Conteudo/musica/musica.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Musica',component:MusicaComponent},
  {path:'Api',component:ApiComponent},
  {path:'Portfolio',component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
