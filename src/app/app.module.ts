import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeLogueadaComponent } from './home-logueada/home-logueada.component';
import { RegistroFinalizadoComponent } from './registro-finalizado/registro-finalizado.component';
import { AuthGuard } from 'src/auth.guard';
import { AuthService } from 'src/auth.service';
import { AccesoDenegadoComponent } from './acceso-denegado/acceso-denegado.component';
import { ModalNotRegistroComponent } from './modal-not-registro/modal-not-registro.component';
import { SingletonRouterService } from 'src/services/singleton-Router.service';

import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    RegistroClientesComponent,
    HomeLogueadaComponent,
    LoginComponent,
    RegistroFinalizadoComponent,
    AccesoDenegadoComponent,
    ModalNotRegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule

  ],
  providers: [AuthGuard, AuthService, SingletonRouterService],
  bootstrap: [AppComponent],
  entryComponents: [ModalNotRegistroComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, ContentComponent, FooterComponent, RegistroClientesComponent, LoginComponent, RegistroFinalizadoComponent, AccesoDenegadoComponent, ModalNotRegistroComponent]
})

export class AppModule { }
