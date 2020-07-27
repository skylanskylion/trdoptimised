import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem }               from './ad-item';
import {throwError as observableThrowError} from "rxjs/index";
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AdService {
    vd: any;
    constructor(private _http: Http, private httpc: HttpClient) {
    }
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come', a: 'dfrgs'}, 'c', 'dfsd', ''),

      /*new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come', a: 'dgdf'}, 'c'),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!', a:'dsfd'}, 'c'),
      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today', a:'afaf'}, 'c'),*/
    ];
  }

    get_next_video(category, event) {
        let string = 'https://therightdoctors.com/api/beta/article?category=the-interview&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
        return this.httpc.get(string);
        }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/