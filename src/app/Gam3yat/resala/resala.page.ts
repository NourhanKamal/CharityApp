import { Injectable, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';
// import { Item } from '../../Models/Item';
import { Component, OnInit, OnChanges } from '@angular/core';
import {InfoService} from '../../services/info.service'
import {AboutPage} from '../../about/about.page'
import * as firebase from 'firebase/app'
import 'firebase/firestore';



@Component({
  
  selector: 'app-resala',
  templateUrl: './resala.page.html',
  styleUrls: ['./resala.page.scss'],


})

@Injectable()
export class ResalaPage implements OnInit,OnChanges {
  charity;
  id;

  constructor(private db: AngularFirestore, private AboutPage:AboutPage, private InfoService:InfoService ) { }
  
  ngOnChanges() {
    this.id = this.InfoService.id
    console.log(this.id)
    this.db.doc(`/About /${this.id}`).valueChanges().subscribe(val => {
      console.log(val)
      this.charity = val
    })
  }
  ngOnInit(){
    /* this.id = this.AboutPage.getID()
    this.AboutPage.changeID.subscribe(id => {
      this.id = id
      
    }) */
    this.id = this.InfoService.id
    console.log(this.id)
  }
  }
