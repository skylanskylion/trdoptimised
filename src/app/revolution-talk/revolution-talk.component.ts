import {Component, OnInit} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-revolution-talk',
  templateUrl: './revolution-talk.component.html',
  styleUrls: ['./revolution-talk.component.css']
})
export class RevolutionTalkComponent implements OnInit {
  revolution: any;

  constructor(private service: CatagoryServiceService, private titleservice: Title, private meta: Meta) {
  }

  ngOnInit() {
      this.titleservice.setTitle('Revolution Talk | TheRightDoctors');

      this.meta.updateTag({name: 'description', content:  'TheRightDoctors.com will be setting up a High Definition Multi Cam TV studio at ' +
              'Panel Discussions, Debates and Key Take Aways. Your wisdom will be transmitted globally across multiple digital and social media channels including' +
              'Facebook, Whatsapp, Twitter and Youtube.'});
      this.meta.updateTag({name: 'keywords', content: 'therightdoctors, revolution talk, Indian heart journals TheRightDoctors '
      });
    this.get_catagory('revolution-talk');
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  get_catagory(slug) {
    console.log('get catagory calling');
    this.service.Revolution_Talk().subscribe(
      data => {
        this.revolution = data['data'];
        console.log('I CANT SEE DATA HERE in single componenet : ', this.revolution);
      }
    );
  }
}
