import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const local_storage = inject(LocalStorageService);
  const logedInUser = local_storage.getItem('userData');

  if (logedInUser != null) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
