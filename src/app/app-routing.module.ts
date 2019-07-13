import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { AuthGuard } from 'src/auth.guard';
import { RegistroFinalizadoComponent } from './registro-finalizado/registro-finalizado.component';
import { HomeLogueadaComponent } from './home-logueada/home-logueada.component';
import { AccesoDenegadoComponent } from '../acesso-negado/acesso-negado.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'registro-clientes', component: RegistroClientesComponent },
  { path: 'registro-finalizado', component: RegistroFinalizadoComponent },
  { path: 'home-logueada', component: HomeLogueadaComponent, canActivate: [AuthGuard] },
  { path: 'acceso-denegado', component: AccesoDenegadoComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }