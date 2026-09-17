import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { APP_CONFIG } from '../../core/app-config';

@Injectable({ providedIn: 'root' })
export class BooksApiService {
  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<Book[]> {
    const params = new HttpParams().set('q', query);
    return this.http.get<Book[]>(APP_CONFIG.apiUrl, { params });
  }
}