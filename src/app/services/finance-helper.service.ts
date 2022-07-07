import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ifinance } from '../interfaces/finance.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceHelperService {
  public List: BehaviorSubject<Ifinance[]> = new BehaviorSubject<Ifinance[]>([])
  httpOptions = {headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }
  
  constructor(private http: HttpClient) { }

  public getAllFinance() {
    
    return this.http.get<Ifinance>('http://localhost:8001/allFinance');
  }

  public addNewFinance (newFinance: Ifinance) {
    return this.http.post<Ifinance>('http://localhost:8001/createFinance', JSON.stringify(newFinance), {
      headers : {'Content-Type':  'application/json'}
    }).subscribe(v => {
      const newArray = [];
      newArray.push(...this.List.getValue(), v);
      this.List.next(newArray); 
    })
  }
}
