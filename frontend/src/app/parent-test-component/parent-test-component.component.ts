import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ChildTestComponentComponent } from '../child-test-component/child-test-component.component';

@Component({
  selector: 'app-parent-test-component',
  templateUrl: './parent-test-component.component.html',
  styleUrls: ['./parent-test-component.component.scss']
})
export class ParentTestComponentComponent implements AfterViewInit {
// [x: string]: any;
// receiveMessage($event: any) {
//   this[message] = $event
// }

@ViewChild(ChildTestComponentComponent) child: { message: any; } | undefined;
  message: any;

ngAfterViewInit(): void {
    // this.message = this.child.message;
}
}
