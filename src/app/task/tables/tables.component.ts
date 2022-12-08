import { Component } from '@angular/core';
import { ShowdialogComponent } from 'src/app/components/showdialog/showdialog.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface Person {
  position: number;
  name: string;
  role: string;
  address: string;
}

const ELEMENT_DATA: Person[] = [
  {position: 1, name: 'Akash', role: "java developer", address: '8, Mayur Kunj, Liberty Garden, Rd No 4, Malad'},
  {position: 2, name: 'Anshu', role: "cloud engineer", address: ' Plot No 6, Agarwal I.e.unit No 1, Sativali Rd, Vasai(e)'},
  {position: 3, name: 'Bhanu', role: "python developer", address: ' 342, B, Oshiwara Ind Center, New Link Road, Opp Oshiwara Bus Depot, Goregaon(w)'},
  {position: 4, name: 'Nikki',role: "Angular Developer", address: 'B 283, Saraswati Vihar'},
  {position: 5, name: 'Nisha', role: "React Developer", address: ' Wz 58 D, Main Road, Basai Darapur, Delhi'},
  {position: 6, name: 'Divya', role: "java Developer", address: '12/166, Adarsh Industrial Estate, Sahar Road, Chakala, Andheri (west),mumbai'},
  {position: 7, name: 'Ankush', role: "System engineer", address: '7, Sham Complex, Vst Road, Vidyanagarxroads,hyderabad'},
  {position: 8, name: 'Nipun', role: "SRE", address: ' Kushan Apt., S.m. Road, Nr. C.n.vidhyalaya, Ambawadi,ahemdabad'},
  {position: 9, name: 'Rajat', role: "Security engineer", address: ' Neelam Bata Road, delhi'},
  {position: 10, name: 'Ajay', role: "java spring developer", address: ' No.22, No.22, 3rd Mn Rd Cmpt,bangalore'},
];
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  name !:string;
  displayedColumns: string[] = ['position', 'name', 'role', 'address','actions'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}

  openDialog(element: Person): void {
    const dialogRef = this.dialog.open(ShowdialogComponent, {
      height: "400px",
      width: "400px",
      data: {note: this.dataSource[element.position-1]},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
}
