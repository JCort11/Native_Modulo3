import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { readNow, removeFavorite } from '../../../store/books.actions';
import { selectFavorites } from '../../../store/books.selectors';

@Component({
  standalone: false,
  selector: 'BookFavorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent {
  favorites$: Observable<Book[]> = this.store.select(selectFavorites);

  constructor(private store: Store) {}

  read(book: Book): void {
    this.store.dispatch(readNow({ book }));
  }

  remove(book: Book): void {
    this.store.dispatch(removeFavorite({ id: book.id }));
  }
}