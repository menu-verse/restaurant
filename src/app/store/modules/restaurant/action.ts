import { createAction, props } from '@ngrx/store';

export const addLunchItems = createAction('[Restaurant] Add Lunch Items', props< { data: any }>());
export const addDiningItems = createAction('[Restaurant] Add Dining Items', props< { data: any }>());
export const addRestaurantData = createAction('[Restaurant] Add Restaurant Data', props< { data: any }>());