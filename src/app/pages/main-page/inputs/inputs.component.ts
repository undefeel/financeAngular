import { Component } from '@angular/core';
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
  summary: number = 0;
  
  constructor(private financeHelper: FinanceHelperService, private history: FinanceHistoryComponent) {  }
  ngOnInit(): void {
    this.financeHelper.getAllFinance();
    this.financeHelper.Summary.subscribe(v => {
      this.summary = v;
    })
    
  }

  getShop (event: Event) {
    this.inpShop = (event.target as HTMLInputElement).value;
  }

  getSum (event: Event) {
    this.inpSum = (event.target as HTMLInputElement).value;    
  }

  finance: Ifinance = {
    text: this.inpShop,
    sum: this.inpSum
  }

  addFinance() {
    this.financeHelper.addNewFinance(this.finance).subscribe((v:Ifinance) => {
      this.financeHelper.getAllFinance();
    });
  }
}
