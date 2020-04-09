import { Injectable, Output, EventEmitter, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { AngularFirestoreDocument } from 'angularfire2/firestore';
// // import { Observable } from 'rxjs/Observable';
// // import { Item } from '../../Models/Item';
import { Component, OnInit } from '@angular/core';
import {InfoService} from '../../services/info.service'
import 'firebase/firestore';
import * as firebase from 'firebase/app'




@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss'],
})
export class CharityListComponent implements OnInit {

  charities;
     
  constructor(private db:AngularFirestore, private InfoService:InfoService ){};

   
  

  ngOnInit(){
    this.db.collection('/about').valueChanges().subscribe(val => {
      console.log(val)
      this.charities = val
    })
  }
}
