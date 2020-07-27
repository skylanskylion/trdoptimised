import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {
    audio_list: object[] = [];
    event:any;
    category:any;
    new_event: any;
  constructor(private service: UserServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params=>{
          this.event = params['event'];
          console.log('event name in podcast event', this.event);
      });
     this.audiofiles(this.event);

      if (this.event == 'wccicc-2017') {
          this.new_event = 'WCCICC 2017';
      }

      if (this.event == 'csikochi-2016') {
          this.new_event = 'CSI NIC 2016';
      }

      if (this.event == 'wccpci-2016') {
          this.new_event = 'WCCPCI 2016';
      }

      if (this.event == 'c3') {
          this.new_event = 'c3 2016';
      }

      if (this.event == 'apvic') {
          this.new_event = 'APVIC VIII';
      }

      if (this.event == 'csinic-2016') {
          this.new_event = 'CSINIC 2016';
      }

      if (this.event == 'ihj-2015') {
          this.new_event = 'IHJ 2015';
      }

      if (this.event == 'cardiac-prevent-2015') {
          this.new_event = 'Cardiac Prevent 2015';
      }

      if (this.event == 'wccpci-2015') {
          this.new_event = 'WCCPCI 2015';
      }

      if (this.event == 'csicon-2014') {
          this.new_event = 'CSICON 2014';
      }

      if (this.event == 'wcchd-2015') {
          this.new_event = 'WCCHD 2015';
      }

      if (this.event == 'ias-2014') {
          this.new_event = 'IAS 2014';
      }
      if (this.event == 'stemi-india-lucknow-2018') {
          this.new_event = 'STEMI India 2018';
      }

      if (this.event == 'aicog-2018') {
          this.new_event = 'Emcure AICOG tv';
      }

      if (this.event == 'wcce-2017') {
          this.new_event = 'Gen works WCCE 2017 tv';
      }
      if (this.event == 'csi-2017') {
          this.new_event = 'Emcure CSI tv';
      }
      if(this.event == 'rssdi-ahmedabad-2018'){
          this.new_event = 'Wockhardt RSSDI tv';
      }
      if(this.event == 'dr-ulhas-pandurangi-sixth-live-cardiac-electrophysiology-workshop-madras-medical-mission-2018'){
          this.new_event = '6th Live Cardiac Electrophysiology Workshop, Madras Medical Mission';
      }
      if(this.event == 'dr-ulhas-pandurangi-fifteenth-annual-electrocardiology-course-basics-and-beyond-madras-medical-mission-2018') {
          this.new_event = '15th Annual ECG Course, Madras Medical Mission';
      }
  }

   audiofiles(event)
   {
     this.service.podcast_audio_files(event).subscribe(
         data=>{
             console.log('data',data);
           if(data['success']){
               this.audio_list = data['data'];
           }
           console.log('audio files data',this.audio_list);
         }
     );
   }
    createRange(number) {
        var items: number[] = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    }


}
