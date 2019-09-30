import { createReducer, createSelector, on } from '@ngrx/store';
import produce, { Draft } from 'immer';

import { decrease, increase, reset } from '../actions/temperature.actions';
import { AppTemperatureState } from '../interfaces/temperature-state.interface';
import { AppState } from '../interfaces/app-state.interface';

export const initialState: AppTemperatureState = {
  newYork: -5,
  seattle: 10
};

const _temperatureReducer = createReducer<AppTemperatureState>(initialState,
  on(increase, (state: AppTemperatureState) =>
    produce(state, (draft: Draft<AppTemperatureState>) => {
      draft.newYork++;
    })
  ),
  on(decrease, (state: AppTemperatureState) =>
    produce(state, (draft: Draft<AppTemperatureState>) => {
      draft.seattle--;
    })
  ),
  on(reset, (state: AppTemperatureState) =>
    produce(state, () => initialState)
  ),
);

export function temperatureReducer(state, action) {
  return _temperatureReducer(state, action);
}

export const selectTemperature = (state: AppState): AppTemperatureState => state.temperatureState;

export const selectNewYorkTemperature = createSelector(
  selectTemperature,
  (temperatureState?: AppTemperatureState) => temperatureState && temperatureState.newYork
);
export const selectSeattleTemperature = createSelector(
  selectTemperature,
  (temperatureState?: AppTemperatureState) => temperatureState && temperatureState.seattle
);
