
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';


import { obj } from '../model/login';


export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.password === obj.password
    ? null
    : { PasswordNoMatch: true };
};


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  isBoolean:boolean=false;
  isNext:boolean=false;
  isLogin:boolean=false;
  loginForm:any;
  loginData:any;
  validEmail:any;
  validName:any;
  errMsg:any;
  dropdown = new FormControl();
  options = obj.designation;
  cities=obj.city;
  

   constructor(private fbuild:FormBuilder){
    this.loginForm = this.fbuild.group({
      'email':[obj.email],
      'fullName':[obj.fullName],
      'organization':[obj.organization],
      'orgId':[obj.orgId],
     'password': [obj.password, [Validators.required]]
      // 'confirmedPassword': new FormControl(null, [Validators.required])
    },  { validators: confirmPasswordValidator });
  
    
   
}



  nextClick(formemail:any,formpass:any){
    console.log("email and password is:",formemail,obj.password);
    if(obj.email === formemail || obj.phone == formpass){
        this.isBoolean=!this.isBoolean;
        this.isNext= true;
        this.validEmail=obj.email;
        this.validName=obj.name
    }else{
      this.errMsg="Please enter valid email or number"
    }
   
  }

  onSubmit(formVal:any){
    

    if(obj.password === formVal.password){
      this.isNext=false;
     this.isLogin=true;
    }
   
     console.log("Password is",formVal)
  }

  activeTab = 'popular';

  popular(activeTab:any){
    this.activeTab = activeTab;
  }

  recent(activeTab:any){
    this.activeTab = 'recent';
  }
}
