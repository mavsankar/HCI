import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ViewEncapsulation} from '@angular/core';


export interface State {
  image: string;
  name: string;
  description: string;
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

export class SearchComponent {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  searchKey:string;
  states: State[] = [
    {
      name: 'Battle of Bands',
      description: 'Timings: 2-3:30pm',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'Dance Wars',
      description:'Timings: TBD',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Who eats more food?',
      description: 'Timings: Whole day event',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Suspense Event',
      description: 'Timings: Neekenduku',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
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
