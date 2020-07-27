import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {DataService} from "../data.service";
import * as firebase from 'firebase';
import {Fileup} from "../fileup";
import {Router, ActivatedRoute} from "@angular/router";
import {Details} from "../Details";
import {Meta, Title} from "@angular/platform-browser";
//import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AngularEditorModule } from '@kolkov/angular-editor';
@Component({
  selector: 'app-edit-book-studio-slot',
  templateUrl: './edit-book-studio-slot.component.html',
  styleUrls: ['./edit-book-studio-slot.component.css']
})
export class EditBookStudioSlotComponent implements OnInit {
  cmeModel: any = {};
  podcastModel:any = {};
  doctor_model:any = {};
  loading = false;
  sumodel: any = {};
  uploadedfile : any;
    uploadedfile1: any;
    uploadedfileimage:any;
    submitted = false;
    selectedFiles: FileList;
    currentFileUpload: Fileup;
    temp: any;
    progress: { percentage: string } = {percentage: 'fg'};
    id: any;
  details: any;
    minDate = new Date(2019, 10, 7);
    maxDate = new Date(2019, 10, 10);
  tid: any;
  did: any;
  draft: any = {};
  model_transcript: any;
  model_new_draft: { transcript_id: any; transcript: any; slug: any; draft_by: any; updated_at: Date; };
    constructor(private titleservice: Title, private meta: Meta, private userService: UserServiceService, private dataService: DataService, private route: ActivatedRoute) {
    }

  ngOnInit() {


      this.route.params.subscribe(params =>{
        this.id = params['id'];
        this.tid = params['tid']
        this.did = params['did']
       // alert("Received id is -------"+this.id);
        console.log("Received id is -------"+this.id);
        // this.get_details(this.id);
        this.get_draft_from_id(this.did); 
        this.get_details1(this.id);
        this.get_details2(this.id);
      })
      // this.id = "dr-ashish-dengra";
      // console.log("Received id is -------"+this.id);
      // this.get_details(this.id);
      // this.get_details1(this.id);
      // this.get_details2(this.id);
      
  }
  get_draft_from_id(did){
    // this.user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log("Current User !" , this.user);
    this.userService.get_draft_from_id(did).subscribe(data =>{
      if(data['success']){
        console.log('Successfull' ,data['data']); 
        this.draft = data['data'][0]; 
        console.log(this.draft['transcript']); 
        this.model_transcript = this.draft['transcript'];
      }
    })

  }
  strip_html_tags(str)
  {
     if ((str===null) || (str===''))
         return false;
    else
    // str = str.toString();
    return str.replace(/<[^>]*>/g, '');
  }


  remove_linebreaks(str ) { 
    return str.replace( /[\r\n]+/gm, "" ); 
} 


removeFirstAndLastQuotes(str){
  return str.replace(/^"|"$/g, '');
}
  get_details(id) {
      this.userService.getSingleDoctorDetailsForTranscriptByCme(id)
          .subscribe(
              data => {
               // console.log(data);
                  
               //   console.log("Data received from cme == "+JSON.stringify(data));
                 // this.cmeModel.transcript = data['data'].transcript;
                 this.cmeModel = data['data'];
                //  var strippedTextfromHTML=this.strip_html_tags(data['data'].transcript);
                 // strippedTextfromHTML = this.remove_linebreaks(strippedTextfromHTML);
                //  var strippedTextfromHTMLWithoutQuotes = this.removeFirstAndLastQuotes(strippedTextfromHTML);
                  
                  //console.log("Stripped HTML is" +JSON.stringify(strippedTextfromHTMLWithoutQuotes));
               //   this.cmeModel.transcript = JSON.stringify(strippedTextfromHTMLWithoutQuotes);

                 // console.log("  this.cmeModel.transcript Stripped HTML is" +this.cmeModel.transcript);
                  /* CODE FOR SPLITTING TEXT ON dot(.) */
                  // let res = strippedTextfromHTMLWithoutQuotes.split(".");
                  // console.log("SPLITTED TEXT IS ------------ "+res);
                  // console.log("Type of splitted text =="+typeof(res));
                  // console.log("length of splitted text =="+res.length);
                  // for(var i =0; i<= res.length;i++){
                  //   console.log("Sentence is =="+res[i]);
                  // }
             },
              error => {
                  console.log(error);
              });
              
  }

  get_details1(id) {
  this.userService.getSingleDoctorDetailsForTranscriptByPodCast(id)
  .subscribe(
      data => {
       // console.log(data);
        //  this.details = data['data'][0];
        //  console.log("Data received from podcast == "+JSON.stringify(data));
          this.podcastModel = data['data'];
     },
      error => {
          console.log(error);
      });
    }

