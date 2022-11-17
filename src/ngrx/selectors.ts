import { createSelector } from '@ngrx/store';
import { AppState } from './types';

export const selectFeature = (state: AppState) => state.users;

export const userIdSelector = () =>
  createSelector(selectFeature, (state) => {
    return state.userId;
  });

export const cartItemsSelector = () =>
  createSelector(selectFeature, (state) => {
    return state.cart;
  });
