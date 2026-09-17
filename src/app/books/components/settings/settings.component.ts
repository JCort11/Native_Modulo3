import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserSettingsService } from '../../services/user-settings.service';
import { Book } from '../../models/book.model';
import { selectReadingNow } from '../../../store/books.selectors';

@Component({
  standalone: false,
  selector: 'BookSettings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  username = '';
  readingNow$: Observable<Book[]> = this.store.select(selectReadingNow);

  constructor(
    private settings: UserSettingsService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.username = this.settings.getUsername();
  }

  save(): void {
    this.settings.saveUsername(this.username);
    this.username = this.settings.getUsername();
  }
}