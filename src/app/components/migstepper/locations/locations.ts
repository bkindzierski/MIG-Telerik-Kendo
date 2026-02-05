import { Component, Input,ViewEncapsulation } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_LABEL } from "@progress/kendo-angular-label";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_DATEINPUTS } from "@progress/kendo-angular-dateinputs";

@Component({
  selector: 'app-locations',
  imports: [ ReactiveFormsModule,KENDO_LABEL,KENDO_INPUTS,KENDO_BUTTONS,KENDO_DATEINPUTS],
  templateUrl: './locations.html',
  styleUrl: './locations.scss',
})
export class Locations {

  @Input() public locationDetails: FormGroup;  
  public mask: string = "0000-0000-0000-0000";
  public cvcMask: string = "000"
  constructor(){}

  ngOnInit(){}
}
