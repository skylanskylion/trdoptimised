// truncate.ts
import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {Http, Response} from "@angular/http";
import * as moment from 'moment';


/*@Pipe({
  name: 'Truncate', pure: false
})

export class Truncate implements PipeTransform {
  transform(value: string, args: string[]): string {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 50;
    let trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
  transform(input: number) {
    return Math.floor(input);
  }
}*/


@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.component.html',
  styleUrls:['./event-home.component.css']
})
export class EventHomeComponent implements OnInit {
  catagory: any;
  conv: object[] = [];
  conv1: object[] = [];
  intr: object[] = [];
  spk: object[] = [];
  more: object[] = [];
  high: object[] = [];
  intr_half: any;
  isvalid: any;
  articles: any;
  event: any;
  event_slug: any;
  more_len: any;
  blog_len:any;
  conv_len: any;
  spk_len: any;
  word: any;
 
  url : any;
  blogdata : any;
  cat = [];

  constructor(private route: ActivatedRoute,private http: Http, private service: CatagoryServiceService, private titleservice: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.BlogData();
    this.route.params.subscribe(params => {
      this.titleservice.setTitle(params['event'] + ' | TheRightDoctors');

        this.meta.updateTag({name: 'description', content:  'TheRightDoctors.com will be setting up a High Definition Multi Cam TV studio at '+ params['event'] +'and record Interviews, ' +
                'Panel Discussions, Debates and Key Take Aways. Your wisdom will be transmitted globally across multiple digital and social media channels including' +
                'Facebook, Whatsapp, Twitter and Youtube.'});
        this.meta.updateTag({name: 'keywords', content: 'therightdoctors, stemi india 2018, emcure aicog tv 2018, bhubaneswar, wcce jaipur 2017, csicon kolkata 2017, wccicc mumbai 2017,' +
                ' csicon kochi 2017, wccpci mount abu 2018, c3 florida 2018, apvic new delhi 2016, csinic hyderabad 2016, revolution talk, ihj, csi cardiac prevent new delhi 2015 wcchd mumbai, ias hyderaba 2014  ' +
                'TheRightDoctors '
                });
//alert(params['event']);
this.last_word(params['event']);
        this.event_home(params['event']);
      this.event = params['event'];
      if (this.event == 'wccpci-2015') {
        //this.event = 'wccpci-2015' ;
        this.event_slug = 'wccpci-2015';
        this.trending_presentations(this.event);
      }
      if (this.event == 'wccpci-2016') {
        this.trending_presentations(this.event);
        this.event_slug = 'wccpci-2016';
      }
      if(this.event == 'dr-ulhas-pandurangi-sixth-live-cardiac-electrophysiology-workshop-madras-medical-mission-2018') {
        this.trending_presentations(this.event);
        this.event_slug = 'dr-ulhas-pandurangi-sixth-live-cardiac-electrophysiology-workshop-madras-medical-mission-2018';
      }
      if(this.event == 'dr-ulhas-pandurangi-fifteenth-annual-electrocardiology-course-basics-and-beyond-madras-medical-mission-2018') {
        this.trending_presentations(this.event);
        this.event_slug = 'dr-ulhas-pandurangi-fifteenth-annual-electrocardiology-course-basics-and-beyond-madras-medical-mission-2018';
      }

      //this.event_isvalid(params['event']);
    });
  }
  BlogData() {
        
    this.url = 'https://therightdoctors.com/api/beta/article?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&category=cme';
    console.log('set articles calling');
    this.http.get(this.url)
        .map((res: Response) => res.json()).subscribe(data => {
          
          this.blogdata = data['data'];
          console.log('this is amusing',this.blogdata.length);
          
        })
  }

  createRangeImages(number){

    var items: number[] = [];
    for (var i = 0; i <= number - 1; i++) {
      items.push(i);
    }
    return items;
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 0; i <= number - 1; i++) {
      items.push(i);
    }
    return items;
  }

  Range(number) {
    var items: number[] = [];
    for (var i = 0; i <= number - 1; i++) {
      items.push(i);
    }
    return items;
  }

  event_home(name) {
    console.log('get event home calling');
    console.log(name);
    this.isvalid = name;
    this.service.event_home(name).subscribe(
      data => {
        this.catagory = data['data'];
        for (let i = 0; i < this.catagory.length; i++) {
          console.log('in for loop');
          console.log(i);
          switch (this.catagory[i]['category']) {
            case 'the-interview':
              console.log('in case intr');
              this.intr.push(this.catagory[i]);
              break;
            case 'in-conversation':
              console.log('in case conv');
              this.conv.push(this.catagory[i]);
              break;
            case 'one-more-thing':
              console.log('in case one more');
              this.more.push(this.catagory[i]);
              break;
            case 'the-speakers':
              console.log('in case speakers');
              this.spk.push(this.catagory[i]);
              break;
            case 'highlights':
              console.log('in case high');
              this.high.push(this.catagory[i]);
              break;
            default:
              console.log('not any filter found');
          }
        }
        console.log(this.intr);
        this.intr_half = Math.round(this.intr.length / 2);
        console.log(this.more);
        this.more_len = Math.round(this.more.length/2);
        this.blog_len = Math.round(this.blogdata.length/2);
        this.conv_len = Math.round(this.conv.length/2);
        this.spk_len = Math.round(this.spk.length/2);
        console.log('speker' + this.spk);
        console.log('I CANT SEE DATA HERE in single componenet : ', this.catagory);
        console.log('dfdsdsdsd'+this.conv.length);
      }
    );
  }

  last_word(event){
    this.service.event_last_word(event).subscribe(
      data1 => {

        console.log('word data data', data1['data']);
        this.word = data1['data'];
   //     alert("DATA"+JSON.stringify(data1))  
    //  alert("WORD DATA"+this.word)  
      }
    );
  }

  trending_presentations(event) {
    this.service.trending_presentations(event).subscribe(
      data1 => {
        this.articles = data1['data'];
        console.log('Data data data', data1['data']);
        for (var i = 0; i < data1['data'].length; i++) {
          this.conv1.push(data1['data'][i]);
        }
        console.log('Conv printing here ', this.conv1);
      }
    );

  }
}