    get_details2(id) {
      this.userService.getSingleDoctorDetailsForTranscriptByDoctorName(id)
      .subscribe(
          data => {
           // console.log(data);
              // this.details = data['data'][0];
         //     console.log("Data received from doctor info table == "+JSON.stringify(data));
              this.doctor_model = data['data'];
         },
          error => {
              console.log(error);
          });
        }

  register() {
 //   console.log('in register');
    // this.alertService.success('Registration successful', false);
    this.loading = true;
    //  this.model.presentation = this.uploadedfile1;
    //  this.model.image = this.uploadedfileimage;
   // console.log('input model ' + this.model);

  //  console.log("CME Model Is "+JSON.stringify(this.cmeModel));
  this.cmeModel.sub_headline = this.doctor_model.doctor_name;
  this.cmeModel.designation = this.doctor_model.designation;
  this.cmeModel.hospital = this.doctor_model.hospital;
  if(this.model_transcript != this.draft['transcript']){
    console.log('LOl')
    let current_time  = new Date(); 
    this.model_new_draft = { 
      transcript_id : this.draft['transcript_id'] ,
      transcript : this.model_transcript , 
      slug : this.draft['slug'],
      draft_by : this.id, 
      updated_at : current_time
    }
    this.userService.create_new_draft(this.model_new_draft).subscribe(data =>{
      if(data['Success']){
        console.log('Successfully created draft');
      }
    })
  }
  // this.cmeModel.edited_transcript =  this.cmeModel.transcript;
    // this.userService.update_one_doctor_for_transcript_by_cme(this.cmeModel, this.id)
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //       //  this.alertService.success('Registration successful', true);

    //   //      alert('Details for update_one_doctor_for_transcript_by_cme updated Successfully');
    //     },
    //     error => {
    //       console.log(error);
    //       // this.alertService.error(error);
    //       this.loading = false;
    //     });

    //    console.log("Podcast Model Is "+JSON.stringify(this.podcastModel));
    this.userService.update_one_doctor_for_transcript_by_podcast(this.podcastModel, this.id)
    .subscribe(
      data => {
        console.log(data);
        //  this.alertService.success('Registration successful', true);

      //    alert('Details for update_one_doctor_for_transcript_by_podcast updated Successfully');
      },
      error => {
        console.log(error);
        // this.alertService.error(error);
        this.loading = false;
      });

          
    this.userService.update_one_doctor_for_transcript_by_doctorInfo(this.doctor_model, this.id)
    .subscribe(
      data => {
        console.log(data);
        //  this.alertService.success('Registration successful', true);

     //     alert('Details for update_one_doctor_for_transcript_by_doctorInfo updated Successfully');
      },
      error => {
        console.log(error);
        // this.alertService.error(error);
        this.loading = false;
      });
     alert("Details Updated Successfully"); 
  }
  email_sub(){

  }

  selectFile(event) {
    let snap;
    this.selectedFiles = event.target.files;
    const file = this.selectedFiles.item(0);
    this.currentFileUpload = new Fileup(file);
    this.dataService.pushFileToStorage(this.currentFileUpload, this.progress).on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
            // in progress
            snap = snapshot as firebase.storage.UploadTaskSnapshot;
        },
        (error) => {
            // fail
            console.log(error);
        },
        () => {
            // success
           //  console.log('in complete url' + snap.downloadURL);
           //  this.uploadedfile = snap.downloadURL;
           snap.ref.getDownloadURL().then(url => {
             console.log('complete url ' + url);
             this.uploadedfile1 = url;
           });

        });
}
selectFileforImage(event) {
 let snap;
 this.selectedFiles = event.target.files;
 const file = this.selectedFiles.item(0);
 this.currentFileUpload = new Fileup(file);
 this.dataService.pushFileToStorage(this.currentFileUpload, this.progress).on(firebase.storage.TaskEvent.STATE_CHANGED,
     (snapshot) => {
         // in progress
         snap = snapshot as firebase.storage.UploadTaskSnapshot;
     },
     (error) => {
         // fail
         console.log(error);
     },
     () => {
         // success
        //  console.log('in complete url' + snap.downloadURL);
        //  this.uploadedfile = snap.downloadURL;
        snap.ref.getDownloadURL().then(url => {
          console.log('complete url ' + url);
          this.uploadedfileimage = url;
        });

     });
}

}