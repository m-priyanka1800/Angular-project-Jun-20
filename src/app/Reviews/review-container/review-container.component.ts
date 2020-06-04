import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/Reviews/model/Review';

@Component({
  selector: 'app-review-container',
  templateUrl: './review-container.component.html',
  styleUrls: ['./review-container.component.css']
})
export class ReviewContainerComponent implements OnInit {

  public reviews: Review[]

  constructor() {

  }

  ngOnInit(): void {
    this.reviews = [
      new Review(1,"The Jungle Book","Engaging classic!","/assets/jungle_book.jpg","Priyanka Murali")
      ,new Review(2,"The Count of Monte Cristo","Epic story of betryal & revenge.","/assets/count_of_monte_cristo.jpg","Priyanka Murali")
      ,new Review(3,"Call of the wild","Thrilling read. I loved it.","/assets/call_of_the_wild.jpg","Priyanka Murali")
    ]
  }

}
