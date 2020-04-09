import { Component, OnInit } from '@angular/core';
import { Item } from '../../Models/Item';
import { InfoService } from '../../services/info.service';


@Component({
  selector: 'app-masr-elkheer',
  templateUrl: './masr-elkheer.page.html',
  styleUrls: ['./masr-elkheer.page.scss'],
})
export class MasrElkheerPage implements OnInit {

  constructor(private infoService: InfoService) { }

  items: Item;

  ngOnInit() {
}}
