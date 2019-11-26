import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,MatAutocompleteModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './Events/events.component';
import { WorkshopsComponent } from './Workshops/worshops.component';
import { SponsorsComponent } from './Sponsors/sponsors.component';
import { AboutusComponent } from './Aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    EventsComponent,
    WorkshopsComponent,
    SponsorsComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
