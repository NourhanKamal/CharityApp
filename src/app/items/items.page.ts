import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Item } from '../Models/Item'  

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(private infoService: InfoService) { }
  items: Item[];

  ngOnInit() {
// this.infoService.getItems().subscribe(items => {
//   // console.log(items)
//   this.items = items;
// })  }
  }
}
