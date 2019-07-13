import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-denegado',
  templateUrl: './acceso-denegado.component.html',
  styleUrls: ['./acceso-denegado.component.scss']
})
export class AccesoDenegadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navegarParaRegistro() {
    this.router.navigate(['registro-clientes']);
  }
}


