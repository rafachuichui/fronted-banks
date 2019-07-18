import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.scss']
})
export class RegistroClientesComponent implements OnInit {
  formRegistro;
  valoresForm: Object;
  conversion;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    // this.formRegistro
    localStorage.clear();
    this.formRegistro = this.fb.group({
      nombre: [''],
      password: [],
      email: [],
      telefono: [],
      direccion: []
    });
    this.formRegistro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
  }
  registro() {
    this.conversion = JSON.stringify(this.valoresForm);
    console.log(this.conversion);
    localStorage.setItem('registro', this.conversion);

    // verificar modal aqui
    this.verificaRegistro();
  }
  verificaRegistro() {
    setTimeout(() => {
      if (localStorage.getItem('registro')) {
        // TODO REDIRECCIONAR PARA PAGINA DE REGISTRADO CORRECTAMENTE
        this.router.navigate(['registro-finalizado']);
      } else {
        return false;
      }
    }, 200);
  }

}




