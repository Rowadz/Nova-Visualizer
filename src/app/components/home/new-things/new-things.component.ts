import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-things',
  templateUrl: './new-things.component.html',
  styleUrls: ['./new-things.component.scss']
})
export class NewThingsComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewThingsComponent>) {}

  ngOnInit() {}

  onMasheClick(): void {
    this.dialogRef.close();
  }
}
