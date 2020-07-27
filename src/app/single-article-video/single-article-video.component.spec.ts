import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {SingleArticleVideoComponent, SinglePopup} from './single-article-video.component';
import {NavModule} from "../nav/nav.module";
import {FooterModule} from "../footer/footer.module";
import {PollsComponent} from "../polls/polls.component";
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {AdBannerComponent} from "../dynamic/ad-banner.component";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule, MatFormFieldModule, MatRadioModule} from "@angular/material";
import {ArticleService} from "../article.service";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {AdService} from "../dynamic/ad.service";
import {UserServiceService} from "../user-service.service";
import {BrowserModule, By} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DebugElement} from "@angular/core";
describe('SingleArticleVideoComponent', () => {
    let originalTimeout;
  let debugTest: DebugElement[];
  let el: HTMLElement;
  let component: SingleArticleVideoComponent;
  let fixture: ComponentFixture<SingleArticleVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleVideoComponent,
          // PollsComponent,
          // AdBannerComponent
      ],
        // imports: [
        //     RouterTestingModule,
        //     NavModule,
        // FooterModule,
        //     VgCoreModule,
        //     VgControlsModule,
        //     VgOverlayPlayModule,
        //     VgBufferingModule,
        // FormsModule,
        // ReactiveFormsModule,
        // MatFormFieldModule,
        // MatRadioModule,
        // MatDialogModule,
        //     HttpModule,
        //     HttpClientModule,
        //     BrowserAnimationsModule,
        //     BrowserModule
        // ],
        // providers: [
        //     ArticleService,
        //     AdService,
        //     UserServiceService
        // ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
      // originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      // jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });
    // afterEach(function() {
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    //     fixture = TestBed.createComponent(SingleArticleVideoComponent);
    //     component = fixture.componentInstance;
    //     fixture.detectChanges();
    // });
    // it('views should be more than 100', async(() => {
    //     component.service.get_single_video('emcure-csi-tv-dr-pk-dep-ACE-inhibitor-or-ARNI-what-should-be-used-in-heart-failure-with-reduced-ejection-fraction','');
    //     expect(component.anchor).toEqual('before');
    //     expect(component.anchor).toEqual('after');
    // }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
