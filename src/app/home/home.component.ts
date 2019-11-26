import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  date:string = "30-31 FEB";
  dateChars = this.date.split("");
  daysString = "3 Days";
  days = this.daysString.split("");
  eventString = "30+ Events";
  events = this.eventString.split("");
  prizeString = "300K+ Worth Prizes";
  prizeMoney = this.prizeString.split("");
  aboutus = "About Us";
  aboutUs = this.aboutus.split("");
  ngOnInit() {  }
  scroll = (a):void=>{
    console.log(a);
  }
}
