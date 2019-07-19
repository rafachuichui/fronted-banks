import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { AuthGuard } from '../app/core/guards/auth.guard';
import { RegistroFinalizadoComponent } from './registro-finalizado/registro-finalizado.component';
import { HomeLogueadaComponent } from './home-logueada/home-logueada.component';
import { AccesoDenegadoComponent } from './acceso-denegado/acceso-denegado.component';
import { LoginComponent } from './login/login.component';
import { BanksComponent } from './shared/components/banks/banks.component';
import { StockExchangeComponent } from './shared/components/stock-exchange/stock-exchange.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'registro-clientes', component: RegistroClientesComponent },
  { path: 'registro-finalizado', component: RegistroFinalizadoComponent },
  { path: 'home-logueada', component: HomeLogueadaComponent, canActivate: [AuthGuard] },
  { path: 'acceso-denegado', component: AccesoDenegadoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'banks', component: BanksComponent },
  { path: 'stock-exchange', component: StockExchangeComponent },
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