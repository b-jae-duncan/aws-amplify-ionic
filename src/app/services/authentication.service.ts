import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, tap, catchError } from 'rxjs/operators';
import { Auth } from 'aws-amplify';
import { UsernamePasswordOpts } from '@aws-amplify/auth/lib-esm/types';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>; //A variant of Subject that requires an initial value and emits its current value whenever it is subscribed to. https://rxjs.dev/guide/subject
  public currentUser: Observable<any>;

  constructor(public navCtrl: NavController) {
    this.currentUserSubject = new BehaviorSubject<boolean>(false);
  }

  /** signup */
  public signUp(email, password): Observable<any> {
    return fromPromise(Auth.signUp(email, password));
  }

  /** confirm code */
  public confirmSignUp(email, code): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }

  public signIn(username: string, password: string): Observable<any> {
    return fromPromise(Auth.signIn(username, password)).pipe(
      tap(() => this.currentUserSubject.next(true)),
      catchError((err) => {
        this.currentUserSubject.next(false);
        // return of(false);
        return throwError(err)
      })
    );
  }



  /** get authenticat state */
  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser()).pipe(
      map((result) => {
        this.currentUserSubject.next(true);
        return true;
      }),
      catchError((error) => {
        this.currentUserSubject.next(false);
        return of(false);
        // return throwError(error)
      })
    );
  }

  public getUser() {
    return  fromPromise(Auth.currentUserInfo())
  }

  /** signout */
  public signOut() {
    fromPromise(Auth.signOut()).subscribe(
      (result) => {
        this.currentUserSubject.next(false);
        this.navCtrl.navigateRoot('/login');
      },
      (error) => console.log(error)
    );
  }
}
