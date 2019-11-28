import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'minimatch';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {

  constructor(private http:HttpClient,private loadingbar:LoadingBarService) { }
  events:any = [];
  ngOnInit() {
    this.http.get("../assets/Events.json").subscribe(data=>{
      this.loadingbar.start(0);
      setTimeout(()=>{
        data["Events"].forEach(element => {
          if(element.Category === 'workshops')
            {
              this.events.push(element);
            }
        });
      },2000);
      setTimeout(()=>{
        this.loadingbar.complete();
      },3000);
    })
  }
}
