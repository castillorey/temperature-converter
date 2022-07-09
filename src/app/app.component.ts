import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  temperatureTypes: Array<string> = [ 'Celsius', 'Farenheit'];
  result: string = "--";

  temperatureForm!: FormGroup;
  degree!: FormControl;
  conversionFromType!: FormControl;
  conversionToType!: FormControl;

  get isSameConversionType(): boolean {
    return this.conversionFromType.value === this.conversionToType.value;
  }
  ngOnInit(): void {
    this.initFormControls();
    this.initForm();
  }

  initFormControls(): void {
    this.degree = new FormControl("", [Validators.required, Validators.pattern("^[0-9]+$")]);
    this.conversionFromType = new FormControl("", Validators.required);
    this.conversionToType = new FormControl("", Validators.required);
  }

  initForm() :void {
    this.temperatureForm = new FormGroup({
      degree: this.degree,
      conversionFromType:  this.conversionFromType,
      conversionToType:  this.conversionToType
    });
  }

  onSubmit() :void {
    if(this.temperatureForm.valid && !this.isSameConversionType){
      console.log(this.temperatureForm.value);
      this.resetForm();
    }
  }

  private resetForm(): void {
    this.temperatureForm.reset();
    this.conversionFromType.setValue(""); 
  }

}
