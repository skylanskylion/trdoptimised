import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-journels',
  templateUrl: './journels.component.html',
  styleUrls: ['./journels.component.css']
})
export class JournelsComponent implements OnInit {

    private feedUrl: string = 'https://www.nejm.org/trends/viewed/last1Week?viewType=Rss';
     private fu : string = 'https://jamanetwork.com/rss/site_3/67.xml';
    private fu3 : string = 'https://www.thelancet.com/rssfeed/landia_online.xml?code=lancet-site';
    private fu4 : string = 'https://www.heartfailure.theclinics.com/current.rss';
    private fu5 : string = 'https://www.mayoclinicproceedings.org/current.rss';
    private fu6 : string = 'http://annals.org/rss/site_25/onlineFirst_90.xml';
    feeds: any;
    feed: any;
    feed3: any;
    feed4: any;
    feed5: any;
    feed6: any;

    constructor (
        private feedService: UserServiceService
    ) {}

    ngOnInit() {
        this.refreshFeed();
        this.anfeed();
        this.anfeed3();
        this.anfeed4();
        this.anfeed5();
        this.anfeed6();
    }

    createRange(number) {
        var items: number[] = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
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
