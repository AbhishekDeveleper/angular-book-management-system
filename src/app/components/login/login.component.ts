import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Clients } from '../data';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from '../notification/notification.component';
import { UserCheckService } from '../../services/user-check.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    NotificationComponent,
  ],
})
export class LoginComponent implements OnInit {
  wrongCredentials = false;
  constructor(private router: Router, private routeUrl: UserCheckService) {}

  ngOnInit(): void {
    this.routeUrl.roleBasedRoute();
  }

  userStatusId: boolean = false;
  userStatusPassword: boolean = false;
  user = signal<{
    emailId: string | null;
    password: string | null;
    role: 'user' | null | 'admin';
    userId?: number | null | undefined;
    userName: string | null;
  }>({
    emailId: null,
    password: null,
    role: null,
    userId: null,
    userName: null,
  });

  userForm = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });

  get emailId() {
    return this.userForm.get('emailId');
  }

  get password() {
    return this.userForm.get('password');
  }

  submitButton(): void {
    const { emailId, password } = this.userForm.value;
    this.userStatusId = Clients.some((user) => user.emailId === emailId);

    this.userStatusPassword = Clients.some(
      (user) => user.password === password
    );
    if (this.userStatusId && this.userStatusPassword) {
      const findUser = Clients.find((curUser) => {
        return curUser.emailId === emailId;
      });
      if (findUser) {
        if (typeof findUser != undefined) {
          this.user.set(findUser);
        }
      }
    }

    console.log(this.user());
    if (this.userStatusId && this.userStatusPassword) {
      if (this.user().role === 'user') {
        console.log(this.user().role);
        this.router.navigateByUrl('bookstore');
      } else if (this.user().role === 'admin') {
        this.router.navigateByUrl('addbook');
      } else {
        console.warn('Unauthorized');
      }
      const { emailId, userName, userId } = this.user();
      localStorage.setItem(
        'userData',
        JSON.stringify({ emailId, userName, userId })
      );
    } else {
      this.wrongCredentials = true;
    }
  }
}
