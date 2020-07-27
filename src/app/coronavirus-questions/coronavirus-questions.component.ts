
import {Component, OnInit} from '@angular/core';
import {Fileup} from "../fileup";
import {DataService} from "../data.service";

//import {DataService} from "../data.service";
//import * as firebase from 'firebase';
import * as firebase from 'firebase';
import {Meta, Title} from "@angular/platform-browser";
import * as moment from 'moment';
//import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm, Validators, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-coronavirus-questions',
  templateUrl: './coronavirus-questions.component.html',
  styleUrls: ['./coronavirus-questions.component.css']
})
export class CoronavirusQuestionsComponent implements OnInit {
  [x: string]: any;
  isLogin : boolean =true;
  isRegister : boolean = true;
  mobile_verified : boolean = true;
  phone : any;
 
     myForm: FormGroup;
 
   emailFormControl = new FormControl('', [
       Validators.required,
       Validators.email,
     ]);
   
     select = new FormControl('', [
       Validators.required,
       Validators.email,
     ])
   model: any = {};
   model2: any ={};
   conv: any={};
   loading = false;
     sumodel: any = {};
     uploadedfile : any;
     uploadedfile1: any;
     doctor_name:any;
     session_name:any;
     toic_name:any;
     correct_answer:any;
     question:any;
  first_name:any;
  last_name:any;
     topic_name:any;
     uploadedfileimage: any;
     submitted = false;
     selectedFiles: FileList;
     currentFileUpload: Fileup;
     temp: any;
     progress: { percentage: string } = {percentage: 'fg'};
     minDate = new Date(2019, 10, 7);
   maxDate = new Date(2019, 10, 9);
   times: string[] = ['8:00-8:15','8:15-8:30','8:30-8:45','8:45-9:00','9:00-9:15','9:15-9:30' ,'9:30-9:45' ,'9:45-10:00','10:00-10:15','10:15-10:30','10:30-10:45','10:45-11:00','11:00-11:15','11:15-11:30','11:30-11:45','11:45-12:00','12:00-12:15','12:00-12:30','12:30-12:45','12:45-13:00','14:00-14:15','14:15-14:30','14:30-14:45','14:45-15:00','15:00-15:15','15:15-15:30','15:30-15:45','15:45-16:00','16:00-16:15','16:15-16:30','16:30-16:45','16:45-17:00','17:00-17:15','17:15-17:30','17:30-17:45','17:45-18:00','18:00-18:15','18:15-18:30','18:30-18:45','18:45-19:00','19:00-19:15','19:15-19:30','19:30-19:45','19:45-20:00'];
 
   timesbooked: string[] = ['8:00-8:15','8:15-8:30','8:30-8:45','8:45-9:00','9:00-9:15','9:15-9:30' ,'9:30-9:45' ,'9:45-10:00','10:00-10:15','10:15-10:30','10:30-10:45','10:45-11:00','11:00-11:15','11:15-11:30','11:30-11:45','11:45-12:00','12:00-12:15','12:00-12:30','12:30-12:45','12:45-13:00','14:00-14:15','14:15-14:30','14:30-14:45','14:45-15:00','15:00-15:15','15:15-15:30','15:30-15:45','15:45-16:00','16:00-16:15','16:15-16:30','16:30-16:45','16:45-17:00','17:00-17:15','17:15-17:30','17:30-17:45','17:45-18:00','18:00-18:15','18:15-18:30','18:30-18:45','18:45-19:00','19:00-19:15','19:15-19:30','19:30-19:45','19:45-20:00'];
     constructor( private userService: UserServiceService ,private dataService: DataService, private fb: FormBuilder, private titleservice: Title, private meta: Meta) {
       this.myForm = this.fb.group({
         questions: this.fb.array([])
       })
     }
     // mail_check() {
       
