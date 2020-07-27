import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {DataService} from "../data.service";
import * as firebase from 'firebase';
import {Fileup} from "../fileup";
import {Router, ActivatedRoute} from "@angular/router";
import {Details} from "../Details";
import {Meta, Title} from "@angular/platform-browser";
import * as moment from 'moment';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})
export class BookSlotComponent implements OnInit {
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
    maxDate = new Date(2019, 10, 9);

    times: string[] = ['8:00-8:15','8:15-8:30','8:30-8:45','8:45-9:00','9:00-9:15','9:15-9:30' ,'9:30-9:45' ,'9:45-10:00','10:00-10:15','10:15-10:30','10:30-10:45','10:45-11:00','11:00-11:15','11:15-11:30','11:30-11:45','11:45-12:00','12:00-12:15','12:00-12:30','12:30-12:45','12:45-13:00','14:00-14:15','14:15-14:30','14:30-14:45','14:45-15:00','15:00-15:15','15:15-15:30','15:30-15:45','15:45-16:00','16:00-16:15','16:15-16:30','16:30-16:45','16:45-17:00','17:00-17:15','17:15-17:30','17:30-17:45','17:45-18:00','18:00-18:15','18:15-18:30','18:30-18:45','18:45-19:00','19:00-19:15','19:15-19:30','19:30-19:45','19:45-20:00'];

  timesbooked: string[] = ['8:00-8:15','8:15-8:30','8:30-8:45','8:45-9:00','9:00-9:15','9:15-9:30' ,'9:30-9:45' ,'9:45-10:00','10:00-10:15','10:15-10:30','10:30-10:45','10:45-11:00','11:00-11:15','11:15-11:30','11:30-11:45','11:45-12:00','12:00-12:15','12:00-12:30','12:30-12:45','12:45-13:00','14:00-14:15','14:15-14:30','14:30-14:45','14:45-15:00','15:00-15:15','15:15-15:30','15:30-15:45','15:45-16:00','16:00-16:15','16:15-16:30','16:30-16:45','16:45-17:00','17:00-17:15','17:15-17:30','17:30-17:45','17:45-18:00','18:00-18:15','18:15-18:30','18:30-18:45','18:45-19:00','19:00-19:15','19:15-19:30','19:30-19:45','19:45-20:00'];

    constructor(private titleservice: Title, private meta: Meta, private userService: UserServiceService, private dataService: DataService, private route: ActivatedRoute) {
    }

    onDaychange(day){
      let a = moment(day).format('DD-MM-YYYY');
      let event = 'rssdi-jaipur-2019';
      this.userService.rssdi_solts(a, event).subscribe(data =>{
        console.log('data details'+ data);
        console.log(data['data']);
        const arr: Array<string> = [];
        Array.from(data['data'], x => arr.push(x['s_time']));
        console.log('database slots array');
        console.log(arr);
        // not booked slots
        this.times = this.times.filter(value => !arr.includes(value));
        // already booked slots
        this.timesbooked = this.timesbooked.filter(value => arr.includes(value));
        // this.disableSelect = false;
        console.log('booked slots ' + this.timesbooked);
        console.log('not booked slots ' + this.times);
      //  this.groupname = 'Already Booked Slots';
      }, error2 => console.log(error2)
    );

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
    this.meta.updateTag({name: 'description', content:  'Book your Studio time at Torrent RSSDI tv, Jaipur Produced by Digital Knowledge Partner'});
    this.meta.updateTag({name: 'keywords', content: 'therightdoctors, RSSDI, Torrent RSSDI tv, rssdi jaipur 2019 TheRightDoctors'
    });

    this.meta.updateTag({
      property: 'vr:canonical',
      content: 'https://therightdoctors.com/edit-rssdi-jaipur-2019-slot-booking'+id});
      this.meta.updateTag({property: 'og:title', content: 'Book your Studio time at Torrent RSSDI tv, Jaipur'});
      this.meta.updateTag({property: 'og:description', content: 'Digital Knowledge Partner'});
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://therightdoctors.com/edit-rssdi-jaipur-2019-slot-booking'+id
    });
    this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Prakash-Keswani/Prakash-Keswani-large.jpg'});
    this.meta.updateTag({property: 'og:image:secure_url', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Prakash-Keswani/Prakash-Keswani-large.jpg'});

    this.meta.updateTag({name: 'twitter:title', content: 'Book your Studio time at Torrent RSSDI tv, Jaipur'});
    this.meta.updateTag({name: 'twitter:description', content: 'Digital Knowledge Partner'});
    /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
    this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Prakash-Keswani/Prakash-Keswani-large.jpg'});
    this.meta.updateTag({
      name: 'twitter:player',
      content: 'https://therightdoctors.com/edit-rssdi-jaipur-2019-slot-booking'+id});
    this.meta.updateTag({name: 'twitter:player:stream', content: 'https://storage.googleapis.com/web-assets/RSSDI_2019/Prakash-Keswani/Prakash-Keswani-large.jpg'});
  
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
      this.model.s_date = moment(this.model.s_date).format('DD-MM-YYYY');
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
