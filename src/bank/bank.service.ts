import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { of } from 'rxjs/observable/of';
import { Bank } from "../models/bank";
import { Observable } from '../../node_modules/rxjs/Observable';


@Injectable()
export class BankService {
  //private bankURL = 'http://localhost:4200/assets/dosya.json'; local api adresi
  private bankURL = 'http://example/api/banks';
  private handleError(operation = 'operation', result?: Bank[]) {
    return (error: any): Observable<Bank[]> => {
   
    console.error(error); // 
    
    return of(result as Bank[]);
    };
    }
    httpOptions = {
        headers: new HttpHeaders({
          'Authorization':'bearer example',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'*',
          'Access-Control-Allow-Headers':'*'
        }),
        withCredentials: false
      };
     
constructor(private http:HttpClient) { }

getContent(): Observable<Bank[]>{
    return this.http.get<Bank[]>(this.bankURL,this.httpOptions);
}
CreateUser(obj: Bank){return this.http.post(this.bankURL,obj,this.httpOptions);
}



}
