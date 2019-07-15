import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-finalizado',
  templateUrl: './registro-finalizado.component.html',
  styleUrls: ['./registro-finalizado.component.scss']
})
export class RegistroFinalizadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    this.navegarParaLogin();
  }
  navegarParaLogin() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }

}



