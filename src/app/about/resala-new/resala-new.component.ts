import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {CharityListComponent} from '../charity-list/charity-list.component'
import {AboutService} from '../about.service'
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-resala-new',
  templateUrl: './resala-new.component.html',
  styleUrls: ['./resala-new.component.scss'],
})
export class ResalaNewComponent implements OnInit {

  
  constructor(private db:AngularFirestore,private router:Router, private route:ActivatedRoute, private cl:AboutService) { }

  ngOnInit() {
    var path = this.router.url;
    console.log(path)
    this.db.doc(path).valueChanges().subscribe(val => {
      this.charity = val
      console.log(val)
    })
  }
  charity;


}
