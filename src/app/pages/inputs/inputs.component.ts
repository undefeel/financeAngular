import { Component, OnInit } from '@angular/core';
import { FinanceHelperService } from 'src/app/services/finance-helper.service';
import { Ifinance } from 'src/app/interfaces/finance.interface';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  inpShop: string = '';
  inpSum: string = '';
  
  constructor(private financeHelper: FinanceHelperService) {  }

  getShop (event: any) {
    this.inpShop = event.target.value;
  }

  getSum (event: any) {
    this.inpSum = event.target.value;    
  }

  addFinance() {
    const finance: Ifinance = {
      text: this.inpShop,
      sum: this.inpSum
    }
    this.financeHelper.addNewFinance(finance)
  }

  ngOnInit(): void {    }
  }
