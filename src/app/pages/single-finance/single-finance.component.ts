import { Component, OnInit,DoCheck, OnChanges  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ifinance } from 'src/app/interfaces/finance.interface';
import { FinanceHelperService } from 'src/app/services/finance-helper.service';


@Component({
  selector: 'app-single-finance',
  templateUrl: './single-finance.component.html',
  styleUrls: ['./single-finance.component.scss']
})

export class SingleFinanceComponent implements OnInit {
  constructor (private route: ActivatedRoute, private FinanceHelper: FinanceHelperService) {}

  singleFinance: any;
  id: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {      
      this.id = params['id'];
    });
    
    this.FinanceHelper.findFinance(this.id).subscribe((v:Ifinance) => {
      this.singleFinance = v;
    })
  }
 }
