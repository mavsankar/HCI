import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface State {
  image: string;
  name: string;
  description: string;
  Category:string;
}

/**
 * @title Autocomplete overview
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class SearchComponent implements OnInit{
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  searchKey:string;
  states: State[];
  ngOnInit(){
    this.filteredStates = this.stateCtrl.valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.states.slice())
    );
    this.http.get("../assets/Events.json").subscribe(data=>{
        this.states = data['Events'];
    });
  }
  
  constructor( private http:HttpClient) {
  
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    let a = [];
    this.states.forEach(element => {
      const temp = JSON.stringify(element);
      if(temp.toLowerCase().indexOf(filterValue)!=-1)
      {
        a.push(element);
      }
    });
    return a;
  }
}
