import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalNotRegistroComponent } from '../modal-not-registro/modal-not-registro.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formLogin;
  theEvent;
  key;
  regex;
  keys;
  getRegistro;
  message;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      dni: ['']
    });
  }
  onlynumber(evt) {
    this.theEvent = evt || window.event;
    this.key = this.theEvent.keyCode || this.theEvent.which;
    this.key = String.fromCharCode(this.key);
    this.regex = /^[0-9.]+$/;
    if (!this.regex.test(this.key)) {
      this.theEvent.returnValue = false;
      if (this.theEvent.preventDefault) {
        this.theEvent.preventDefault();
      }
    }
  }
  login() {
    this.getRegistro = JSON.parse(localStorage.getItem('registro'));
    const dniAdmitido = this.getRegistro['dni'];
    const dniDigitalizado = this.formLogin.get('dni').value;
    if (dniAdmitido === dniDigitalizado) {
      this.router.navigate(['home-logueada']);
    } else {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalNotRegistroComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}