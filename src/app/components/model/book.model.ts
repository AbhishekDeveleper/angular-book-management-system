export interface Book {
  emailId?: string | undefined;
  bookAuthor: string | null;
  bookGenere: string | null;
  bookIsbn: number | null;
  bookTitle: string | null;
  id: number;
  price: number | null;
  publishedDate: string;
  userId?: number | undefined;
}

export interface Bookdata {
  emailId?: string;
  id: number;
  bookAuthor: string;
  bookTitle: string;
  publishedDate: string;
  bookGenere: string;
  price: number;
  userId?: number;
  bookIsbn: number;
}

interface EditBook {
  emailId?: string | undefined;
  bookAuthor: string | null;
  bookGenere: string | null;
  bookIsbn: number | null;
  bookTitle: string | null;
  id?: number | null;
  price: number | null;
  publishedDate: string | null;
  userId?: number | undefined;
}
interface FilterBook {
  emailId?: string | undefined;
  bookAuthor: string;
  bookGenere: string;
  bookIsbn: number;
  bookTitle: string;
  id: number;
  price: number;
  publishedDate: string;
  userId?: number;
}

export type matchedBookType = Book[];
export type filterBookType = Book[];
export type booksDataType = Bookdata[];
export type editBookType = EditBook;
export type filterBooksType = FilterBook[];
