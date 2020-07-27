import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {Fileup} from "../fileup";
import {DataService} from "../data.service";
//import * as firebase from 'firebase';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-soapcon-slot-booking',
  templateUrl: './soapcon-slot-booking.component.html',
  styleUrls: ['./soapcon-slot-booking.component.css']
})
export class SoapconSlotBookingComponent implements OnInit {
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
    minDate = new Date(2019, 3, 27);
  maxDate = new Date(2019, 3, 28);
    constructor(private userService: UserServiceService, private dataService: DataService,private titleservice: Title, private meta: Meta) {
    
    }

    ngOnInit() {
      this.titleservice.setTitle('SOAPCCON tv | Hyderabad 2019 | TheRightDoctors');
      this.meta.updateTag({name: 'description', content:  'SOAPCCON tv  Hyderabad 2019 TheRightDoctors.com'});
      this.meta.updateTag({name: 'keywords', content: 'therightdoctors, SOAPCCON, soapccon tv, soapccon hyderabad 2019 TheRightDoctors'
      });
  
      this.meta.updateTag({
        property: 'vr:canonical',
        content: 'https://therightdoctors.com/soapcon-hyderabad-2019-slot-booking'});
      this.meta.updateTag({property: 'og:title', content: 'SOAPCCON tv  Hyderabad 2019 TheRightDoctors.com'});
      this.meta.updateTag({property: 'og:description', content: 'SOAPCCON tv  Hyderabad 2019 TheRightDoctors.com'});
      this.meta.updateTag({
        property: 'og:url',
        content: 'https://therightdoctors.com/soapcon-hyderabad-2019-slot-booking'
      });
      this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/wccmm-2019/wccmm-2019.jpg'});
      this.meta.updateTag({property: 'og:image:secure_url', content: 'https://storage.googleapis.com/web-assets/wccmm-2019/wccmm-2019.jpg'});
  
      this.meta.updateTag({name: 'twitter:title', content: 'SOAPCCON tv  Hyderabad 2019 TheRightDoctors.com'});
      this.meta.updateTag({name: 'twitter:description', content: 'SOAPCCON tv  Hyderabad 2019 TheRightDoctors.com'});
      /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
      this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/wccmm-2019/wccmm-2019.jpg'});
      this.meta.updateTag({
        name: 'twitter:player',
        content: 'https://therightdoctors.com/soapcon-hyderabad-2019-slot-booking'});
      this.meta.updateTag({name: 'twitter:player:stream', content: 'https://storage.googleapis.com/web-assets/wccmm-2019/wccmm-2019.jpg'});
    }
  
    register() {
      console.log('in register');
      // this.alertService.success('Registration successful', false);
      this.loading = true;
      this.model.event = 'soapccon-hyderabad-2019';
        this.model.presentation = this.uploadedfile;
      console.log('input model ' + this.model);
      this.userService.create(this.model)
        .subscribe(
          data => {
            console.log(data);
            //  this.alertService.success('Registration successful', true);
            console.log('return data' + data);
            console.log('return id' + data['id']);
            alert('Your detailed saved successfully');
          },
          error => {
            console.log(error);
            // this.alertService.error(error);
            this.loading = false;
          });
    }
  
      /*selectFile(event) {
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
                   console.log('in complete url' + snap.downloadURL);
                   this.uploadedfile = snap.downloadURL;
  
  
               });
      }*/
  
  }
