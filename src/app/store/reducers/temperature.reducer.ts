import { createReducer, createSelector, on } from '@ngrx/store';
import { change, decrease, increase } from '../actions/temperature.actions';
import { AppTemperatureState } from '../interfaces/temperature-state.interface';
import { AppState } from '../interfaces/app-state.interface';

export const initialState: AppTemperatureState = {
  newYork: -5,
  seattle: 10
};

const _temperatureReducer = createReducer<AppTemperatureState>(initialState,
  on(change, (state: AppTemperatureState) => state),
  on(increase, (state: AppTemperatureState) => ({
    ...state,
    newYork: ++state.newYork
  })),
  on(decrease, (state: AppTemperatureState) => ({
    ...state,
    seattle: --state.newYork
  })),
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
