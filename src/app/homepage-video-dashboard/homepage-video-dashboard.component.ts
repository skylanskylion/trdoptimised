import { Component, OnInit } from '@angular/core';
import {Fileup} from "../fileup";
import {UserServiceService} from "../user-service.service";
import {DataService} from "../data.service";
import * as firebase from 'firebase/app';
import {Live_Details} from "../live_details";
import {FirebaseServiceService} from "../firebase-service.service";
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';
import {formatDate } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';


@Component({
  selector: 'app-homepage-video-dashboard',
  templateUrl: './homepage-video-dashboard.component.html',
  styleUrls: ['./homepage-video-dashboard.component.css']
})
export class HomepageVideoDashboardComponent implements OnInit {
  model: any = {};
  loading = false;
  sumodel: any = {};
  uploadedfile : any;
  uploadedfile1: any;
  submitted = false;
  selectedFiles: FileList;
  currentFileUpload: Fileup;
  temp: any;
  progress: { percentage: string } = {percentage: 'fg'};
  // live_details: Live_Details = new Live_Details();
  video : any = {}; 
  // let dateFormat = require('dateformat');
  public now: Date = new Date();
  //dateFormat(now, "mmmm dS, yyyy, h:MM:ss TT");
  constructor(private userService: UserServiceService, private dataService: DataService, private customerService: FirebaseServiceService) {
  console.log(formatDate(this.now, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530'))
  }

ngOnInit() {
}

  // newCustomer(): void {
  //     this.submitted = false;
  //     this.live_details = new Live_Details();
  // }

  // save() {
  //     this.live_details.f_image_url = this.uploadedfile;
  //     this.live_details.f_date = formatDate(this.now, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  //     //this.live_details.f_date = this.now.getDate()+'-'+this.now.getMonth()+'-'+this.now.getFullYear();
  //     console.log(this.live_details);
      
  //     if(this.live_details.f_image_url==undefined){
  //                 this.live_details.f_image_url='';
  //             // alert(this.live_details.f_image_url)
  //             }
  //                 this.customerService.createMainCustomer(this.live_details);
  //                 this.live_details = new Live_Details();
  // }

  onSubmit() {
      this.submitted = true;
      this.customerService.createVideoCustomer(this.video);
      // this.save();
       (<HTMLFormElement>document.getElementById("form2")).reset();
      window.location.reload();
      this.uploadedfile='';
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
               snap.ref.getDownloadURL().then(downloadURL=>{console.log('File available at', downloadURL);
               this.uploadedfile=downloadURL;});

               /*console.log('in complete url' + snap.downloadURL);
               this.uploadedfile = snap.downloadURL;*/


           });
  }
}

