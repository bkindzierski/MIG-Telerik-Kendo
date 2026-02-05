import { Injectable, signal } from '@angular/core';
import { Account } from '../app/model/account.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AccountDataService {
  
  private apiUrl:string = './assets/sample-data/data.json';

  constructor(private http: HttpClient){

  }

  getAccountDataObservable():Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl);
  }

  
  async getAccountData():Promise<Account[]>{
    
    const accounts$ = 
      this.http.get<Account[]>(this.apiUrl,
        {
          /**this is how we can skip the loading indicator */
          //context: new HttpContext().set(SkipLoading, true)
        });

    //** firstValueFrom converts to a promise return*/
    const response = await firstValueFrom(accounts$)
    //globalSignal.set(response);
    return response;
    //async automatically returns this empty array as a promise 
    //return [];
  }
}

//how to share a signal across multiple components
export const globalSignal = signal<Account[]>([]);