import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})

export class ProfilePictureComponent implements OnInit {

  @Input() public profilePicture:string
  constructor() { }

  ngOnInit(): void {
  }

}
