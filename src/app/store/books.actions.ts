import { createAction, props } from '@ngrx/store';
import { Book } from '../books/models/book.model';

export const addFavorite = createAction(
  '[Search] Add Favorite',
  props<{ book: Book }>()
);

export const removeFavorite = createAction(
  '[Favorites] Remove Favorite',
  props<{ id: number }>()
);

export const readNow = createAction(
  '[Favorites] Read Now',
  props<{ book: Book }>()
);