import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
@Component({
  selector: 'app-maly',
  templateUrl: './maly.page.html',
  styleUrls: ['./maly.page.scss'],
})
export class MalyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
