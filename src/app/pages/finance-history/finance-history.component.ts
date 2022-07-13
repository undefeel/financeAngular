import { Component, OnInit } from '@angular/core';
import { FinanceHelperService } from 'src/app/services/finance-helper.service';
import { Ifinance } from 'src/app/interfaces/finance.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-finance-history',
  templateUrl: './finance-history.component.html',
  styleUrls: ['./finance-history.component.scss'],
})

export class FinanceHistoryComponent implements OnInit {
  public finances: Ifinance[] = [];

  constructor(private financeHelper: FinanceHelperService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.financeHelper.getAllFinance().subscribe((v: Ifinance[]) => {
      this.finances = v;
    })
  }

  public edit: boolean = false;

  openDialog(element: Ifinance) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'dialog';

    dialogConfig.data  = {
      _id: element._id,
      text: element.text,
      sum: element.sum,
      date: element.date,
      __v: element.__v
    }
    
    const dialogR = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogR.afterClosed().subscribe(
      data => {        
        this.financeHelper.updateFinance(data);
        this.financeHelper.getAllFinance().subscribe((v: Ifinance[]) => {
          this.finances = v;
        })
      }
    );     
  }

  delete(index: number) {
    this.financeHelper.deleteFinance(this.finances[index]);
    this.financeHelper.getAllFinance().subscribe((v: Ifinance[]) => {
      this.finances = v;
    })
  }
}
