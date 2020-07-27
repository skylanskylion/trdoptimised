
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {
    audio_list: object[] = [];
    event:any;
    audio_list1: object[] = [];

    category:any;
    new_event: any;
  constructor(private service: UserServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.audiofiles1();

      this.route.params.subscribe(params=>{
          this.event = params['event'];
        //   alert(this.event);
          if(this.event) {
            console.log("I have something");
          } else {
            console.log("Nothing here...");
            this.event = "";
          }
        //   if(this.event == ""){
        //       this.event = 'rssdi-jaipur-2019';
        //   }
      });
      if(this.event != ""){
     this.audiofiles(this.event);
     } else
     {
        //  this.audiofiles2(this.event);
         console.log("but");
     }

      if (this.event == 'rssdi-jaipur-2019') {
          this.new_event = 'RSSDI JAIPUR 2019';
      }

      if (this.event == 'wccmm-mumbai-2019') {
          this.new_event = 'WCCMM MUMBAI 2019';
      }

      if (this.event == 'rssdi-ahmedabad-2018') {
          this.new_event = 'RSSDI AHEMEDABAD 2018';
      }

      if (this.event == 'dr-ulhas-pandurangi-fifteenth-annual-electrocardiology-course-basics-and-beyond-madras-medical-mission-2018') {
          this.new_event = 'ELECTROCARDIOLOGY COURSE';
      }

      if (this.event == 'dr-ulhas-pandurangi-sixth-live-cardiac-electrophysiology-workshop-madras-medical-mission-2018') {
          this.new_event = 'CARDIAC ELECTROPHYSIOLOGY';
      }

      if (this.event == 'aicog-2018') {
          this.new_event = 'AICOG 2018';
      }

      if (this.event == 'stemi-india-lucknow-2018') {
          this.new_event = 'STEMI INDIA LUCKNOW 2018';
      }

      if (this.event == 'wcce-2017') {
          this.new_event = 'WCCE 2017';
      }

      if (this.event == 'csi-2017') {
          this.new_event = 'CSI 2017';
      }

      if (this.event == 'wccicc-2017') {
          this.new_event = 'WCCICC 2017';
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
   audiofiles1()
   {
     this.service.podcast_audio_files_cor().subscribe(
         data=>{
             console.log('data',data);
           if(data['success']){
               this.audio_list1 = data['data'];
           }
           console.log('audio files data for cornonavirus',this.audio_list1);
         }
     );
   }
//    audiofiles2(event)
//    {
//      this.service.podcast_audio_files2(event).subscribe(
//          data=>{
//              console.log('data',data);
//            if(data['success']){
//                this.audio_list = data['data'];
//            }
//            console.log('audio files data2',this.audio_list);
//          }
//      );
//    }
    createRange(number) {
        var items: number[] = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    }


}
