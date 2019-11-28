import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'minimatch';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  events:any = [];
  ngOnInit() {
    this.http.get("../assets/Events.json").subscribe(data=>{
      data["Events"].forEach(element => {
        if(element.Category === 'workshops')
          {
            this.events.push(element);
          }
      });
    })
  }
}
