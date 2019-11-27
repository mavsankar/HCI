import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Hci';
  searchKey:string;
  constructor(public router:Router){}
  scroll(el: HTMLElement) {
    console.log(el);
    el.scrollIntoView();
  }
}
