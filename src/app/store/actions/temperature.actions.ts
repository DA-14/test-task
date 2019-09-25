import { createAction } from '@ngrx/store';

export const change = createAction<string>('[Temperature] Change');
export const increase = createAction<string>('[Temperature] Increase');
export const decrease = createAction<string>('[Temperature] Decrease');
export const reset = createAction<string>('[Temperature] Reset');
