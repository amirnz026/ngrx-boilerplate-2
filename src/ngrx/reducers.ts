import { createReducer, on } from '@ngrx/store';
import { addItemToCart, userEntered } from './actions';
import { User } from './types';
import { immerOn } from 'ngrx-immer/store';

export const initialState: User = {
  userId: '',
  cart: [''],
};

export const reducers = createReducer(
  initialState,
  immerOn(userEntered, (state) => {
    state.userId = '12345';
  }),
  immerOn(addItemToCart, (state, action) => {
    state.cart.push(action.itemName);
  })
);
