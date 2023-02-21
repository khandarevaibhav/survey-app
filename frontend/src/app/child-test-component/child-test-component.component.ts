import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-test-component',
  templateUrl: './child-test-component.component.html',
  styleUrls: ['./child-test-component.component.scss']
})
export class ChildTestComponentComponent {
  message : string = "Hola mahima"
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
