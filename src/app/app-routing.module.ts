
/* 
 *  O Angular ele trabalha com rotas, 
 * com caminhos que nós estaremos utilizando para 
 *  alterarmos o conteúdo do site
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

//const routes: Routes = [];

const routes: Routes = [ { path: "", component:LoginComponent } ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
