import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  async login(){ 
    const { username, password } = this;
    try { 
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password).then((res)=> {this.router.navigate(['/tabs/tab2']);
      console.log(res);})
      } 
        catch(error) { console.log(error)}

  }

    } 
