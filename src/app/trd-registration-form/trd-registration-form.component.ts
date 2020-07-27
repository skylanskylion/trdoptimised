import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserServiceService} from "../user-service.service";
import { Inject } from '@angular/core';
import {Router} from "@angular/router";

export interface Animal {
  name: string;
  sound: string;
}
export interface Profession {
  name: string;
  category: string;
}

export interface Salutation {
  name: string;
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-trd-registration-form',
  templateUrl: './trd-registration-form.component.html',
  styleUrls: ['./trd-registration-form.component.css']
})
export class TrdRegistrationFormComponent implements OnInit {
  otherSpecialityStatus : boolean = false;
  personRe :boolean=true;
  loginpe:boolean=false;
  model2:any = {};
  countriesName : any;
  countryControl = new FormControl('', [Validators.required]); 
  selectFormControl = new FormControl('', Validators.required);
 professionControl = new FormControl('', [Validators.required]);


 salutations: Salutation[] = [
  {name: 'Dr.'},
  {name: 'Mr.'},
  {name: 'Ms.'},
];


  professions: Profession[] = [
    {name: 'Physician', category: 'Doctor'},
    {name: 'Cardiologist', category: 'Doctor'},
    {name: 'Dermatologist', category: 'Doctor'},
    {name: 'Gastroenterologist', category: 'Doctor'},
    {name: 'Neurologist', category: 'Doctor'},
  ];
  

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(
    private service: UserServiceService,
    private route: Router//,
    //public dialogRef: MatDialogRef<TrdRegistrationFormComponent>,
  //  @Inject(MAT_DIALOG_DATA) public data: any 
    ) {
    }

  ngOnInit() {
    this.service.getCountries()
    .subscribe(
        data =>{
          console.log("Retrieved Data For Countries == "+data);
          if(data){
          // alert('Retrieved Countries Successfully');
            this.countriesName = data['countries'];
            console.log("Countries Name-----------------"+this.countriesName[0]['country_name']);
          }
        },
        error =>{
          console.log(error);
        });
  }
  

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  otherSpeciality(){
    this.otherSpecialityStatus = true;
  }



  register(){
    this.personRe = false;
    this.loginpe = true;
    console.log('hiii');
    this.model2.username = this.model2.salutation+' '+this.model2.firstname+' '+this.model2.lastname;
    this.model2.verification_flag = "false";
     console.log("MODEL2 Contains---------------"+JSON.stringify(this.model2));
      this.service.registration(JSON.stringify(this.model2))
          .subscribe(
             data =>{
                console.log(data);
                if(data['success']){
                  alert('Registered Successfully');
                 // this.onNoClick();
               this.route.navigate(['']);
                }
              },
              error =>{
                console.log(error);
              });
   }

   onNoClick(): void {
   // this.dialogRef.close();
  }
}
