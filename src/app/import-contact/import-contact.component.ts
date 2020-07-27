import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserServiceService} from "../user-service.service";
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-import-contact',
  templateUrl: './import-contact.component.html',
  styleUrls: ['./import-contact.component.css']
})
export class ImportContactComponent implements OnInit {

  doctor: SocialUser;
  emailAddrArr : any;
  model : any ={};
  myForm: FormGroup;
  show: any;
  arr : any = [];
  constructor(private authService: AuthService, private route: ActivatedRoute, private http: HttpClient, private service: UserServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    
    this.emailAddrArr = [];
    this.show = false;
    this.myForm = this.fb.group({
      useremail: this.fb.array([])
    });
    this.authService.authState.subscribe((doctor) => {
      console.log(doctor);
      this.doctor = doctor;
    });
  }
 
  signOut(): void {
    this.authService.signOut();
  }

  signInGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  onChange(name,email, isChecked) {
    const emailFormArray = <FormArray>this.myForm.controls.useremail;

    if (isChecked) {
      emailFormArray.push(new FormControl({'doc_name':this.doctor.name ,'person_name': name, 'person_email': email}));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
  }

  submit(){
     console.log(this.model);

    for(var i = 0; i < this.myForm.value.useremail.length; i++){
      this.arr.push(this.myForm.value.useremail[i]);
    
    }
    this.service.doc_info2(JSON.stringify(this.arr))
      .subscribe(
        data => {
          console.log('sdvsdvsvsvsvsdv', data);
      }
    );
    this.service.send_mail(JSON.stringify(this.arr), localStorage.getItem('Mail_slug'), this.model)
      .subscribe(
        data => {
          console.log('Email sent', data);
      }
    );
    console.log(this.arr[0]);
    console.log(this.myForm.value.useremail[0]);
    alert('Saved successfully');
  }



  inviteGoogle(){
    var accessToken = this.doctor.authToken;
    const url = `https://people.googleapis.com/v1/people/me/connections?personFields=email`;
    console.log(accessToken);
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + accessToken,
      'Accept': 'application/json',
    });
    let options = { headers: headers };
  // 'https://people.googleapis.com/v1/people/me/connections?personFields=names%2CemailAddresses&key=[YOUR_API_KEY]' 

    return this.http.get('https://people.googleapis.com/v1/people/me/connections?personFields=names%2CemailAddresses', options).subscribe(data => {
      console.log('Data is coming \n', data);
      // console.log(data['connections'].length);
      // console.log(data['connections'][0].names[0].displayName)
      this.show = true;
      // var jsondata = data.json();
      if(data)
      for (let i = 0; i < data['connections'].length; i++) {
        if(data['connections'][i]['emailAddresses']) {
          this.emailAddrArr.push({'name': data['connections'][i].names[0].displayName, "email":data['connections'][i].emailAddresses[0].value});
        }
      }
      console.log('email array', this.emailAddrArr);
    //  .connections[7].emailAddresses[0].value
      // this.service.doc_info2(JSON.stringify(this.emailAddrArr))
      //   .subscribe(
      //     data => {
      //       console.log('sdvsdvsvsvsvsdv', data);
      //     }
      //   );
    },
    error => {
      this.show = false;
      console.log(error);
      this.signOut();
      alert('No contacts found');
    });
  }

}

