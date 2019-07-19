// Aqui estamos importando el component  paquete angular core
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


//  Aqui decoramos la clase do component App Header
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

// Aqui exportamos la classe HeaderComponent
export class HeaderComponent implements OnInit {
  // aqui definimos el constructor de la aplicación
  formLogin;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log('Component app-header iniciado...');
    this.formLogin = this.fb.group({
      password: ['']
    });
  }


}
