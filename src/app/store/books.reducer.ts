import { createReducer, on } from '@ngrx/store';
import { Book } from '../books/models/book.model';
import { addFavorite, removeFavorite, readNow } from './books.actions';

export interface BooksState {
  favorites: Book[];
  readingNow: Book[];
}

export const initialState: BooksState = {
  favorites: [],
  readingNow: [],
};

export const booksReducer = createReducer(
  initialState,
  on(addFavorite, (state, { book }) => ({
    ...state,
    favorites: state.favorites.some(b => b.id === book.id)
      ? state.favorites
      : [...state.favorites, { ...book, favorite: true }],
  })),
  on(removeFavorite, (state, { id }) => ({
    ...state,
    favorites: state.favorites.filter(b => b.id !== id),
  })),
  on(readNow, (state, { book }) => ({
    ...state,
    readingNow: state.readingNow.some(b => b.id === book.id)
      ? state.readingNow
      : [...state.readingNow, book],
  }))
);