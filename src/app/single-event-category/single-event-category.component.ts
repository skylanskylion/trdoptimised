import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../article.service';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-single-event-category',
  templateUrl: './single-event-category.component.html',
  styleUrls: ['./single-event-category.component.css']
})
export class SingleEventCategoryComponent implements OnInit {
  slug: any;
  catagory: string;
  event: any;
  article: any;
  head: any;
  a:any;
  new_event: any;

  constructor(private route: ActivatedRoute, private service: ArticleService,  private titleservice: Title, private meta: Meta) {
  }

  ngOnInit() {
      this.a=1;
    this.route.params.subscribe(params => {
      this.event = params['event'];
      this.catagory = params['category'];
        this.titleservice.setTitle(params['event'] + ' | TheRightDoctors');

        this.meta.updateTag({name: 'description', content:  'TheRightDoctors.com will be setting up a High Definition Multi Cam TV studio at '+ params['event'] +'and record '+ params['category'] +
                'Panel Discussions, Debates and Key Take Aways. Your wisdom will be transmitted globally across multiple digital and social media channels including' +
                'Facebook, Whatsapp, Twitter and Youtube.'});
        this.meta.updateTag({name: 'keywords', content: 'therightdoctors, stemi india 2018, emcure aicog tv 2018, bhubaneswar, wcce jaipur 2017, csicon kolkata 2017, wccicc mumbai 2017,' +
                ' csicon kochi 2017, wccpci mount abu 2018, c3 florida 2018, apvic new delhi 2016, csinic hyderabad 2016, revolution talk, ihj, csi cardiac prevent new delhi 2015 wcchd mumbai, ias hyderaba 2014  ' +
                'TheRightDoctors '
        });
      if (this.catagory == 'the-interview') {
        this.head = 'The Interview';
      }

      if (this.catagory == 'one-more-thing') {
        this.head = 'One More Thing';
      }

      if (this.catagory == 'the-speakers') {
        this.head = 'The Speakers';
      }

        if (this.catagory == 'live-case') {
            this.head = 'Live Cases';
        }

      if (this.catagory == 'in-conversation') {
        this.head = 'In Conversation';
      }

      if (this.catagory == 'highlights') {
        this.head = 'HighLights';
      }

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



        if(this.event == 'rssdi-ahmedabad-2018'){
            this.new_event = 'Wockhardt RSSDI tv';
        }
        if(this.event == 'dr-ulhas-pandurangi-sixth-live-cardiac-electrophysiology-workshop-madras-medical-mission-2018'){
            this.new_event = '6th Live Cardiac Electrophysiology Workshop, Madras Medical Mission';
        }
        if(this.event == 'dr-ulhas-pandurangi-fifteenth-annual-electrocardiology-course-basics-and-beyond-madras-medical-mission-2018') {
            this.new_event = '15th Annual ECG Course, Madras Medical Mission';
        }

    });
    this.get_single_event_category(this.event, this.catagory);
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

    createRangeImages(number) {
        var items: number[] = [];
        for( var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    }
    createRangeImages1(number) {
        var items: number[] = [];
        for( var i = 42; i <= number; i++) {
            items.push(i);
        }
        return items;
    }
    createRangeImages2(number) {
        var items: number[] = [];
        for( var i = 83; i <= number; i++) {
            items.push(i);
        }
        return items;
    }
    createRangeImagescardiac(number){
        var items: number[] = [];
        for( var i = 4936; i <= number; i++) {
            items.push(i);
        }
        return items;
    }
    createRangeImagescsicon1(number) {
        var items: number[] = [];
        for( var i = 9; i <= number; i++) {
            items.push(i);
        }
        return items;
    }

    createRangeImagescsicon2(number){
        var items: number[] = [];
        for( var i = 36; i <= number; i++) {
            items.push(i);
        }
        return items;
    }
    createRangeImagescsicon3(number){
        var items: number[] = [];
        for( var i = 9; i <= number; i++) {
            items.push(i);
        }
        return items;
    }
    createRangeImages3(number) {
        var items: number[] = [];
        for( var i = 83; i <= number; i++) {
            items.push(i);
        }
        return items;
    }

  get_single_event_category(event, category) {
    this.service.get_single_event_category(event, category).subscribe(
      data => {
        this.article = data['data'];
        console.log('I CANT SEE DATA HERE in single-event-category-component : ', this.article);
      }
    );

  }

}
