import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private http:HttpClient, private loadingbar:LoadingBarService) { }
  events:any = [];
  ngOnInit() {
    this.http.get("../assets/Events.json").subscribe(data=>{
      this.loadingbar.start(0);
      setTimeout(()=>{ 
      data["Events"].forEach(element => {
        if(element.Category === 'events')
          {
            this.events.push(element);
          }
      });
      },2000)
      setTimeout(()=>{
        this.loadingbar.complete();

      },3000);

    
    })
  }

}
