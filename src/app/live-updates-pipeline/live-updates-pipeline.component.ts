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
  selector: 'app-live-updates-pipeline',
  templateUrl: './live-updates-pipeline.component.html',
  styleUrls: ['./live-updates-pipeline.component.css']
})
export class LiveUpdatesPipelineComponent implements OnInit {
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
  live_details: Live_Details = new Live_Details();
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

  save() {
      this.live_details.f_image_url = this.uploadedfile;
      this.live_details.f_date = formatDate(this.now, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
      //this.live_details.f_date = this.now.getDate()+'-'+this.now.getMonth()+'-'+this.now.getFullYear();
      console.log(this.live_details);
      
      if(this.live_details.f_image_url==undefined){
                  this.live_details.f_image_url='';
              // alert(this.live_details.f_image_url)
              }

      //Service Call 
      //console.log(this.live_details)
      this.userService.send_live_updates_to_queue(this.live_details).subscribe(
        data => {
          if (data['success']) {
            // console.log(data1);
            alert('Details Updates Successfully');
          }
        });
      
                  // this.customerService.IagescreateCustomer(this.live_details);
        this.live_details = new Live_Details();
               
           
  }
  onSchedule(){
    console.log("GOTCHA")
    this.userService.call_scheduler().subscribe();
    alert("Scheduled for every 1 Hour"); 
    this.live_details = new Live_Details();
    this.uploadedfile = '';
    window.location.reload(); 
  }

  onSubmit() {
      this.submitted = true;
      this.save();
      this.uploadedfile='';
      (<HTMLFormElement>document.getElementById("form2")).reset();
      window.location.reload();
      
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


