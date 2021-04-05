import * as fromAuth from '../reducer/auth.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';


const {
	selectEntities
} = fromAuth.adapter.getSelectors();

const selectAuthFeature = createFeatureSelector<fromAuth.State>('auth');

export const selectUser = createSelector(
	selectAuthFeature,
	(user) => selectEntities(user)
);
