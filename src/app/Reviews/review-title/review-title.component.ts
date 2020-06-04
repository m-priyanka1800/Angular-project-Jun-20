import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-title',
  templateUrl: './review-title.component.html',
  styleUrls: ['./review-title.component.css']
})
export class ReviewTitleComponent implements OnInit {

  @Input() public reviewTitle: string
  constructor() { }

  ngOnInit(): void {
  }

}
