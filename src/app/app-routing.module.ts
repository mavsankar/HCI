import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './Events/events.component';
import { WorkshopsComponent } from './Workshops/worshops.component';
import { AboutusComponent } from './Aboutus/aboutus.component';
import { SponsorsComponent } from './Sponsors/sponsors.component';


const routes: Routes = [
  {path:'',component:HomeComponent  },
  {path:'events',component:EventsComponent},
  {path:'workshops',component:WorkshopsComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'sponsors',component:SponsorsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
