import { Component } from '@angular/core';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrl: './state-management.component.css'
})
export class StateManagementComponent {
code = `
TypeScript
// Store
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectCounterState = createFeatureSelector<AppState>('counter');
export const selectCount = createSelector(selectCounterState, (state) => state.count);

// Reducer
import { CounterState } from './counter.state';
import { CounterActions } from './counter.actions';

export function counterReducer(state: CounterState = { count: 0 }, action: CounterActions) {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return { ...state, count: state.count + 1 };
    case CounterActions.DECREMENT:
      return { ...state, count: state.count - 1   
 };
    default:
      return   
 state;
  }
}`;
}
