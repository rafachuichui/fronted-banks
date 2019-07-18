import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//typed.js es una libreria de animacion de JS
import * as Typed from 'typed.js';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const animationsWords = {
      stringsElement: '#typed-strings',
      strings: ['Esto es Banks of Banks amigos', ' Cambiate a nosotros y empieza a ser Banking desde hoy mismo', 'Innovador digital y seguro'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };

    //const typed = new Typed('.typing-element', animationsWords);



  }


  gotoRegistroClientes() {
    this.router.navigate(['registro-clientes']);
  }
}


