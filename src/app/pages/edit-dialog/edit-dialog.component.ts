import { Component, Inject, inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {

  constructor(private dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {text: string, sum: string}) {}
  canceledData = this.data

  takeEditShop(event: Event): void {
    this.data.text = (event.target as HTMLInputElement).value
  }

  takeEditSum(event: Event): void {
    this.data.sum = (event.target as HTMLInputElement).value
  }

  save(): void {
    this.dialogRef.close(this.data)
  }

  cancel() {
    this.dialogRef.close(this.canceledData)
  }
}
