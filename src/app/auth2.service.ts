import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user) {
        resolve(false);
        this.router.navigate(['/tabs']);
      } else {
        resolve(true);
      }
    })
  })
  }


}
