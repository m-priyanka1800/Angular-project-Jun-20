import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent implements OnInit {

  backgroundRed: number = 255
  backgroundBlue: number = 255
  backgroundGreen: number = 255

  textRed: number = 0
  textBlue: number = 0
  textGreen: number = 0


  colourBgRGB: string = null
  colourTextRGB: string = null  

  constructor() { }

  ngOnInit(): void {
  }

  //Number to hexadecimal convertor
  rgbNumToHex(red:number, green:number, blue:number) {
    return( "#" + red.toString(16).padEnd(2,"0").toUpperCase()
      + green.toString(16).padEnd(2,"0").toUpperCase()
      + blue.toString(16).padEnd(2,"0").toUpperCase())
  }

  //Get background colour
  getBGColor()
  {
    this.colourBgRGB = this.rgbNumToHex(this.backgroundRed, this.backgroundGreen, this.backgroundBlue)
    return this.colourBgRGB
  }

  //Get text colour
  getTextColor()
  {
    this.colourTextRGB = this.rgbNumToHex(this.textRed, this.textGreen, this.textBlue)
     return this.colourTextRGB 
  }

}