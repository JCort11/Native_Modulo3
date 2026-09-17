import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from './books.reducer';

export const selectBooksState = createFeatureSelector<BooksState>('books');
export const selectFavorites = createSelector(selectBooksState, state => state.favorites);
export const selectReadingNow = createSelector(selectBooksState, state => state.readingNow);