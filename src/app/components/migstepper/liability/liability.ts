import { Component,Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_LABEL } from "@progress/kendo-angular-label";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_DROPDOWNS } from "@progress/kendo-angular-dropdowns";

@Component({
  selector: 'app-liability',
  imports: [ ReactiveFormsModule,KENDO_LABEL,KENDO_INPUTS,KENDO_BUTTONS,KENDO_DROPDOWNS],
  templateUrl: './liability.html',
  styleUrl: './liability.scss',
})
export class Liability {

  @Input() public liabilityDetails: FormGroup;

  public countries: Array<string> = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia & Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Moldova",
    "United States"
  ];

  constructor(){

  }

  public  ngOnInit(): void{  
    
  }

}
