import { Component, signal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Clients } from '../data';

function equalPassword(control: AbstractControl) {
  if (
    control.get('password')?.value === control.get('confirmPassword')?.value
  ) {
    return null;
  }

  return { notEqualPassword: true };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: ``,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
  ],
})
export class SignupComponent {
  userStatus: boolean = false;

  signupForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      { validators: [equalPassword] }
    ),
  });

  get emailId() {
    return this.signupForm.get('emailId');
  }

  get userName() {
    return this.signupForm.get('userName');
  }

  get password() {
    return this.signupForm.get('passwords.password');
  }
  get confirmPassword() {
    return this.signupForm.get('passwords.confirmPassword');
  }

  alreadyExists = signal<boolean>(false);
  closeBtn() {
    this.alreadyExists.set(false);
  }
  submitButton() {
    const { emailId, passwords, userName } = this.signupForm.value;
    this.userStatus = Clients.some((user) => user.emailId === emailId);

    if (!this.userStatus) {
      Clients.push({
        userName: userName as string,
        emailId: emailId as string,
        role: 'user',
        password: passwords?.password as string,
      });
    } else {
      this.alreadyExists.set(true);
    }

    this.signupForm.reset();
  }
}
