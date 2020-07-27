import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {UserServiceService} from '../user-service.service';

import { TheInerviewDiscussComponent } from '../the-inerview-discuss/the-inerview-discuss.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mautic-user-addcontact',
  templateUrl: './mautic-user-addcontact.component.html',
  styleUrls: ['./mautic-user-addcontact.component.css']
})
export class MauticUserAddcontactComponent implements OnInit {
  team: any;

  constructor(
    private addContactService: UserServiceService, private router: ActivatedRoute

  ) { }

  registerForm = new FormGroup({
    salutation: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    designation:new FormControl(''),
    companyName: new FormControl(''),
    mobile:new FormControl(''),
    address: new FormControl(''),

  });

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      //   console.log('this is llovwee,',params);
      this.team = params['team'];
      //alert("Doctor id is :: "+this.id_of_user)
      //     alert("All Docs"+this.id_of_event);
      //  localStorage.setItem('Mail_slug', this.all_doc);
    });
    this.registerForm = new FormGroup({
      'salutation': new FormControl('', [
        Validators.required,
       
      ]),
      'firstname': new FormControl('', [
        Validators.required,
       
      ]),
      'lastname': new FormControl('', [
        Validators.required,
      
      ]),
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'designation': new FormControl('',[
        Validators.required,
        // Validators.minLength(8),
      ]),
      'companyName': new FormControl('',[
        Validators.required,
        // Validators.minLength(8),
      ]),
      'mobile': new FormControl('',[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(5)
      ]),
      'address': new FormControl('',[
        Validators.required,
        // Validators.minLength(8),
      ]),
      
    });
  }

  onSubmit(){
    this.addContactService.MauticaddContact(this.registerForm.value , this.team)
  }


}
