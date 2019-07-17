// Aqui estamos importando el component  paquete angular core
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


//  Aqui decoramos la clase do component App Header
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


// // Aqui exportamos la clase HeaderComponent
// export class HeaderComponent implements OnInit {
//   formLogin

// // aqui definimos el constructor de la aplicación
//   constructor(private fb: FormBuilder) { }

//   ngOnInit() {
//     this.formLogin = this.fb.group({
//       dni: ['']
//     });
//   }

//}


// Aqui exportamos l classe HeaderComponent
export class HeaderComponent implements OnInit {
  // aqui definimos el constructor de la aplicación
  constructor() { }

  ngOnInit() {
    console.log('Component app-header iniciado...');
  }

}