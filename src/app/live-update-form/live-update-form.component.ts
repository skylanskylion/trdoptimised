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
import { MatDialogConfig, MatDialog } from '@angular/material';
import { LoginLiveUpdateDashboardComponent } from '../login-live-update-dashboard/login-live-update-dashboard.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-live-update-form',
  templateUrl: './live-update-form.component.html',
  styleUrls: ['./live-update-form.component.css']
})

export class LiveUpdateFormComponent implements OnInit {
    model: any = {};
    loading = false;
    sumodel: any = {};
    aorv ;
    uploadedfile : any;
    uploadedfile1: any;
    submitted = false;
    selectedFiles: FileList;
    currentFileUpload: Fileup;
    temp: any;
    is_schedule : any ; 
    progress: { percentage: string } = {percentage: 'fg'};
    live_details: Live_Details = new Live_Details();
    // let dateFormat = require('dateformat');
    public now: Date = new Date();
    is_uploaded: any = 'not';
    //dateFormat(now, "mmmm dS, yyyy, h:MM:ss TT");
    constructor(private router:Router, private userService: UserServiceService,private route : ActivatedRoute , private dataService: DataService, private customerService: FirebaseServiceService) {
    console.log(formatDate(this.now, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530'))
    
   
    }

  ngOnInit() {
    //   if(!this.route.snapshot.paramMap.get('id')){
    //       alert("Not logged in")
    //       this.router.navigate(['/login-live-updates'] )
    //   }
      if(!(JSON.parse(localStorage.getItem('currentUser')))){
          alert("Please Log In ")
          this.router.navigate(['/login-live-updates'])
      }

    // if(!(JSON.parse(localStorage.getItem('currentUser')))){
    //     this.router.navigate(['/login-live-update-dashboard'])
    //   }
  }
//    }

    newCustomer(): void {
        this.submitted = false;
        this.live_details = new Live_Details();
    }

    save() {
        this.live_details.f_image_url = this.uploadedfile;
        this.live_details.f_date = formatDate(this.now, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+0530');
        //this.live_details.f_date = this.now.getDate()+'-'+this.now.getMonth()+'-'+this.now.getFullYear();
        console.log(this.live_details);
       
        
        if(this.live_details.f_image_url==undefined){
                    this.live_details.f_image_url='';
                // alert(this.live_details.f_image_url)
                }
              
              this.customerService.createCustomer(this.live_details);
                    this.live_details = new Live_Details();
                 
             
    }
    save_schedule() {
        this.live_details.f_image_url = this.uploadedfile;
       this.live_details.f_date = formatDate(this.live_details.f_date, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+0530');
        //this.live_details.f_date = this.now.getDate()+'-'+this.now.getMonth()+'-'+this.now.getFullYear();
        console.log(this.live_details);
        
        if(this.live_details.f_image_url==undefined){
                    this.live_details.f_image_url='';
                // alert(this.live_details.f_image_url)
                }
            //   this.customerService.createCustomer(this.live_details);
            //         this.live_details = new Live_Details();
            this.userService.send_live_updates_to_queue(this.live_details).subscribe(
                data => {
                  if (data['success']) {
                    // console.log(data1);
                    alert('Details Updates Successfully');
                  }
                });
             
    }
    onSchedule(){
        this.submitted = true;
        this.save_schedule();
         (<HTMLFormElement>document.getElementById("form2")).reset();
        window.location.reload();
        this.uploadedfile='';
    }

    onSubmit() {
        this.submitted = true;
         this.userService.sendNotification(this.live_details); 
        this.save();
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
                 this.is_uploaded = 'loading';
                 snap = snapshot as firebase.storage.UploadTaskSnapshot;
             },
             (error) => {
                 // fail
                 console.log(error);
             },
             () => {
                 // success
                this.is_uploaded = 'success';
                 snap.ref.getDownloadURL().then(downloadURL=>{console.log('File available at', downloadURL);
                 this.uploadedfile=downloadURL;});

                 /*console.log('in complete url' + snap.downloadURL);
                 this.uploadedfile = snap.downloadURL;*/


             });
    }
}
