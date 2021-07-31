import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from './authentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  authenticated: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authenticationService.isAuthenticated()
        .pipe(
          tap(loggedIn => {
            if (!loggedIn) {
              this.router.navigate(['/login']);
            }
          })
        );
  }
}
