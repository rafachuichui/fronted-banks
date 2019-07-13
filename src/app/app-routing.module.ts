import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { AuthGuard } from 'src/auth.guard';
import { HomeLoginComponent } from './home-login/home-login.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'registro-clientes', component: RegistroClientesComponent },
  //{ path: 'registro-finalizado', component: RegistroFinalizadoComponent },
  { path: 'home-login', component: HomeLoginComponent, canActivate: [AuthGuard] },
  //{ path: 'acceso-denegado', component: AccesoDenegadoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],

  exports: [RouterModule]
})
export class AppRoutingModule { }
