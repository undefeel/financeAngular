import { Component, Inject } from '@angular/core';
import { Ifinance } from 'src/app/interfaces/finance.interface';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FinanceHelperService } from 'src/app/services/finance-helper.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})

export class EditDialogComponent {

  constructor(private dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Ifinance,
  private financeHelper: FinanceHelperService) {}

  takeEditShop(event: Event): void {
    this.data.text = (event.target as HTMLInputElement).value    
  }

  takeEditSum(event: Event): void {
    this.data.sum = (event.target as HTMLInputElement).value
  }

  save(): void {
    this.financeHelper.updateFinance(this.data).subscribe();
    this.financeHelper.getAllFinance()
    this.dialogRef.close()
  }

  cancel() {
    this.dialogRef.close()
  }
}
