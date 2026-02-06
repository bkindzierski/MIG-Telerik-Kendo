import { Component, signal, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { KENDO_ICONS, SVGIcon } from "@progress/kendo-angular-icons";
import { KENDO_DROPDOWNS } from "@progress/kendo-angular-dropdowns";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";

import {
  DrawerComponent,
  DrawerItem,
  DrawerSelectEvent,
  KENDO_LAYOUT,
} from "@progress/kendo-angular-layout";

import {
  bellIcon,
  calendarIcon,
  envelopeLinkIcon,
  inboxIcon,
  menuIcon,
  starOutlineIcon,
} from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-root',
  imports: [KENDO_BUTTONS, KENDO_LAYOUT, KENDO_DATEINPUTS, KENDO_ICONS, KENDO_DROPDOWNS, FormsModule, RouterOutlet],
  providers: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Merchants Group');
  public isloggedIn:boolean = true;

  public menuIcon: SVGIcon = menuIcon;
  public allowCustom = true;
  public selectedValues: string = "Select";

  public selected = "Inbox";
  public svgInbox = inboxIcon;
  public svgMenu = menuIcon;
  public svgBell = bellIcon;
  public svgCalendar = calendarIcon;
  public svgAttachments = envelopeLinkIcon;
  public svgFavorites = starOutlineIcon;
  
   public listItems: Array<string> = [
    "Select",
    "Agency Bulletins",
    "Company Forms Library",
    "e-Manuals",
    "Appetite Guide",
    "Supplemental Questionnaires",
    "Tutorials",
    "Co-branded Sales Kit",
    "Loss Control",
    "Premium Audit"
  ];

  public items: Array<DrawerItem> = [
    { text: "New Quote", svgIcon: this.svgInbox, selected: true },
    { text: "My Accounts", svgIcon: this.svgBell },
    { text: "Billing", svgIcon: this.svgCalendar },
    { text: "Personal Insurance", svgIcon: this.svgAttachments },
    { text: "Claims", svgIcon: this.svgFavorites },
  ];

  constructor(private routes: RouterOutlet, private router: Router){


  }
  
  //in html -> (expandedChange)="onExpandedChange($event)"
  // @ViewChild('drawer') drawer: DrawerComponent;
  // public onExpandedChange(e: boolean): void {
  //     this.drawer.expanded = true; // Forces it to stay open
  // }

  public onSelect(ev: DrawerSelectEvent): void {
    console.log('ev: ', ev.item.text);
    
    if(ev.item.text == 'New Quote'){
       this.router.navigate(['/migstepper']);
    }
    if(ev.item.text == 'My Accounts'){
       this.router.navigate(['/accounts']);
    }
    this.selected = ev.item.text;
  }
  
  showSidebar():any {
    //console.log('showSidebar ...')
    var sidebar = document.querySelector('.sidebar') as HTMLElement;
    return sidebar.style.display = 'flex'  
  }
  closeSidebar() : any{
     //console.log('showSidebar ...')
    var sidebar = document.querySelector('.sidebar') as HTMLElement;
    return sidebar.style.display = 'none'
  }
}
