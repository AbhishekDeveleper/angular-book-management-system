import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  AbstractControl,
} from '@angular/forms';
import { OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
function containOnlyNumber(control: AbstractControl) {
  const onlyNumber = /^\d+$/;
  if (onlyNumber.test(control.value)) {
    return null;
  } else return { icludeCharacterAlso: true };
}

@Component({
  selector: 'app-add-book',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
})
export class AddBookComponent implements OnInit {
  @Output() bookDetail = new EventEmitter();
  closeModelValue = signal(false);
  @Output() closeBtnOutput = new EventEmitter();
  editData = null;
  @Input() editModeValue: boolean = false;
  priceMessage = '';
  priceDiscount = 10;
  bookIsbnMessage = '';
  loginUserDetail: { emailId: string; userName: string; id: number } | null;

  constructor(private local_Storage: LocalStorageService) {
    this.loginUserDetail = local_Storage.getItem('userData');
    this.editData = local_Storage.getItem('editBookId');
    if (this.editData) {
      const {
        bookAuthor,
        bookGenere: bookCategory,
        bookTitle,
        bookIsbn,
        publishedDate: bookPublishDate,
        price: bookPrice,
      } = this.editData;

      this.bookForm.setValue({
        bookAuthor,
        bookTitle,
        bookPrice,
        bookPublishDate,
        bookIsbn,
        bookCategory,
      });
    }
  }

  ngOnInit() {
    this.bookForm.patchValue({ bookAuthor: this.loginUserDetail?.userName });
    this.bookForm.valueChanges.subscribe({
      next: (value: any) => {
        const { bookPrice, bookTitle, bookAuthor, bookIsbn } = value;
        const regex = /^[0-9]+$/;
        if (!regex.test(bookIsbn))
          this.bookIsbnMessage = 'Book Isbn must be a number';

        if (!regex.test(bookPrice)) {
          this.priceMessage = 'Price must be anumber';
        }
        if (regex.test(bookPrice as string)) {
          if (Number(bookPrice) >= 1000) {
            this.priceDiscount = 1.5;
          } else this.priceDiscount = 0.5;
          console.log(this.priceDiscount);
        }
      },
    });
  }

  bookForm = new FormGroup({
    bookAuthor: new FormControl('', [Validators.required]),
    bookTitle: new FormControl('', [Validators.required]),
    bookPrice: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]),
    bookPublishDate: new FormControl('', [Validators.required]),
    bookIsbn: new FormControl('', [
      Validators.required,
      containOnlyNumber,
      Validators.pattern('^[0-9]+$'),
    ]),
    bookCategory: new FormControl<
      'Science' | 'History' | 'Politics' | 'Fiction' | 'Geography'
    >('Science', [Validators.required]),
  });

  addBookBtn() {
    console.log(this.bookForm.value);
    this.bookDetail.emit(this.bookForm.value);
    this.bookForm.reset();
  }

  get bookIsbn(): AbstractControl {
    return this.bookForm.get('bookIsbn') as AbstractControl;
  }

  get bookAuthor(): AbstractControl {
    return this.bookForm.get('bookAuthor') as AbstractControl;
  }

  get bookTitle(): AbstractControl {
    return this.bookForm.get('bookTitle') as AbstractControl;
  }

  get bookPrice(): AbstractControl {
    return this.bookForm.get('bookPrice') as AbstractControl;
  }
  get bookCategory(): AbstractControl {
    return this.bookForm.get('bookCategory') as AbstractControl;
  }

  get bookPublishDate(): AbstractControl {
    return this.bookForm.get('bookPublishDate') as AbstractControl;
  }

  closeModel() {
    this.closeBtnOutput.emit(true);
  }
}
