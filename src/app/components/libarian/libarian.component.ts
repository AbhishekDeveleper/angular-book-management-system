import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserCheckService } from '../../services/user-check.service';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-libarian',
  imports: [
    RouterOutlet,
    NavbarComponent,
    AddBookComponent,
    CurrencyPipe,
    DatePipe,
    TitleCasePipe,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './libarian.component.html',
  styleUrl: './libarian.component.scss',
})
export class LibarianComponent {
  constructor(
    public book_service: BookService,
    private roleChecked: UserCheckService
  ) {
    this.roleChecked.roleBasedRoute();
  }

  calculateBookAge(bookPublishDate: string): string {
    return this.book_service.calculateBookAge(bookPublishDate);
  }

  addBook(bookDetail: {
    bookAuthor: string;
    bookTitle: string;
    bookPrice: number;
    bookPublishDate: string;
    bookIsbn: number;
    bookCategory: string;
  }) {
    this.book_service.addBook(bookDetail);
  }

  closeModel(value: boolean) {
    this.book_service.closeModel(value);
  }

  editBook(id: number) {
    this.book_service.editBook(id);
  }

  deleteBook(id: number) {
    this.book_service.delete(id);
  }

  toggleAddBookBtnVisibility() {
    this.book_service.toggleAddBookBtnVisibility();
  }

  filterBooks() {
    this.book_service.filterBooks();
  }
}
