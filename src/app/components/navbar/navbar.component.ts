import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  show = signal(false)

  constructor(private router:Router){}
showDialog(){
   this.show.set(!this.show())
}

signOutButton(){
  localStorage.clear();
  this.router.navigateByUrl('login')
}
}
