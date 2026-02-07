import { Component, computed, effect, input, OnInit, signal } from '@angular/core'
import { CommonModule, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs';
import { Account } from '../../../app/model/account.model'
import { AccountDataService } from '../../../../src/services/account-data.service';
import { FormsModule } from '@angular/forms';
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { GridComponent, GridDataResult, KENDO_GRID, SelectableSettings, SelectionEvent } from '@progress/kendo-angular-grid'
import { KENDO_SVGICON } from '@progress/kendo-angular-icons';
import { editToolsIcon } from '@progress/kendo-svg-icons';
import { State, process } from '@progress/kendo-data-query';
import { Appbar } from '../../../app/navigation/appbar/appbar'
import { KENDO_DIALOGS } from "@progress/kendo-angular-dialog";
import { KENDO_BUTTON } from '@progress/kendo-angular-buttons';
@Component({
  selector: 'app-accountsgrid',
  imports: [Appbar,CommonModule,KENDO_LABELS,KENDO_GRID,KENDO_SVGICON, KENDO_DIALOGS, KENDO_BUTTON,AsyncPipe],
  templateUrl: './accountsgrid.html',
  styleUrl: './accountsgrid.scss',
  providers: [AccountDataService],
})
export class Accountsgrid {

  // Account[];  
  #accounts = signal<Account[]>([]);
  private serviceSubscription: Subscription;
  //public gridAccounts$!: Observable<Account[]>; // Data source as an Observable
  public view: Observable<GridDataResult>;
  public editIcon = editToolsIcon;

  public gridData: GridDataResult | undefined
  /** GRID state */
  public gridState: State = {
    skip:0,
    take:10,
    sort:[],
    group:[]
  }

  public opened = false;
  public details: any;
  constructor(private accountService: AccountDataService){
    this.loadAccounts();

     effect(()=>{
      //console.log('effect accounts: ', this.getAccounts());
    });
  }

  public toggle(isOpened: boolean): void {
    this.opened = isOpened;
  }

  ngOnInit(){

  }
  public onDataStateChange(newState: State){
    this.gridState = newState;
    this.loadAccounts();
  }

  public onSelectionChange(args: SelectionEvent){
    const cellItem =  args.selectedRows[0].dataItem as any
    console.log('args', cellItem.details);
    this.details = cellItem.details;
    this.opened = true;
  }

  public selectableSettings: SelectableSettings = { 
    //checkboxOnly: false
  };
  
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
    // const accounts = this.#accounts();   
    // return accounts.filter(acct=>acct.version == "6.1");   
    return this.gridData = process(this.#accounts(), this.gridState);
  });

  public getIndicatorImage(item:any) : string{
    //return ItemType.getIndicatorImage(item.type)
    return '';
  }

  public  ngOnDestroy(): void {
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }    
  }
}
