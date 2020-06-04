import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-description',
  templateUrl: './review-description.component.html',
  styleUrls: ['./review-description.component.css']
})
export class ReviewDescriptionComponent implements OnInit {

  @Input() public reviewDescription:string
  
  constructor() { }

  ngOnInit(): void {
  }

}
