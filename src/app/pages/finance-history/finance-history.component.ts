import { Component, OnInit } from '@angular/core';
import { FinanceHelperService } from 'src/app/services/finance-helper.service';
import { Ifinance } from 'src/app/interfaces/finance.interface';

@Component({
  selector: 'app-finance-history',
  templateUrl: './finance-history.component.html',
  styleUrls: ['./finance-history.component.scss']
})
export class FinanceHistoryComponent implements OnInit {
  finances: Ifinance[] = []
  constructor(private financeHelper: FinanceHelperService) { }

  ngOnInit(): void {
    this.financeHelper.getAllFinance();
    this.financeHelper.getAllFinance().subscribe((v: Ifinance) => {
    this.finances = this.finances.concat(v)      
    })
    this.financeHelper.List.subscribe((v) => {
      this.finances = this.finances.concat(v);
      console.log(this.finances);
    })
  }

}
