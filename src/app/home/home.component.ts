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
  
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }
  scroll = (a):void=>{
    console.log(a);
  }
}
