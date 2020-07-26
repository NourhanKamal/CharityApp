import { Component, OnInit, Input} from '@angular/core';
import { StarService } from '../../services/star.service';
import { Observable } from 'rxjs/Observable';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-star-review',
  templateUrl: './star-review.page.html',
  styleUrls: ['./star-review.page.scss'],
})
export class StarReviewPage implements OnInit {

  @Input() userId
  @Input() charityId

  stars: Observable<any>;
  avgRating: Observable<any>;
  
  constructor(private starService: StarService) { }

  ngOnInit() {
    
    this.stars = this.starService.getCharityStars(this.charityId)
    
    this.avgRating = this.stars.map(arr => { 
      const ratings = arr.map(v => v.value)

      return ratings.length ? ratings.reduce((total, val) => total + val ) / arr.length : 'not reviewed'
    })
  }
  
  starHandler(value) {
     this.starService.setStar(this.userId, this.charityId, value)
  }

}

