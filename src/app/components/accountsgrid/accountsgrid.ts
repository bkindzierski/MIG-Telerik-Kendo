import { Component, computed, effect, input, OnInit, signal } from '@angular/core'
import { CommonModule } from '@angular/common';
import { Account } from '../../../app/model/account.model'
import { AccountDataService } from '../../../../src/services/account-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accountsgrid',
  imports: [CommonModule],
  templateUrl: './accountsgrid.html',
  styleUrl: './accountsgrid.scss',
  providers: [AccountDataService],
})
export class Accountsgrid {

  // Account[];  
  #accounts = signal<Account[]>([]);
  

  constructor(private accountService: AccountDataService){
    this.loadAccounts();

     effect(()=>{
      //console.log('effect accounts: ', this.getAccounts());
    });
  }

  ngOnInit(){

  }


  async loadAccounts(){ 
    try {
        // const accounts = await this.accountService.getAccountData(); 
        // this.#accounts.set(accounts); 

        this.accountService.getAccountDataObservable().subscribe((resp:Account[])=>{
            this.#accounts.set(resp); 
        });
        
      } 
      catch (err) {
        console.log(err);
      }
  }
  
  getAccounts = computed(() => {
    const accounts = this.#accounts();   
    return accounts.filter(acct=>acct.version == "6.1");    
  });


}
