//ElementRef, es una clase para manipular el DOM en Angular de forma seguro.
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

// import { Component, OnInit, Renderer2,ElementRef } from '@angular/core';
// @Component({
//   selector: 'app-home-logueada',
//   templateUrl: './home-logueada.component.html',
//   styleUrls: ['./home-logueada.component.scss']
// })

// export class HomeLogueadaComponent implements OnInit {
//   @ViewChild("myButton") myButton: ElementRef;
//   getRegistro;
//   nameCliente;

//   constructor(private renderer: Renderer2) { }

//   ngOnInit() {
//     console.log(this.myButton.nativeElement);
//     this.getRegistro = JSON.parse(localStorage.getItem('registro'));
//     this.nameCliente = this.getRegistro['nombre'];
//     console.log(this.nameCliente);
//   }
// }
