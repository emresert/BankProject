import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { of } from 'rxjs/observable/of';
import { Bank } from "../models/bank";
import { Observable } from '../../node_modules/rxjs/Observable';


@Injectable()
export class BankService {
  //private bankURL = 'http://localhost:4200/assets/dosya.json'; local api adresi
  private bankURL = 'http://192.168.38.46:8081/api/banks';
  private handleError(operation = 'operation', result?: Bank[]) {
    return (error: any): Observable<Bank[]> => {
   
    console.error(error); // 
    
    return of(result as Bank[]);
    };
    }
    httpOptions = {
        headers: new HttpHeaders({
          'Authorization':'bearer 3d7a0733-9255-4f0f-b50b-a1d048541282',
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
