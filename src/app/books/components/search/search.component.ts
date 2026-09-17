import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksApiService } from '../../services/books-api.service';
import { Book } from '../../models/book.model';
import { addFavorite } from '../../../store/books.actions';

@Component({
  standalone: false,
  selector: 'BookSearch',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  query = '';
  books: Book[] = [];
  loading = false;

  constructor(
    private api: BooksApiService,
    private store: Store
  ) {}

  search(): void {
    this.loading = true;
    this.api.searchBooks(this.query).subscribe({
      next: books => {
        this.books = books;
        this.loading = false;
      },
      error: () => {
        this.books = [];
        this.loading = false;
      }
    });
  }

  favorite(book: Book): void {
    this.store.dispatch(addFavorite({ book }));
  }
}