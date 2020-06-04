import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/Reviews/model/Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  likes: number = 0
  @Input() public review: Review 

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.review)

  }
  
  addLikes(quantity)
  {
    this.likes += quantity;
  }
}