import { Component } from '@angular/core';
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { KENDO_INDICATORS } from "@progress/kendo-angular-indicators";
import { KENDO_LAYOUT } from "@progress/kendo-angular-layout";
import { KENDO_NAVIGATION } from "@progress/kendo-angular-navigation";
//import { bellIcon, menuIcon, SVGIcon, userIcon } from "@progress/kendo-svg-icon";
import { KENDO_LABEL } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-appbar',
  imports: [KENDO_LABEL,KENDO_LAYOUT,KENDO_INDICATORS,KENDO_ICONS,KENDO_NAVIGATION,KENDO_BUTTONS],
  templateUrl: './appbar.html',
  styleUrl: './appbar.scss',
})
export class Appbar {

  // public menuIcon: SVGIcon = menuIcon;
  // public bellIcon: SVGIcon = bellIcon;
  // public userIcon: SVGIcon = userIcon;

  constructor(){
  }

  public menuClick():void{
    console.log('menu click on app bar!')
  }

}
