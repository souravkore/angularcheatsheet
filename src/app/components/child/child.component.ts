import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childData: string = 'From Child'; // Input property to receive data from parent

  @Output() notify: EventEmitter<string> = new EventEmitter<string>(); // Output property to send data to parent

  sendNotification() {
    this.notify.emit('Notification from Child!');
  }
}
