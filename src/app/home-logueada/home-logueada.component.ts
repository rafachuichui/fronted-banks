import { Component, OnInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-home-logueada',
  templateUrl: './home-logueada.component.html',
  styleUrls: ['./home-logueada.component.scss']
})

export class HomeLogueadaComponent implements OnInit {
  getRegistro;
  nameCliente;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.el.nativeElement);
    this.getRegistro = JSON.parse(localStorage.getItem('registro'));
    this.nameCliente = this.getRegistro['nombre'];
    console.log(this.nameCliente);
  }
}


