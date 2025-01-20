interface Book {
  userId?: number;
  id: number;
  bookAuthor: string;
  bookTitle: string;
  publishedDate: string;
  bookGenere: string;
  price:number;
  bookIsbn:number

}
type booksType = Book[];

interface Client {
  userId?:number,
  userName: string;
  role: 'admin' | 'user';
  emailId: string;
  password: string;
}

export const books: booksType = [
  {
    
    id: 1,
    bookAuthor: 'James',
    bookTitle: 'Harry Potter',
    publishedDate: '2000-05-09',
    bookGenere: 'Fiction',
    price:1000,
    bookIsbn: 1,
    
  },
  {
  
    id: 2,
    bookAuthor: 'James',
    bookTitle: 'Harry Potter',
    publishedDate: '2000-05-09',
    bookGenere: 'History',
    userId:1,
    price:500,
    bookIsbn: 2,
  },
  {
    
    id: 3,
    bookAuthor: 'James',
    bookTitle: 'Harry Potter',
    publishedDate: '2000-05-09',
    bookGenere: 'Science',
    userId:1,
    price:300,
    bookIsbn: 3,
  },
  {
    
    id: 4,
    bookAuthor: 'James',
    bookTitle: 'Harry Potter',
    publishedDate: '2024-6-10',
    bookGenere: 'History',
    price:1000,
    bookIsbn: 4,
  },
  {
    
    id: 5,
    bookAuthor: 'James',
    bookTitle: 'Lord of Rings',
    publishedDate: '2025-05-10',
    bookGenere: 'Electronic',
    price:2000,
    bookIsbn: 5,
  },
  {
    
    id: 6,
    bookAuthor: 'James',
    bookTitle: 'The Politician',
    publishedDate: '2025-01-10',
    bookGenere: 'Politics',
    userId:7,
    price:900,
    bookIsbn: 6,
  },
  {
   
    id: 7,
    bookAuthor: 'James',
    bookTitle: 'Harry Potter',
    publishedDate:'2025-01-14',
    bookGenere: 'Fiction',
    price:399,
    bookIsbn: 7,
  },
  {
    
    id: 8,
    bookAuthor: 'James',
    bookTitle: 'Harry Potter',
    publishedDate: '2000-05-09',
    bookGenere: 'Politics',
    userId:2,
    price:999,
    bookIsbn: 8,
  },
  {
   
    id: 9,
    bookAuthor: 'James',
    bookTitle: 'Harry Potter',
    publishedDate: '2000-05-09',
    bookGenere: 'Electronic',
    price:1000,
    bookIsbn: 9,
  },
  {
    
    id: 10,
    bookAuthor: 'James',
    bookTitle: 'Harry Potter',
    publishedDate: '2000-05-09',
    bookGenere: 'Geography',
    price:1000,
    bookIsbn: 10,
  },  {
    
    id: 11,
    bookAuthor: 'James',
    bookTitle: 'Harry Potter',
    publishedDate: '2000-05-09',
    bookGenere: 'Fiction',
    price:1000,
    bookIsbn: 11,
  },
];

export const Clients: Client[] = [
  {
    userName: 'Abhishek Singh',
    emailId:'abhishek@gmail.com',
    role: 'admin',
    password: 'password',
    userId:1
  },
  {
    userName: 'Abhi',
    emailId: 'abhi@gmail.com',
    role: 'user',
    password: 'password',
    userId:2
  },
  {
    userName: 'Utkarsh',
    emailId: 'utkarsh@gmail.com',
    role: 'admin',
    password: 'password',
    userId:6
  },
  {
    userName: 'Sharma',
    emailId: 'sharma@gmail.com',
    role: 'user',
    password: 'password',
    userId:7
    
  },
];

 