           get formData(){return <FormArray> this.myForm.get('Data');}
      
       
       // console.log(this.model2.user_id);
       // delete this.phone_number;
       // this.model2.mobile=this.model2.user_id;
       // this.model2.username=this.model2.firstname +" " + this.model2.lastname;
       //alert(this.model2.password);
       // delete this.model2.via;
       // delete this.model2.token;
       
      
      // alert('RTGYGG')
       // if (this.model2.username && this.model2.email) {
      // alert('iN IF')
           
           // this.user.mail_checking_details(this.model2.email).subscribe
           // (data=> {
           //     console.log(data);
           //     if(data['success']==false) {
                   //alert(JSON.stringify(this.model2));
                   // this.user.registration(JSON.stringify(this.model2)).subscribe
                   // (data=> {
                   //     console.log(data);
                       // if (data['success']) {
                       //     alert('Registered successfully...');
                       //     this.isRegister = false;
                       //     this.isLogin = false;
                       //     this.mobile_verified = true;
                       //     let myObj = {mobile: this.model2.email};
                       //     localStorage.setItem('verified_mobile_number', JSON.stringify(myObj));
                       //     this.model.user_id = this.model2.email;
                       //     this.phone = this.model2.email;
                     //      this.messageService.getPermission();
   
                       // } else {
                       //     alert('Error');
                           // alert('failed');
                           // this.verified = true;
                           // this.phone_btn_onclick();
           //             }
           //         });
           //     } else{
           //         alert('Already registered with this email');
           //     }
           // });
    //    } }// else if(x==false){
       //    alert('Passwords Do not Match');
       // }
       submitformquestions(){
         // this.submitformtopollingquestions();
         // this.submittooptions();
         this.conversion();
       }
 //       submittooptions(){
 //         console.log("in submit options functions");
 //         //this.model2.option1
      
 // // this.loading = true;
 
 // this.model.doctor_name="Dr." + this.model.firstname +" " + this.model.lastname;
 
 //  console.log("doctor name is"+this.model2.option);
 
  
 //                   this.userService.add_questions(JSON.stringify(this.model)).subscribe()
          
 //                           alert('Submitted successfully...');
                           
                          
 
 //       }
 
 
   addNewQuestion() {
     let control = <FormArray>this.myForm.controls.questions;
     control.push(
       this.fb.group({
         question: ['']
       })
 
     )
   }
 
   deleteQuestion(index) {
     let control = <FormArray>this.myForm.controls.questions;
     control.removeAt(index)
   }
 
   deleteProject(control, index) {
     control.removeAt(index)
   }
 
   conversion(){
   // let conv =   JSON.stringify(this.myForm.value);
   // console.log(conv);
   // this.model.doctor_name="Dr." + this.model.firstname +" " + this.model.lastname;
   // this.model.event_name="CRITICARE-2020"
   // console.log(this.model.doctor_name);
   this.myForm.value.details  = this.model ;
   //this.myForm.value.keytakeaways = this.model2 ; 
   console.log(this.myForm.value)
   this.userService.add_questions_coronavirus(JSON.stringify(this.myForm.value),this.model.name , this.model.email).subscribe(
   data=> {
   });
   alert("Details Submitted Successfully");
   window.location.reload();
   }
    //    login_validation(){
    //      console.log(this.model3.user_id);
    //      if(this.model3.user_id.length>3) {
    //          this.user.mail_checking_login(this.model3.user_id,this.model3.password).subscribe
    //          (data=> {
    //              console.log(data);
    //              if (data['success']) {
    //                  //alert('found');
    //                  this.isLogin = false;
    //                  this.isRegister = false;
    //                  this.mobile_verified = true;
    //                  let myObj = { phone_number: this.model3.user_id};
    //                  localStorage.setItem('verified_mobile_number', JSON.stringify(myObj));
    //                  this.model.user_id = this.model3.user_id;
    //                  this.phone = this.model3.user_id;
    //              } else {
    //                  alert('Wrong email and password');
    //                  // alert('failed');
    //                  // this.verified = true;
    //                  // this.phone_btn_onclick();
    //              }
    //          });
    //      }
    //  }
 //       submitformtopollingquestions(){
 // console.log("in submit questions functions");
 // // this.loading = true;
 
