import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Title, Meta } from '@angular/platform-browser';
import { CatagoryServiceService } from '../catagory-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-eventlast-word',
  templateUrl: './eventlast-word.component.html',
  styleUrls: ['./eventlast-word.component.css']
})
export class EventlastWordComponent implements OnInit {

  yoga: any;
  str: any;
  conv: object[] = [];
  event: any;

  constructor(private CatagoryService: CatagoryServiceService, private titleService: Title, private meta: Meta, private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.titleService.setTitle('Wockhardt RSSDI tv Ahmedabad | The Last Word | TheRighDoctors');
      this.meta.updateTag({name: 'description', content:  'TheRightDoctors.com will be setting up a High Definition Multi Cam TV studio and record Key Take Aways.' +
              ' Your wisdom will be transmitted globally across multiple digital and social media channels including Facebook, Whatsapp, Twitter and Youtube.'});
      this.meta.updateTag({name: 'keywords', content: 'wockhardt rssdi tv, therightdoctors, stemi india 2018, emcure aicog tv 2018, bhubaneswar, wcce jaipur 2017, csicon kolkata 2017, wccicc mumbai 2017,' +
              ' csicon kochi 2017, wccpci mount abu 2018, c3 florida 2018, apvic new delhi 2016, csinic hyderabad 2016, revolution talk, ihj, csi cardiac prevent new delhi 2015 wcchd mumbai, ias hyderaba 2014  ' +
              'TheRightDoctors '
      });
      
      this.route.params.subscribe(params => {
        this.last_word(params['event']);
        
      this.event = params['event'];
      })

  }

  createRange(number) {
      var items: number[] = [];
      for (var i = 1; i <= number; i++) {
          items.push(i);
      }
      return items;
  }

  last_word(event) {
      console.log('get catagory calling');
      this.CatagoryService.event_last_word(event).subscribe(
          data => {

              for (var i = 0; i < data['data'].length; i++) {
                      this.conv.push(data['data'][i]);
                      console.log(this.conv);
                      console.log('Yes I am in');
              }
              console.log('I CANT SEE DATA HERE in single componenet : ', this.conv);
          }
      );
  }

}
