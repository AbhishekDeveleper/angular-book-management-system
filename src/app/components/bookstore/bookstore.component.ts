import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { UserCheckService } from '../../services/user-check.service';

@Component({
  selector: 'app-bookstore',
  imports: [
    RouterOutlet,
    NavbarComponent,
    CurrencyPipe,
    DatePipe,
    TitleCasePipe,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './bookstore.component.html',
  styleUrl: './bookstore.component.scss',
})
export class BookstoreComponent {
  dataLoading = signal<boolean>(true);

  constructor(
    public bookservice: BookService,
    private roleChecked: UserCheckService
  ) {
    this.roleChecked.roleBasedRoute();
  }

  calcuateBookAge(bookPublishDate: string): string {
    return this.bookservice.calculateBookAge(bookPublishDate);
  }

  filterBooks() {
    this.bookservice.filterBooks();
  }
}
