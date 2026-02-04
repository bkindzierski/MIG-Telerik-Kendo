import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { KENDO_UPLOADS, FileRestrictions,} from "@progress/kendo-angular-upload";
import {
  InputsModule,
  InputType,
  KENDO_INPUTS,
  TextBoxComponent,
} from "@progress/kendo-angular-inputs";

import { KENDO_LABEL } from "@progress/kendo-angular-label";
import { eyeIcon, eyeSlashIcon, SVGIcon } from "@progress/kendo-svg-icons";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-quoteinfo',
  imports: [ ReactiveFormsModule,KENDO_LABEL,KENDO_INPUTS,KENDO_BUTTONS,KENDO_UPLOADS],
  templateUrl: './quoteinfo.html',
  styleUrl: './quoteinfo.scss',
})
export class Quoteinfo {

  @Input() public QuoteInfoDetails: FormGroup;
  public eyeIcon: SVGIcon = eyeSlashIcon;
  public passInputType: InputType = "password";
  public isHidden: boolean = true;

  @Input() public accountDetails: FormGroup;
  @ViewChild("password") public textbox: TextBoxComponent;

  constructor(){
    
  }
  
  public restrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png"],
  };
}