 // this.model.doctor_name="Dr." + this.model.firstname +" " + this.model.lastname;
 // this.model.event_name = 'AOC-2020';
 //  console.log("doctor name is"+this.model.doctor_name);
 
 //         // data=> {
 //             //console.log(data);
 
 //                 //alert(JSON.stringify(this.model2));
                
           
            
 //                   //alert(JSON.stringify(this.model2));
 //                   this.userService.add_questions(JSON.stringify(this.model)).subscribe()
 //                   // (data=> {
 //                   //     console.log(data);
 //                       //if (data['success']) {
 //                           alert('Submitted successfully...');
                           
 //                           // this.isRegister = false;
 //                           // this.isLogin = false;
 //                           // this.mobile_verified = true;
 //                           // let myObj = {mobile: this.model2.email};
 //                           // localStorage.setItem('verified_mobile_number', JSON.stringify(myObj));
 //                           // this.model.user_id = this.model2.email;
 //                           // this.phone = this.model2.email;
 //                     //      this.messageService.getPermission();
   
 //                       // } else {
 //                       //     alert('Error');
 //                       //     // alert('failed');
 //                       //     // this.verified = true;
 //                       //     // this.phone_btn_onclick();
 //                       // }
 //                 //  });
 //               // } else{
 //               //     alert('Already registered with this email');
               
           
 //        } 
       
    //  onDaychange(day){
    //    let a = moment(day).format('DD-MM-YYYY');
    //    let event_name = 'AOC-2020';
    //    this.userService.rssdi_solts(a, event).subscribe(data =>{
    //      console.log('data details'+ data);
    //      console.log(data['data']);
    //      const arr: Array<string> = [];
    //      Array.from(data['data'], x => arr.push(x['poll_time']));
    //      console.log('database slots array');
    //      console.log(arr);
    //      // not booked slots
    //      this.times = this.times.filter(value => !arr.includes(value));
    //      // already booked slots
    //      this.timesbooked = this.timesbooked.filter(value => arr.includes(value));
    //      // this.disableSelect = false;
    //      console.log('booked slots ' + this.timesbooked);
    //      console.log('not booked slots ' + this.times);
    //    //  this.groupname = 'Already Booked Slots';
    //    }, error2 => console.log(error2)
    //  );
 
    //  }
 
   ngOnInit() {
     this.titleservice.setTitle(' COVID-19 Questions Page');
    //  this.meta.updateTag({name: 'description', content:  'Submit Question of the talk for CRITICARE, Hyderabad, Produced by Digital Knowledge Partner'});
    //  this.meta.updateTag({name: 'keywords', content: 'therightdoctors, CRITICARE , COVID-19 2020 , COVID-19 2020 Hyderabad TheRightDoctors'
    //  });
 
    //  this.meta.updateTag({
    //    property: 'vr:canonical',
    //    content: 'https://COVID-19.therightdoctors.com/slot-booking'});
    //  this.meta.updateTag({property: 'og:title', content: 'Submit Question of the talk for COVID-19, Hyderabad, Produced by Digital Knowledge Partner'});
    //  this.meta.updateTag({property: 'og:description', content: 'Digital Knowledge Partner'});
    //  // this.meta.updateTag({
    //  //   property: 'og:url',
    //  //   content: 'https://therightdoctors.com/rssdi-jaipur-2019-slot-booking'
    //  // });
    //  // this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Prakash-Keswani/Prakash-Keswani-large.jpg'});
    //  // this.meta.updateTag({property: 'og:image:secure_url', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Prakash-Keswani/Prakash-Keswani-large.jpg'});
 
    //  this.meta.updateTag({name: 'twitter:title', content: 'Book your Studio time at Torrent RSSDI tv, Jaipur'});
    //  this.meta.updateTag({name: 'twitter:description', content: 'Digital Knowledge Partner'});
    //  /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
    //  this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Prakash-Keswani/Prakash-Keswani-large.jpg'});
    //  this.meta.updateTag({
    //    name: 'twitter:player',
    //    content: 'https://COVID-19.therightdoctors.com/slot-booking'});
    //  this.meta.updateTag({name: 'twitter:player:stream', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Prakash-Keswani/Prakash-Keswani-large.jpg'});
 
     this.addNewQuestion();
   }
 
