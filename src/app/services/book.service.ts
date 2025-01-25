import { Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { books } from '../components/data';
import {
  booksDataType,
  editBookType,
  filterBooksType,
  matchedBookType,
} from '../components/model/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  dataLoading = signal<boolean>(true);
  editBookData = signal<editBookType | undefined>({
    bookAuthor: null,
    bookGenere: null,
    bookIsbn: null,
    bookTitle: null,
    id: null,
    price: null,
    publishedDate: null,
  });
  searchQuery = signal<string>('');
  searchByGener = signal<
    'Science' | 'History' | 'All' | 'Geography' | 'Politics' | 'Fiction'
  >('All');
  matchedBook = signal<matchedBookType>([
    {
      bookAuthor: null,
      bookGenere: null,
      bookIsbn: null,
      bookTitle: null,
      id: 1,
      price: null,
      publishedDate: '',
    },
  ]);
  filterData: filterBooksType = [
    {
      bookAuthor: '',
      bookGenere: '',
      bookIsbn: 1,
      bookTitle: '',
      id: 1,
      price: 1,
      publishedDate: '',
    },
  ];
  currentUser = signal<{
    emailId: string | null;
    userId: number | null;
    userName: string | null;
  }>({ emailId: null, userId: null, userName: null });
  editMode = false;
  addBookBtnVisibility = signal<boolean>(true);
  bookData = signal<booksDataType>([]);

  constructor(private localStorage: LocalStorageService) {
    this.bookData.set(books);
    this.currentUser.set(
      localStorage.getItem('userData') as {
        emailId: string | null;
        userId: number | null;
        userName: string | null;
      }
    );
  }

  editBook(id: number) {
    this.editBookData.set(
      this.bookData().find((book, index) => book.id === id)
    );
    this.filterData = this.bookData().filter((book, index) => book.id != id);

    this.addBookBtnVisibility.set(false);
    this.localStorage.setItem(
      'editBookId',
      JSON.stringify(this.editBookData())
    );
    this.editMode = true;
  }

  delete(id: number) {
    this.bookData.set(this.bookData().filter((book, index) => book.id != id));
    this.matchedBook.set(
      this.bookData().filter((book, index) => book.id != id)
    );

    this.searchByGener.set('All');
    this.searchQuery.set('');
  }

  addBook(bookDetail: {
    bookAuthor: string;
    bookTitle: string;
    bookPrice: number;
    bookPublishDate: string;
    bookIsbn: number;
    bookCategory: string;
  }) {
    if (this.editMode) {
      const {
        bookAuthor,
        bookTitle,
        bookIsbn,
        bookPrice: price,
        bookPublishDate: publishedDate,
        bookCategory,
      } = bookDetail;
      const { emailId } = JSON.parse(
        localStorage.getItem('userData') as string
      );
      let id: number = (new Date().getDay() + new Date().getSeconds()) * 10;

      this.bookData.set([
        {
          emailId,
          id,
          bookAuthor,
          bookTitle,
          publishedDate,
          bookGenere: bookCategory,
          price,
          bookIsbn,
        },
        ...this.filterData,
      ]);
      this.editMode = false;
      this.addBookBtnVisibility.set(!this.addBookBtnVisibility());
    } else {
      const {
        bookAuthor,
        bookTitle,
        bookIsbn,
        bookPrice: price,
        bookPublishDate: publishedDate,
        bookCategory,
      } = bookDetail;

      const { emailId } = JSON.parse(
        localStorage.getItem('userData') as string
      );
      let id: number = (new Date().getDay() + new Date().getSeconds()) * 10;
      this.bookData.set([
        {
          emailId,
          id,
          bookAuthor,
          bookTitle,
          publishedDate,
          bookGenere: bookCategory,
          price,
          bookIsbn,
        },
        ...this.bookData(),
      ]);

      this.addBookBtnVisibility.set(!this.addBookBtnVisibility());
    }
    this.searchByGener.set('All');
    this.searchQuery.set('');
  }

  toggleAddBookBtnVisibility() {
    this.addBookBtnVisibility.set(!this.addBookBtnVisibility());
    this.localStorage.removeItem('editBookId');
  }

  closeModel(value: boolean) {
    this.addBookBtnVisibility.set(value);
    this.editMode = !value;
  }

  calculateBookAge(bookPublishDate: string): string {
    const arr = bookPublishDate.split('-');
    const [year, month, day] = arr;
    const todayDate = new Date();
    let years = Number(year) - todayDate.getFullYear();
    let months = Number(month) - (todayDate.getMonth() + 1);
    let days = Number(day) - todayDate.getDate();
    let ageDifference = years * 365 + months * 30 + days;
    let bookage;
    if (ageDifference > 0) {
      bookage = `Publishing after ${ageDifference} days`;
    } else if (ageDifference == 0) {
      bookage = `Published Today`;
    } else {
      ageDifference = ageDifference * -1;
      bookage = `Published before ${ageDifference} days`;
    }
    return bookage;
  }

  filterBooks() {
    const query = this.searchQuery();
    if (this.searchByGener() != 'All' && query) {
      this.matchedBook.set(
        this.bookData()
          .filter((book, index) =>
            book.bookTitle.toLowerCase().includes(query.toLowerCase())
          )
          .filter((book, index) =>
            book.bookGenere
              .toLowerCase()
              .includes(this.searchByGener().toLowerCase())
          )
      );
    } else if (this.searchByGener() != 'All') {
      this.matchedBook.set(
        this.bookData().filter((book, index) =>
          book.bookGenere
            .toLowerCase()
            .includes(this.searchByGener().toLowerCase())
        )
      );
    } else if (query) {
      this.matchedBook.set(
        this.bookData().filter((book, index) =>
          book.bookTitle.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }
}
