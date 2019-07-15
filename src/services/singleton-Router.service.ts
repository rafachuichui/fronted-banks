import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SingletonRouterService {
  private credentials = true;

  getCredentials(): boolean {
    return this.credentials;
  }

  setCredentials(credentials: boolean) {
    this.credentials = credentials;
  }

  constructor() { }
}



