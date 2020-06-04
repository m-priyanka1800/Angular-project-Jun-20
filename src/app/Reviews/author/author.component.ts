import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() public reviewAuthor: string
  
  constructor() { }

  ngOnInit(): void {
  }

}
