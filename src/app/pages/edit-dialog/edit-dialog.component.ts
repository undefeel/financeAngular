import { Component, Inject, inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {text: string, sum: string}) {}
  canceledData = this.data

  ngOnInit(): void {
  }

  takeEditShop(event: any): void {
    this.data.text = event.target.value
  }

  takeEditSum(event: any): void {
    this.data.sum = event.target.value
  }


  
  save(event: any): void {
    this.dialogRef.close(this.data)
  }

  cancel() {
    this.dialogRef.close(this.canceledData)
  }



}
