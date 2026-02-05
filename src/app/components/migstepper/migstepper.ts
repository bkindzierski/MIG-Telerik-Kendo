import { Component,ViewEncapsulation,ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_LAYOUT, StepperComponent } from "@progress/kendo-angular-layout";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_LABEL } from "@progress/kendo-angular-label";
//import { Appbar } from '../appbar/appbar';
import { Quoteinfo } from './quoteinfo/quoteinfo';
import { Liability } from './liability/liability';
import { Locations } from './locations/locations';

@Component({
  selector: 'app-migstepper',
  imports: [Locations,Liability,Quoteinfo,StepperComponent,ReactiveFormsModule,KENDO_BUTTONS,KENDO_LAYOUT,KENDO_INPUTS, KENDO_LABEL],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './migstepper.html',
  styleUrl: './migstepper.scss',
})
export class Migstepper {

  public currentStep = 0;

  @ViewChild("stepper", { static: true })
  public stepper: StepperComponent;
 
  
  constructor(){

  }

  public  ngOnInit(): void{  
    
  }

  public form = new FormGroup({
    quoteInfoDetails: new FormGroup({
      userName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      avatar: new FormControl(null),
    }),
    liabilityDetails: new FormGroup({
      fullName: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      about: new FormControl(""),
    }),
    paymentDetails: new FormGroup({
      cardNumber: new FormControl("", Validators.required),
      cvc: new FormControl("", [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
      ]),
      expirationDate: new FormControl(null, Validators.required),
      cardHolder: new FormControl("", Validators.required),
    }),
  });

  public get currentGroup(): FormGroup {
    return this.getGroupAt(this.currentStep);
  }

  public next(): void {
    if (this.currentGroup.valid && this.currentStep !== this.steps.length) {
      this.currentStep += 1;
      return;
    }
    this.currentGroup.markAllAsTouched();
    this.stepper.validateSteps();
  }

  public prev(): void {
    this.currentStep -= 1;
  }

  private isStepValid = (index: number): boolean => {
    return this.getGroupAt(index).valid || this.currentGroup.untouched;
  };

  private shouldValidate = (index: number): boolean => {
    return this.getGroupAt(index).touched && this.currentStep >= index;
  };

  public submit(): void {
    if (!this.currentGroup.valid) {
      this.currentGroup.markAllAsTouched();
      this.stepper.validateSteps();
    }
    if (this.form.valid) {
      console.log("Submitted data", this.form.value);
    }
  }

  private getGroupAt(index: number): FormGroup {    
    const groups = Object.keys(this.form.controls).map((groupName) =>
      this.form.get(groupName)
    ) as FormGroup[];

    return groups[index];
  }

  public steps = [
    {
      label: "Account Details",
      isValid: this.isStepValid,
      validate: this.shouldValidate,
    },
    {
      label: "Liability Limits",
      isValid: this.isStepValid,
      validate: this.shouldValidate,
    },
    {
      label: "Payment Details",
      isValid: this.isStepValid,
      validate: this.shouldValidate,
    },
  ];
}
