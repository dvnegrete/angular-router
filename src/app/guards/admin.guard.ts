import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("AdminGuard. Antes de AuthService.user$")
      return this.authService.user$
      .pipe(
        map(user => {
          if (user?.role === 'admin') {
            console.log("GUARD. Usuario Admin", user)
            return true;
          } else {
            console.log("GUARD. Otro usuario", user)
            this.router.navigate(['/home'])
            return false;
          }
        })
      )
  }
  
}
