// counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addDiningItems, addLunchItems, addRestaurantData } from './action';

export const initialState = {
    restaurantData: {},
    lunchItems: {},
    diningItems: {}
};

export const restaurantReducer = createReducer(
  initialState,
  on(addDiningItems, (state, { data }) => { return {...state, diningItems: data}}),
  on(addLunchItems,  (state, { data }) => { return {...state, lunchItems: data}}),
  on(addRestaurantData,  (state, { data }) => { return {...state, restaurantData: data}})
);
