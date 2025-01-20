import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LibarianComponent } from './components/libarian/libarian.component';
import { BookstoreComponent } from './components/bookstore/bookstore.component';
import { OtheBookComponent } from './components/othe-book/othe-book.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/signup/signup.component').then(
        (c) => c.SignupComponent
      ),
  },
  {
    path: 'addbook',
    component: LibarianComponent,
    canActivate: [authGuard],
    title: 'libarian',
  },
  {
    path: 'bookstore',
    component: BookstoreComponent,
    canActivate: [authGuard],
  },
  { path: 'otherbook', component: OtheBookComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];
