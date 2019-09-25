import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, Observable, Subscription } from 'rxjs';

import { AppState } from '../store/interfaces/app-state.interface';
import { selectNewYorkTemperature, selectSeattleTemperature } from '../store/reducers/temperature.reducer';
import { change, decrease, increase } from '../store/actions/temperature.actions';

@Component({
  selector: 'app-temperature-component',
  templateUrl: './temperature-component.component.html',
  styleUrls: ['./temperature-component.component.scss']
})
export class TemperatureComponentComponent implements OnInit, OnDestroy {
  newYorkTemperature$: Observable<number>;
  seattleTemperature$: Observable<number>;
  timerSub: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.newYorkTemperature$ = this.store.select(selectNewYorkTemperature);
    this.seattleTemperature$ = this.store.select(selectSeattleTemperature);
  }

  ngOnDestroy() {
    this.clearTimerSubscription();
  }

  start() {
    this.startTimer();
    this.store.dispatch(increase());
    this.store.dispatch(decrease());
    this.store.dispatch(decrease());
  }

  private startTimer() {
    this.clearTimerSubscription();
    const source$ = interval(1000);
    this.timerSub = source$.subscribe(() => {
      this.store.dispatch(change());
    });
  }

  private clearTimerSubscription() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }

}
