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
  public List: BehaviorSubject<Ifinance[]> = new BehaviorSubject<Ifinance[]>([]);
  
  httpOptions = {headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }
  
  constructor(private http: HttpClient, ) { }

  public getAllFinance() {
    return this.http.get<Ifinance[]>('http://localhost:8001/allFinance').subscribe((v:Ifinance[]) => {
      this.List.next(v);
    })
  }

  public addNewFinance (newFinance: Ifinance) {
    return this.http.post<Ifinance>('http://localhost:8001/createFinance', JSON.stringify(newFinance), this.httpOptions);
  }

  public updateFinance (updateFinance: Ifinance) {
    return this.http.patch<Ifinance>('http://localhost:8001/updateFinance', JSON.stringify(updateFinance), {
      headers : {'Content-Type':  'application/json'}
    })
  }

  public deleteFinance (deleteFinance: Ifinance) {    
    return this.http.delete<Ifinance>(`http://localhost:8001/deleteFinance/${deleteFinance._id}`).subscribe(v => {})
  }

  public findFinance (id: string) {
    return this.http.get<Ifinance>(`http://localhost:8001/findFinance/${id}`);
  }
}
