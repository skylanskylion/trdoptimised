import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {DataService} from "../data.service";
import * as firebase from 'firebase';
import {Fileup} from "../fileup";
import {Router, ActivatedRoute} from "@angular/router";
import {Details} from "../Details";

@Component({
  selector: 'app-book-slot',
  templateUrl: './edit-esicon-slot-booking.component.html',
  styleUrls: ['./edit-esicon-slot-booking.component.css']
})
export class EditEsiconSlotBookingComponent implements OnInit {
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
    id: any;
  details: any;
    minDate = new Date(2019, 10, 21);
    maxDate = new Date(2019, 10, 24);
    constructor(private userService: UserServiceService, private dataService: DataService, private route: ActivatedRoute) {
    }

  ngOnInit() {
      this.route.params.subscribe(params =>{
        this.id = params['id'];
        this.get_details(this.id);
      })
  }

  get_details(id) {
      this.userService.slot_details(id)
          .subscribe(
              data => {
                console.log(data);
                  this.details = data['data'][0];
                  console.log(this.details['first_name_c']);
                  this.model = data['data'][0];
              },
              error => {
                  console.log(error);
              });
  }

  register() {
    console.log('in register');
    // this.alertService.success('Registration successful', false);
    this.loading = true;
      this.model.presentation = this.uploadedfile;
    console.log('input model ' + this.model);
    this.userService.update_slot(this.model, this.id)
      .subscribe(
        data => {
          console.log(data);
          //  this.alertService.success('Registration successful', true);

            alert('Details updated Successfully');
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
