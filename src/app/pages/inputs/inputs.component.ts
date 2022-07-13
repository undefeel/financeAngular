import { Component, OnInit, Output } from '@angular/core';
import { FinanceHelperService } from 'src/app/services/finance-helper.service';
import { Ifinance } from 'src/app/interfaces/finance.interface';
import { FinanceHistoryComponent } from '../finance-history/finance-history.component';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  providers: [FinanceHistoryComponent]
})
export class InputsComponent {
  inpShop: string = '';
  inpSum: string = '';
  
  constructor(private financeHelper: FinanceHelperService, private history: FinanceHistoryComponent) {  }
  ngOnInit(): void {
    this.financeHelper.getAllFinance();
  }

  getShop (event: Event) {
    this.inpShop = (event.target as HTMLInputElement).value;
  }

  getSum (event: Event) {
    this.inpSum = (event.target as HTMLInputElement).value;    
  }

  addFinance() {
    const finance: Ifinance = {
      text: this.inpShop,
      sum: this.inpSum
    }
    this.financeHelper.addNewFinance(finance).subscribe((v:Ifinance) => {
      this.financeHelper.getAllFinance();
    });
  }
}
