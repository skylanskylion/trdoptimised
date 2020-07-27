import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewHomeComponent} from './new-home.component';
import {NavModule} from "../nav/nav.module";
import {TopHomeComponent} from "../top-home/top-home.component";
import {TheInterviewHomeComponent} from "../the-interview-home/the-interview-home.component";
import {ConversationHomeComponent} from "../conversation-home/conversation-home.component";
import {OneMoreHomeComponent} from "../one-more-home/one-more-home.component";
import {SpeakerHomeComponent} from "../speaker-home/speaker-home.component";
import {SurgeryHomeComponent} from "../surgery-home/surgery-home.component";
import {PresentationHomeComponent} from "../presentation-home/presentation-home.component";
import {FooterModule} from "../footer/footer.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {SharedService} from "../shared.service";
import {UserServiceService} from "../user-service.service";

describe('NewHomeComponent', () => {
    // let originalTimeout;
  let component: NewHomeComponent;
  let fixture: ComponentFixture<NewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        // imports: [
        //     RouterTestingModule,
        //     NavModule,
        //     FooterModule,
        //     HttpClientModule,
        //     HttpModule
        // ],
      declarations: [
          NewHomeComponent,
          // TopHomeComponent,
          // TheInterviewHomeComponent,
          // ConversationHomeComponent,
          // OneMoreHomeComponent,
          // SpeakerHomeComponent,
          // SurgeryHomeComponent,
          // PresentationHomeComponent
      ]
        // providers: [SharedService,
        //     UserServiceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
      // originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      // jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });
    // afterEach(function() {
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
