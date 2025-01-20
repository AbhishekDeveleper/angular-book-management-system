import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
@Input() Message='';
isVisible=signal<boolean>(false);
hideMessage(){
  this.isVisible.set(true);
  
}
}
