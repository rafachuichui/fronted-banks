import { AuthService } from './auth.service';
import { Injectable } from '@angular/core'; import { CanActivate, Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    base_url: string;
    constructor(
        private authService: AuthService,
        private router: Router) { }
    canActivate() {
        // Verifica si existe Token
        if (this.authService.isAuthenticated()) {
            // Caso exista token retorna true
            return true;
        } else {
            // Caso no exista envia para página de DNI no está registrado
            this.router.navigate(['/acceso-denegado']);
            return false;
        }
    }
}