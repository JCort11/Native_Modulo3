import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { booksReducer } from './store/books.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    FormsModule,
    StoreModule.forRoot({ books: booksReducer }),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}