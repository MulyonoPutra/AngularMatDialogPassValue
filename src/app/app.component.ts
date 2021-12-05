import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  name = 'World';

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: { callback: this.callBack.bind(this), defaultValue: this.name }
    });
  }

  callBack(name: string) {
    this.name = name;
  }
}
