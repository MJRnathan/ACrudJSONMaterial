import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loginStatus: string = 'Logi';
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }
}
