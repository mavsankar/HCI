import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  events:any = [];
  ngOnInit() {
    this.http.get("../assets/Events.json").subscribe(data=>{
      data["Events"].forEach(element => {
        if(element.Category === 'events')
          {
            this.events.push(element);
          }
        
      });
    })
  }

}
