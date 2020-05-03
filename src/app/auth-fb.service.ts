import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthFBService {

  constructor(private auth: AngularFireAuth, private router: Router, private fb:Facebook) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
    this.fb.getLoginStatus().then(res => {
      if(res.status ==='connected') {
        resolve(true)
      } else {
        console.log('User is not logged in');
        this.router.navigate(['/login']);
        resolve(false);
      }
    })
  })
  }
}
