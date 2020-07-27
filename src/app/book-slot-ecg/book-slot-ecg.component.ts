import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {DataService} from "../data.service";
import * as firebase from 'firebase';
import {Fileup} from "../fileup";

@Component({
  selector: 'app-book-slot-ecg',
  templateUrl: './book-slot-ecg.component.html',
  styleUrls: ['./book-slot-ecg.component.css']
})
export class BookSlotEcgComponent implements OnInit {
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
  constructor(private userService: UserServiceService, private dataService: DataService) {
  }

  ngOnInit() {
  }
  register() {
    console.log('in register');
    // this.alertService.success('Registration successful', false);
    this.loading = true;
    this.model.presentation = this.uploadedfile;
    console.log('input model ' + this.model);
    this.userService.create(this.model)
        .subscribe(
            data => {
              console.log(data);
              //  this.alertService.success('Registration successful', true);
              console.log('return data' + data);
              console.log('return id' + data['id']);
              alert('Details Submitted Successfully');
            },
            error => {
              console.log(error);
              // this.alertService.error(error);
              this.loading = false;
            });
  }
  email_sub(){

  }
  selectFile(event) {
    /* let snap;
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
     console.log('in complete url' + snap.downloadURL);
     this.uploadedfile = snap.downloadURL;


     });*/
  }

}
