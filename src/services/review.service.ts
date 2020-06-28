import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class reviewService {
    private data = [
        {
          expanded: true,
          reviews: [
            { id: 0, name: 'User Name', rate: '8' },
            { id: 1, name: 'User Name', rate: '5' },
            { id: 2, name: 'User Name', rate: '9' },
            { id: 3, name: 'User Name', rate: '7' }
          ]
        }
       
      ];

      private comment = [];
 
      constructor() { }
     
      getReviews() {
        return this.data;
      }
     
      getComment() {
        return this.comment;
      }
     
      addReview(review) {
        this.comment.push(review);
      }
    }
