import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Person } from 'src/app/task/tables/tables.component';

@Component({
  selector: 'app-showdialog',
  templateUrl: './showdialog.component.html',
  styleUrls: ['./showdialog.component.css']
})
export class ShowdialogComponent {
  day!: number | string;
  constructor(
    public dialogRef: MatDialogRef<ShowdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    let d = [
      [22, 'Working late'],
      [18, 'Good evening'],
      [12, 'Good afternoon'],
      [5,  'Good morning'],
      [0,  'Whoa, early bird']
  ],
  hr = new Date().getHours();
  for (var i = 0; i < d.length; i++) {
      if (hr >= d[i][0]) {
          this.day=d[i][1];
          break;
      }
  }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
