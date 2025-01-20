import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Clients } from '../components/data';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserCheckService {
  router = inject(Router);
  emailId: string | null = null;
  constructor(private local_storage: LocalStorageService) {}

  roleBasedRoute() {
    const userData = this.local_storage.getItem('userData') as {
      emailId: string | null;
      userId: number | null;
      userName: string | null;
    };
    if (typeof userData === null) {
      console.warn(userData);
    } else {
      this.emailId = userData?.emailId;
    }

    if (this.emailId) {
      if (
        Clients.find((user, index) => user.emailId === this.emailId)?.role ==
        'admin'
      ) {
        this.router.navigateByUrl('addbook');
      } else {
        this.router.navigateByUrl('bookstore');
      }
    } else {
      this.router.navigateByUrl('login');
    }
  }
}
