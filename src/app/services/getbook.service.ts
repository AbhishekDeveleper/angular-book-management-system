import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetbookService {
  constructor(private http: HttpClient) {}

  getbook(): Observable<any> {
    return this.http.get<any>(`https://openlibrary.org/subjects/science.json`);
  }
}
