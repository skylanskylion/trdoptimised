import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-journels-all',
  templateUrl: './journels-all.component.html',
  styleUrls: ['./journels-all.component.css']
})
export class JournelsAllComponent implements OnInit {
  private feedUrl: string = 'https://www.nejm.org/trends/viewed/last1Week?viewType=Rss';
  private fu : string = 'https://jamanetwork.com/rss/site_3/67.xml';
  private fu3 : string = 'https://www.thelancet.com/rssfeed/landia_online.xml?code=lancet-site';
  private fu4 : string = 'https://www.heartfailure.theclinics.com/current.rss';
  private fu5 : string = 'https://www.mayoclinicproceedings.org/current.rss';
  private fu6 : string = 'http://annals.org/rss/site_25/onlineFirst_90.xml';
  private fu7 : string = 'http://feeds.bmj.com/bmj/podcasts';
  private fu8 : string = 'https://jamanetwork.com/rss/site_15/71.xml';
  private fu9 : string = 'https://openheart.bmj.com/rss/current.xml';
  private fu10 : string = 'https://www.heartrhythmcasereports.com/current.rss';
//    private fu11 : string = 'https://www.ahajournals.org/action/showFeed?type=etoc&feed=rss&jc=circ';
  feeds: any;
  feed: any;
  feed3: any;
  feed4: any;
  feed5: any;
  feed6: any;
  feed7: any;
  feed8: any;
  feed9: any;
  feed10: any;
  //  feed11: any;
  constructor(private feedService: UserServiceService) { }

  ngOnInit() {
    this.refreshFeed();
    this.anfeed();
    this.anfeed3();
    this.anfeed4();
    this.anfeed5();
    this.anfeed6();
    this.anfeed7();
    this.anfeed8();
    this.anfeed9();
    this.anfeed10();
    //  this.anfeed11();
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
    //anfeed11() {
    //    this.feedService.getrss(this.fu11)
    //        .subscribe(
    //            feeda => { this.feed11 = feeda.items;
    //                console.log(this.feed11);
    //            },
    //            error => console.log(error));
    //}
    anfeed10() {
        this.feedService.getrss(this.fu10)
            .subscribe(
                feeda => { this.feed10 = feeda.items;
                    console.log(this.feed10);
                },
                error => console.log(error));
    }
    anfeed9() {
        this.feedService.getrss(this.fu9)
            .subscribe(
                feeda => { this.feed9 = feeda.items;
                    console.log(this.feed9);
                },
                error => console.log(error));
    }
    anfeed8() {
        this.feedService.getrss(this.fu8)
            .subscribe(
                feeda => { this.feed8 = feeda.items;
                    console.log(this.feed8);
                },
                error => console.log(error));
    }
    anfeed7() {
        this.feedService.getrss(this.fu7)
            .subscribe(
                feeda => { this.feed7 = feeda.items;
                    console.log(this.feed7);
                },
                error => console.log(error));
    }
  anfeed6() {
    this.feedService.getrss(this.fu6)
        .subscribe(
            feeda => { this.feed6 = feeda.items;
              console.log(this.feed6);
            },

            error => console.log(error));
  }

  anfeed5() {
    this.feedService.getrss(this.fu5)
        .subscribe(
            feed => { this.feed5 = feed.items;
              console.log(this.feed5);
            },

            error => console.log(error));
  }

  anfeed4() {
    this.feedService.getrss(this.fu4)
        .subscribe(
            feed => {
              console.log(feed);
              this.feed4 = feed.items;
              console.log(this.feed4);
            },

            error => console.log(error));
  }

  anfeed3() {
    this.feedService.getrss(this.fu3)
        .subscribe(
            feed => { this.feed3 = feed.items;
              console.log(this.feed3);
            },

            error => console.log(error));
  }

  anfeed() {
    // this.feeds.length = 0;
    // Adds 1s of delay to provide user's feedback.
    this.feedService.getrss(this.fu)
        .subscribe(
            feed => { this.feed = feed.items;
              console.log(this.feed);
            },

            error => console.log(error));
  }
  refreshFeed() {
    // this.feeds.length = 0;
    // Adds 1s of delay to provide user's feedback.
    this.feedService.getrss(this.feedUrl)
        .subscribe(
            feed => { this.feeds = feed.items;
              console.log(this.feeds);
            },

            error => console.log(error));
  }


}
