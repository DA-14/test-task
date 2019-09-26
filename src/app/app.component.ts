import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectNewYorkTemperature } from './store/reducers/temperature.reducer';
import { AppState } from './store/interfaces/app-state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newYorkTemperature$: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.newYorkTemperature$ = this.store.select(selectNewYorkTemperature);
  }
}
