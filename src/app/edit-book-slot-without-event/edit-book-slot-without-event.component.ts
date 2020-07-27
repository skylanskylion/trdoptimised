import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {DataService} from "../data.service";
import * as firebase from 'firebase';
import {Fileup} from "../fileup";
import {Router, ActivatedRoute} from "@angular/router";
import {Details} from "../Details";
import {Meta, Title} from "@angular/platform-browser";


@Component({
  selector: 'app-edit-book-slot-without-event',
  templateUrl: './edit-book-slot-without-event.component.html',
  styleUrls: ['./edit-book-slot-without-event.component.css']
})
export class EditBookSlotWithoutEventComponent implements OnInit {
  model: any = {};
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
    constructor(private titleservice: Title, private meta: Meta, private userService: UserServiceService, private dataService: DataService, private route: ActivatedRoute) {
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
                  this.titleservice.setTitle('Torrent RSSDI tv | Jaipur 2019 | TheRightDoctors');
    this.meta.updateTag({name: 'description', content:  'Torrent RSSDI tv Jaipur 2019 TheRightDoctors.com'});
    this.meta.updateTag({name: 'keywords', content: 'therightdoctors, RSSDI, Torrent RSSDI tv, rssdi jaipur 2019 TheRightDoctors'
    });

    this.meta.updateTag({
      property: 'vr:canonical',
      content: 'https://therightdoctors.com/edit-rssdi-jaipur-2019-slot-booking'+id});
    this.meta.updateTag({property: 'og:title', content: 'Torrent RSSDI tv Jaipur 2019 TheRightDoctors.com'});
    this.meta.updateTag({property: 'og:description', content: 'Torrent RSSDI tv Jaipur 2019 TheRightDoctors.com'});
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://therightdoctors.com/edit-rssdi-jaipur-2019-slot-booking'+id
    });
    this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Dr-Prakash-Kesawani.png'});
    this.meta.updateTag({property: 'og:image:secure_url', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Dr-Prakash-Kesawani.png'});

    this.meta.updateTag({name: 'twitter:title', content: 'Torrent RSSDI tv Jaipur 2019 TheRightDoctors.com'});
    this.meta.updateTag({name: 'twitter:description', content: 'Torrent RSSDI tv Jaipur 2019 TheRightDoctors.com'});
    /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
    this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Dr-Prakash-Kesawani.png'});
    this.meta.updateTag({
      name: 'twitter:player',
      content: 'https://therightdoctors.com/edit-rssdi-jaipur-2019-slot-booking'+id});
    this.meta.updateTag({name: 'twitter:player:stream', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Dr-Prakash-Kesawani.png'});
  
              },
              error => {
                  console.log(error);
              });
  }

  register() {
    console.log('in register');
    // this.alertService.success('Registration successful', false);
    this.loading = true;
      this.model.presentation = this.uploadedfile1;
      this.model.image = this.uploadedfileimage;
    console.log('input model ' + this.model);
    this.userService.update_slot_without_event(this.model, this.id)
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
