import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isAuthenticated() {
        // pega el token registrado
        const token = localStorage.getItem('registro');
        // verifica si existe token
        if (token) {
            return true;
        }
        return false;
    }
}