  //  register() {
  //    console.log('in register');
  //    // this.alertService.success('Registration successful', false);
  //    this.loading = true;
  //    this.model.event_name = 'CRITICARE-2020';
  //      this.model.presentation = this.uploadedfile1;
  //      this.model.image = this.uploadedfileimage;
  //    this.model.poll_date = moment(this.model.poll_date).format('DD-MM-YYYY');
  //    console.log('input model ' + this.model);
  //    // this.userService.create(this.model)
  //    //   .subscribe(
  //    //     data => {
  //    //       console.log(data);
  //    //       //  this.alertService.success('Registration successful', true);
  //    //       console.log('return data' + data);
  //    //       console.log('return id' + data['id']);
  //    //       alert('Your detailed saved successfully');
  //    //     },
  //    //     error => {
  //    //       console.log(error);
  //    //       // this.alertService.error(error);
  //    //       this.loading = false;
  //    //     });
  //  }
 
     // selectFile(event) {
     //      let snap;
     //      this.selectedFiles = event.target.files;
     //      const file = this.selectedFiles.item(0);
     //      this.currentFileUpload = new Fileup(file);
     //      this.dataService.pushFileToStorage(this.currentFileUpload, this.progress).on(firebase.storage.TaskEvent.STATE_CHANGED,
     //          (snapshot) => {
     //              // in progress
     //              snap = snapshot as firebase.storage.UploadTaskSnapshot;
     //          },
     //          (error) => {
     //              // fail
     //              console.log(error);
     //          },
     //          () => {
     //              // success
     //             //  console.log('in complete url' + snap.downloadURL);
     //             //  this.uploadedfile = snap.downloadURL;
     //             snap.ref.getDownloadURL().then(url => {
     //               console.log('complete url ' + url);
     //               this.uploadedfile1 = url;
     //             });
 
     //          });
     // }
 //     selectFileforImage(event) {
 //       let snap;
 //       this.selectedFiles = event.target.files;
 //       const file = this.selectedFiles.item(0);
 //       this.currentFileUpload = new Fileup(file);
 //       this.dataService.pushFileToStorage(this.currentFileUpload, this.progress).on(firebase.storage.TaskEvent.STATE_CHANGED,
 //           (snapshot) => {
 //               // in progress
 //               snap = snapshot as firebase.storage.UploadTaskSnapshot;
 //           },
 //           (error) => {
 //               // fail
 //               console.log(error);
 //           },
 //           () => {
 //               // success
 //              //  console.log('in complete url' + snap.downloadURL);
 //              //  this.uploadedfile = snap.downloadURL;
 //              snap.ref.getDownloadURL().then(url => {
 //                console.log('complete url ' + url);
 //                this.uploadedfileimage = url;
 //              });
 
 //           });
 //  }
//  selectFileforImage(event) {
//    let snap;
//    this.selectedFiles = event.target.files;
//    const file = this.selectedFiles.item(0);
//    this.currentFileUpload = new Fileup(file);
//    this.dataService.pushFileToStorage(this.currentFileUpload, this.progress).on(firebase.storage.TaskEvent.STATE_CHANGED,
//        (snapshot) => {
//            // in progress
//            snap = snapshot as firebase.storage.UploadTaskSnapshot;
//        },
//        (error) => {
//            // fail
//            console.log(error);
//        },
//        () => {
//            // success
//           //  console.log('in complete url' + snap.downloadURL);
//           //  this.uploadedfile = snap.downloadURL;
//           snap.ref.getDownloadURL().then(url => {
//             console.log('complete url ' + url);
//             this.uploadedfileimage = url;
//           });
 
//        });
//  }
 
 }
