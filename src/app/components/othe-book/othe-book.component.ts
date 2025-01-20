import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetbookService } from '../../services/getbook.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-othe-book',
  imports: [
    RouterOutlet,
    NavbarComponent,
    CurrencyPipe,
    TitleCasePipe,
    FormsModule,
  ],
  templateUrl: './othe-book.component.html',
  styleUrl: './othe-book.component.scss',
})
export class OtheBookComponent implements OnInit {
  dataLoading: boolean = true;
  bookData = signal<any>('');
  searchbyBookGener = 'all';
  constructor(public apiRequest: GetbookService) {}
  ngOnInit(): void {
    this.apiRequest.getbook().subscribe({
      next: (value) => {
        console.log(value);
        console.log(this.searchbyBookGener);
        if (value.works) {
          this.bookData.set(value.works);
          this.dataLoading = false;
        }
      },
      complete: () => {
        this.dataLoading = false;
      },
    });
  }
}
