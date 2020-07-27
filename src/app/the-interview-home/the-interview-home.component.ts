import {Component, Input, OnInit} from '@angular/core';
import { UserServiceService } from '../user-service.service'
import {CatagoryServiceService} from '../catagory-service.service';
import {Meta, Title} from "@angular/platform-browser";
@Component({
  selector: 'app-the-interview-home',
  templateUrl: './the-interview-home.component.html',
  styleUrls: ['./the-interview-home.component.css']
})

export class TheInterviewHomeComponent implements OnInit {

  @Input() the_interview: any;

  yoga: any;
  str: any;
  conv: object[] = [];

   wccmm: any;
  constructor(private service: UserServiceService, private CatagoryService: CatagoryServiceService, private titleService: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.titleService.setTitle('COVID-19 Live Updates | TheRightDoctors');
    this.meta.updateTag({name: 'description', content:  'EXCLUSIVE: COVID 19 Treatment Success Story From SMS Medical College, Jaipur, India' + 'Pulmonology experts perspective on Coronavirus, Dr.Ravindra Mehta'+ 'People with Diabetes and Hypertension are more susceptible to COVID-19, Dr. V Mohan' + 'Vitamin C, Hydration, and a healthy diet are key in the fight against coronavirus, Dr.Pradeep Seth' + 'COVID-19: Panic liberates stress hormones leading to HIGH BP, Dr. HK Chopra' + 'COVID 19: Understanding the bugs and breaking some of the myths with Dr. Shashank Joshi' + 'COVID-19 Pandemic: A detailed analysis by leading cardiologists Dr. Ravi Kasliwal and Dr. Hardeep Kaur Grewal'
  + 'COVID-19 Treatment Success Story | Dr. Sudhir Bhandari In Conversation With Dr. Anil Pareek' + 'COVID-19 fatalities may be more than 3 times in Diabetic patients | Dr CM Batra' +'COVID 19: Impact on Pregnancy & Nursing Mothers' + 'The only way to prevent COVID-19 is to flatten the curve of the spread'});
    
     this.meta.updateTag({name: 'keywords', content: 'EXCLUSIVE: COVID 19 Treatment Success Story From SMS Medical College, Jaipur, India' 
    + 'COVID-19 Treatment' + 'Coronavirus' + 'Coronavirus Pregnancy'+ 'Coronavirus heart diseases'+'Coronavirus live updates' + '21 days lockdown'
     });
  this.the_last_word();
    this.service.get_videos_wccmm().subscribe(data1 =>{
      // console.log(data);
      let data = data1.json();
       if(data['success']){
         console.log("TORRENT RSSDI"+data['data']);
         this.wccmm = data['data'];
       }
     })
  }
  the_last_word() {
    console.log('get catagory calling');
    this.CatagoryService.the_last_word_corona().subscribe(
      data => {
        this.str = 'Journal';
        for (var i = 0; i < data['data'].length; i++) {
          if ((data['data'][i]['alt'].search(this.str) == -1)) {
            this.conv.push(data['data'][i]);
            console.log(this.conv);
            console.log('Yes I am in');
          }
        }
        console.log('I CANT SEE DATA HERE in single componenet : ', this.conv);
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

  Range(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

}

