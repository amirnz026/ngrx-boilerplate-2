import { createAction, props } from '@ngrx/store';

export const userEntered = createAction('[User on Main Page] Entered');

export const addItemToCart = createAction(
  '[Cart] Item Added',
  props<{ itemName: string }>()
);
