import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CONST_ROUTING} from './app.routing';
import {SharedService} from './shared.service';
import {HttpModule} from '@angular/http';
import {ArticleService} from './article.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CatagoryServiceService} from './catagory-service.service';
import {HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {UserServiceService} from './user-service.service';
import {RouterModule} from '@angular/router';
import {NavModule} from './nav/nav.module';
import {FooterModule} from './footer/footer.module';
import {SliderModule} from 'angular-image-slider';
import {ConversationHomeComponent} from './conversation-home/conversation-home.component';
import {NewHomeComponent} from './new-home/new-home.component';
import {ImageHomeComponent} from './image-home/image-home.component';
import {TopHomeComponent} from './top-home/top-home.component';
import {HealthyLivingHomeComponent} from './healthy-living-home/healthy-living-home.component';
import {TheInterviewHomeComponent} from './the-interview-home/the-interview-home.component';
import {StartupHomeComponent} from './startup-home/startup-home.component';
import {PresentationHomeComponent} from './presentation-home/presentation-home.component';
import {OneMoreHomeComponent} from './one-more-home/one-more-home.component';
import {SurgeryHomeComponent} from './surgery-home/surgery-home.component';
import {SpeakerHomeComponent} from './speaker-home/speaker-home.component';
import {QuestionPageComponent} from './question-page/question-page.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import {
    LikeComment,
    RegistrationComponent,
    SingleArticleVideoComponent
} from './single-article-video/single-article-video.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
    MatCardModule,
    MatRadioModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDialogRef,
    MAT_DIALOG_DATA,

} from '@angular/material';
import {SinglePopup} from "./single-article-video/single-article-video.component";
import {MatMenuModule} from '@angular/material/menu';
import {VideoHomeComponent} from './video-home/video-home.component';
import {PollsComponent} from './polls/polls.component';
import {SlidepresentationComponent} from './slidepresentation/slidepresentation.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {LiveUpdatesComponent} from './live-updates/live-updates.component';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
// import { MatFileUploadModule } from 'angular-material-fileupload';
//import { NgStickyDirective } from 'ng-sticky';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {PodcastComponent} from "./podcast/podcast.component";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
//import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {DataService} from "./data.service";
import {DropdownModule} from 'angular-custom-dropdown';
import {PodcastSpecialComponent} from "./podcast-special/podcast-special.component";
import {PodcastEventComponent} from "./podcast-event/podcast-event.component";
//Dynamic
import {HeroJobAdComponent} from "./dynamic/hero-job-ad.component";
import {AdBannerComponent} from './dynamic/ad-banner.component';
import {HeroProfileComponent} from './dynamic/hero-profile.component';
import {AdDirective} from './dynamic/ad.directive';
import {MatFormFieldModule, MatGridListModule, MatListModule, MatNativeDateModule} from "@angular/material";
import {AdService} from './dynamic/ad.service';
import { LiveUpdateFormComponent } from './live-update-form/live-update-form.component';
import {FirebaseServiceService} from "./firebase-service.service";
import {AngularFireAuth} from 'angularfire2/auth';
import { MatSidenavModule } from '@angular/material/sidenav';
import {VerifyEmailComponent} from "./verify-email/verify-email.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {SinglePodcastComponent} from "./single-podcast/single-podcast.component";
import {ImportMetadata} from "@angular/compiler-cli/src/metadata/evaluator";
import { BlogComponent } from './blog/blog.component';
import {JournelsComponent} from "./journels/journels.component";
import {JournelsAllComponent} from "./journels-all/journels-all.component";
import { SingleYogaOfWccpc1Component ,SingleYogaPopup1} from './single-yoga-of-wccpc1/single-yoga-of-wccpc1.component';
import { SingleYogaOfWccpc2Component ,SingleYogaPopup2} from './single-yoga-of-wccpc2/single-yoga-of-wccpc2.component';
import { SingleYogaOfWccpc3Component ,SingleYogaPopup3 } from './single-yoga-of-wccpc3/single-yoga-of-wccpc3.component';
import { WccpciGalleryComponent } from './wccpci-gallery/wccpci-gallery.component';
import { SingleYogaOfWccpcComponent ,SingleYogaPopup} from './single-yoga-of-wccpc/single-yoga-of-wccpc.component';
import { RssdiGalleryComponent } from './rssdi-gallery/rssdi-gallery.component';
import { RssdiSingleGalleryComponent ,RssdiPopup} from './rssdi-single-gallery/rssdi-single-gallery.component';
import { ApvicGalleryComponent } from './apvic-gallery/apvic-gallery.component';

import {SingleBenefitsOfYoga3Component, SinglePopup3} from "./single-benefits-of-yoga3/single-benefits-of-yoga3.component";
import { Csi2017GalleryComponent } from './csi2017-gallery/csi2017-gallery.component';
import {SingleBenefitsOfYoga2Component, SinglePopup2} from "./single-benefits-of-yoga2/single-benefits-of-yoga2.component";
import { SalesGetComponent } from './sales-get/sales-get.component';
import { SalesPostComponent } from './sales-post/sales-post.component';
import { AllBlogPageComponent } from './all-blog-page/all-blog-page.component';
import { SurveyQuestionsComponent } from './survey-questions/survey-questions.component';
import {EqualValidator} from './trd-registration-form/password.match.directive';

import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { NewKnowledgePartnerComponent } from './new-knowledge-partner/new-knowledge-partner.component';
import { PresentationSliderComponent } from './presentation-slider/presentation-slider.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { PresentationEventComponent } from './presentation-event/presentation-event.component';
//import {MatSelectModule} from '@angular/material/select';
//import { MatFileUploadModule } from 'angular-material-fileupload'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { EventSurveyComponent } from './event-survey/event-survey.component';
import { TestAudioPlayerComponent } from './test-audio-player/test-audio-player.component';
import { TheInerviewDiscussComponent } from './the-inerview-discuss/the-inerview-discuss.component';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import { TesComponent } from './tes/tes.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import {UploadsComponent} from './uploads/uploads.component';
import { TagsComponent } from './tags/tags.component';
import { BapComponent } from './bap/bap.component';
// import { ImportContactComponent } from './import-contact/import-contact.component';

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, LoginOpt} from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ImportContactLoginComponent, ImportContactRegisterComponent } from './import-contact-login/import-contact-login.component';
import { Csi2019pptComponent } from './csi2019ppt/csi2019ppt.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { MailerEventWiseComponent } from './mailer-event-wise/mailer-event-wise.component';
import { MailerDoctorWiseComponent } from './mailer-doctor-wise/mailer-doctor-wise.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SoapconSlotBookingComponent } from './soapcon-slot-booking/soapcon-slot-booking.component';

import { EventworkflowComponent } from './eventworkflow/eventworkflow.component';

import { ImgPresentaionMailerEventWiseComponent } from './img-presentaion-mailer-event-wise/img-presentaion-mailer-event-wise.component';

import { AutoRegistrationOfInviteesComponent } from './auto-registration-of-invitees/auto-registration-of-invitees.component';
import { ResetPasswordAutoRegistrationOfInviteesComponent } from './reset-password-auto-registration-of-invitees/reset-password-auto-registration-of-invitees.component';

import { TrdRegistrationFormComponent} from './trd-registration-form/trd-registration-form.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
//import { Csicon2019EditSlotComponent } from './csicon2019-edit-slot/csicon2019-edit-slot.component';

//import { Csicon2019EventModule } from './csicon2019-event/csicon2019-event.module';
import{PodcastMailComponent} from './podcast-mail/podcast-mail.component';
import { SalesforceMailerComponent } from './salesforce-mailer/salesforce-mailer.component';
import { PostEventBrandedComponent } from './post-event-branded/post-event-branded.component';
import { JournalMailComponent } from './journal-mail/journal-mail.component';
import { EventlastWordComponent } from './eventlast-word/eventlast-word.component';
import { EventlastWordSingleComponent } from './eventlast-word-single/eventlast-word-single.component';
import { VerificationOfRegistrationComponent } from './verification-of-registration/verification-of-registration.component';
import { ImportSalesforceContactsComponent } from './import-salesforce-contacts/import-salesforce-contacts.component';
import { TheLastWordWithoutEventComponent } from './the-last-word-without-event/the-last-word-without-event.component';
import { SinglePageTheLastWordWithoutEventComponent } from './single-page-the-last-word-without-event/single-page-the-last-word-without-event.component';
import { BookSlotWithoutEventComponent } from './book-slot-without-event/book-slot-without-event.component';
import { EditBookSlotWithoutEventComponent } from './edit-book-slot-without-event/edit-book-slot-without-event.component';
import {DetailsFormComponent} from './details-form/details-form.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { PollsQuizComponent, QuizPopupComponent } from './polls-quiz/polls-quiz.component';
import { MessageService} from './message.service';
import { WinnerslistComponent } from './winnerslist/winnerslist.component';
import { EditBookStudioSlotComponent } from './edit-book-studio-slot/edit-book-studio-slot.component';
import { SendEmailForTranscriptComponent } from './send-email-for-transcript/send-email-for-transcript.component';
import { SendEmailForInterviewVideoEditComponent } from './send-email-for-interview-video-edit/send-email-for-interview-video-edit.component';
// import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { KnowledgePartnerProposalComponent } from './knowledge-partner-proposal/knowledge-partner-proposal.component';
import { SendPeriodicMailersComponent } from './send-periodic-mailers/send-periodic-mailers.component';
import { AutomationOfMailersComponent } from './automation-of-mailers/automation-of-mailers.component';
import { AutoEngagementTriggersComponent } from './auto-engagement-triggers/auto-engagement-triggers.component';
import { AocMumbaiComponent, AocMumbaiPollsComponent, AocMumbaiQuestionAttemptedPopUp,AocNotificationComponent}  from './aoc-mumbai/aoc-mumbai.component';
import { AocMumbaiPollsWinnersComponent}  from './aoc-mumbai-polls-winners/aoc-mumbai-polls-winners.component';

const gOptions: LoginOpt = {
  scope: 'https://www.googleapis.com/auth/contacts'
}

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('725459838767-hn8qh93m24kav98885it9vfrc61751og.apps.googleusercontent.com', gOptions)
  },
]);

import {ChaptersComponent} from './auto-engagement-triggers/chapters.component';
import {LecturesComponent} from './auto-engagement-triggers/lectures.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { AocLiveUpdateAndLiveStreamingComponent } from './aoc-live-update-and-live-streaming/aoc-live-update-and-live-streaming.component';
import { VaiconpollsComponent,VaiconPollsAttempted,VaiconNotificationComponent,VaiconPollsQuizComponent } from './vaiconpolls/vaiconpolls.component';
import { SendMailerToPharmaComponent } from './send-mailer-to-pharma/send-mailer-to-pharma.component';
import { SelectToSendMailerToPharmaComponent } from './select-to-send-mailer-to-pharma/select-to-send-mailer-to-pharma.component';
import { LiveUpdatesAocComponent } from './live-updates-aoc/live-updates-aoc.component';
import { LiveUpdateViewDeleteComponent } from './live-update-view-delete/live-update-view-delete.component';
import { QuestionPagePostEventComponent } from './question-page-post-event/question-page-post-event.component';
// import { IagesComponent, IagesPollsComponent, IagesQuestionAttemptedPopUp, IagesNotificationComponent } from './iages/iages.component';
import { SendIagesPresentationTopicsComponent } from './send-iages-presentation-topics/send-iages-presentation-topics.component';
import { IagesLiveUpdatesComponent } from './iages-live-updates/iages-live-updates.component';
import { IagesLiveUpdatesFormComponent } from './iages-live-updates-form/iages-live-updates-form.component';
import { QuestionPageLastMinuteComponent } from './question-page-last-minute/question-page-last-minute.component';
import { LiveUpdatesPipelineComponent } from './live-updates-pipeline/live-updates-pipeline.component';
import { LiveUpdatesMainDashboardComponent } from './live-updates-main-dashboard/live-updates-main-dashboard.component';
import { CovidLiveUpdatesComponent } from './covid-live-updates/covid-live-updates.component';
import { AskQuestionsFaqComponent } from './ask-questions-faq/ask-questions-faq.component';
import { RegistrationFormCovidComponent } from './registration-form-covid/registration-form-covid.component';
import { LiveUpdateSinglepageComponent } from './live-update-singlepage/live-update-singlepage.component';
import { SubmitCoronavirusStoriesComponent } from './submit-coronavirus-stories/submit-coronavirus-stories.component';
import { CoronavirusQuestionsComponent } from './coronavirus-questions/coronavirus-questions.component';
import { LoginLiveUpdateDashboardComponent } from './login-live-update-dashboard/login-live-update-dashboard.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoginLiveUpdatesComponent } from './login-live-updates/login-live-updates.component';
import { SendMailerToDocsComponent } from './send-mailer-to-docs/send-mailer-to-docs.component';
// import { subsectionComponent } from './auto-engagement-triggers/subsection.component';
// import{ innersectionComponent } from './auto-engagement-triggers/innersection.component' ;
import {CoronaDaywiseUpdatesComponent} from './corona-daywise-updates/corona-daywise-updates.component';
import { SendBlogMailersComponent } from './send-blog-mailers/send-blog-mailers.component';
import { EditNewsletterMailerComponent } from './edit-newsletter-mailer/edit-newsletter-mailer.component';
import { DndListModule } from 'ngx-drag-and-drop-lists';
import { TrendingComponent } from './trending/trending.component';
import { CoronaComponent } from './corona/corona.component';
import { RotatingCubeComponent } from './rotating-cube/rotating-cube.component';
import { RegisterContributionComponent } from './register-contribution/register-contribution.component';
import { LogInContributionComponent } from './log-in-contribution/log-in-contribution.component';
import { LoginService } from './login.service';
import { MailVerContributionComponent } from './mail-ver-contribution/mail-ver-contribution.component';
import { ResetPassContributionComponent } from './reset-pass-contribution/reset-pass-contribution.component';
import { ProfileContributionComponent } from './profile-contribution/profile-contribution.component';
import { PlanContributionComponent } from './plan-contribution/plan-contribution.component';
import { WindowRef } from './plan-contribution/WindowRef';
import { CovidstatsComponent } from './covidstats/covidstats.component';
import { LiveUpdateTopstoriesDashboardComponent } from './live-update-topstories-dashboard/live-update-topstories-dashboard.component';
import { SubscriptionLoginComponent } from './subscription-login/subscription-login.component';
import { SubscriptionRegisterComponent } from './subscription-register/subscription-register.component';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import {WindowRefSub} from './subscription-plan/WindowRefSub';
import { FaqSubscriptionComponent } from './faq-subscription/faq-subscription.component';
import { NewsletterSubscriptionComponent } from './newsletter-subscription/newsletter-subscription.component';
import { MauticUserLoginComponent } from './mautic-user-login/mautic-user-login.component';
import { MauticUserDashboardComponent } from './mautic-user-dashboard/mautic-user-dashboard.component';
import { MauticUserAddcontactComponent } from './mautic-user-addcontact/mautic-user-addcontact.component';
import { SubscriptionLandingPageComponent } from './subscription-landing-page/subscription-landing-page.component';
import { SubscriptionNewslettersComponent } from './subscription-newsletters/subscription-newsletters.component';
import { SubscriptionAccountDetailsComponent } from './subscription-account-details/subscription-account-details.component';
import { SubscriptionBillingDetailsComponent } from './subscription-billing-details/subscription-billing-details.component';

import { SubscriptionLoginPageComponent } from './subscription-login-page/subscription-login-page.component';
import { SubscriptionPlanPageComponent } from './subscription-plan-page/subscription-plan-page.component' 
import { WindowRefSubscription } from './subscription-plan-page/WindowRefSubscription';
import { HomepageVideoDashboardComponent } from './homepage-video-dashboard/homepage-video-dashboard.component';
import { LiveStreamingComponent } from './live-streaming/live-streaming.component';
import { LiveStreamingDashboardComponent } from './live-streaming-dashboard/live-streaming-dashboard.component';
export function provideConfig() {
  return config;
}

@NgModule({
    declarations: [
        AppComponent,
        ChaptersComponent,
        LecturesComponent,
        NewHomeComponent,
        TopHomeComponent,
        TheInterviewHomeComponent,
        ConversationHomeComponent,
        OneMoreHomeComponent,
        SpeakerHomeComponent,
        ResetPasswordComponent,
        SurgeryHomeComponent,
        SinglePodcastComponent,
        PresentationHomeComponent,
        ImageHomeComponent,
        HealthyLivingHomeComponent,
        StartupHomeComponent,
        SingleArticleVideoComponent,
        VideoHomeComponent,
        PollsComponent,
        PodcastComponent,
        PollsQuizComponent,
        AocMumbaiComponent,
        AocMumbaiPollsComponent,
        // IagesPollsComponent,
        AocMumbaiPollsWinnersComponent,
        AocMumbaiQuestionAttemptedPopUp,
        // IagesQuestionAttemptedPopUp,
        DetailsFormComponent,
        BookSlotComponent,
        SlidepresentationComponent,
        PodcastEventComponent,
        PodcastSpecialComponent,
        EditProfileComponent,
        LiveUpdatesComponent,
        LiveUpdatesMainDashboardComponent,
        UploadsComponent,
        //NgStickyDirective
        AdBannerComponent,
        ProfileComponent,
        HeroJobAdComponent,
        HeroProfileComponent,
        AdDirective,
        EqualValidator,
        SinglePopup,
        LiveUpdateFormComponent,
        VerifyEmailComponent,
        BlogComponent,
        JournelsComponent,
        JournelsAllComponent,
        SingleYogaOfWccpc1Component,
        SingleYogaOfWccpc2Component,
        SingleYogaOfWccpc3Component,
        WccpciGalleryComponent,
        LikeComment,
        RegistrationComponent,
        SingleYogaPopup1,SingleYogaPopup2,SingleYogaPopup3,SingleYogaPopup, SingleYogaOfWccpcComponent, RssdiGalleryComponent, RssdiSingleGalleryComponent,RssdiPopup, ApvicGalleryComponent,
        SingleBenefitsOfYoga3Component, SinglePopup3, Csi2017GalleryComponent,
        SingleBenefitsOfYoga2Component, SinglePopup2, SalesGetComponent, SalesPostComponent, AllBlogPageComponent, SurveyQuestionsComponent, NewKnowledgePartnerComponent, 
        PresentationSliderComponent, UploadFileComponent, PresentationEventComponent, EventSurveyComponent, TestAudioPlayerComponent, TheInerviewDiscussComponent, 
        TesComponent,TagsComponent, BapComponent,
        //  ImportImportContactComponent, 
         ImportContactRegisterComponent, ImportContactLoginComponent, 
        Csi2019pptComponent, UnsubscribeComponent, MailerEventWiseComponent,ImgPresentaionMailerEventWiseComponent,PodcastMailComponent, MailerDoctorWiseComponent, 
        SoapconSlotBookingComponent,  EventworkflowComponent, SalesforceMailerComponent, PostEventBrandedComponent, TrdRegistrationFormComponent,
        JournalMailComponent, EventlastWordComponent, 
        EventlastWordSingleComponent, AutoRegistrationOfInviteesComponent, ResetPasswordAutoRegistrationOfInviteesComponent, VerificationOfRegistrationComponent, 
        ImportSalesforceContactsComponent, TheLastWordWithoutEventComponent, SinglePageTheLastWordWithoutEventComponent,
        BookSlotWithoutEventComponent,
        EditBookSlotWithoutEventComponent,
        QuizPopupComponent,
        WinnerslistComponent,
        EditBookStudioSlotComponent,
        SendEmailForTranscriptComponent,
        SendEmailForInterviewVideoEditComponent,
        KnowledgePartnerProposalComponent,
        SendPeriodicMailersComponent,
        AutomationOfMailersComponent,
        AutoEngagementTriggersComponent,
        ThankyoupageComponent,
        AocNotificationComponent,
        // IagesNotificationComponent,
        AocLiveUpdateAndLiveStreamingComponent,
        VaiconpollsComponent,
        VaiconPollsAttempted,
        VaiconNotificationComponent,
        VaiconPollsQuizComponent,
        SendMailerToPharmaComponent,
        SelectToSendMailerToPharmaComponent,
        LiveUpdatesAocComponent,
        QuestionPageComponent,
        LiveUpdateViewDeleteComponent,
        CovidLiveUpdatesComponent,
        QuestionPagePostEventComponent,
        // IagesComponent,
        CoronaDaywiseUpdatesComponent,
        SendIagesPresentationTopicsComponent,
        IagesLiveUpdatesComponent,
        IagesLiveUpdatesFormComponent,
        QuestionPageLastMinuteComponent,
        LiveUpdatesPipelineComponent,
        AskQuestionsFaqComponent,
        RegistrationFormCovidComponent,
        LiveUpdateSinglepageComponent,
        SubmitCoronavirusStoriesComponent,
        CoronavirusQuestionsComponent,
        LoginLiveUpdateDashboardComponent,
        LoadingSpinnerComponent,
        LoginLiveUpdatesComponent,
        SendMailerToDocsComponent,
        SendBlogMailersComponent,
        EditNewsletterMailerComponent, 
        TrendingComponent,
        CoronaComponent,
        RotatingCubeComponent,
        RegisterContributionComponent,
        LogInContributionComponent,
        MailVerContributionComponent,
        ResetPassContributionComponent,
        ProfileContributionComponent,
        PlanContributionComponent,
        CovidstatsComponent,
        LiveUpdateTopstoriesDashboardComponent,
        SubscriptionLoginComponent,
        SubscriptionRegisterComponent,
        SubscriptionPlanComponent,
        FaqSubscriptionComponent,
        NewsletterSubscriptionComponent,
        MauticUserLoginComponent,
        MauticUserDashboardComponent,
        MauticUserAddcontactComponent,
        SubscriptionLandingPageComponent,
        SubscriptionNewslettersComponent,
        SubscriptionAccountDetailsComponent,
        SubscriptionBillingDetailsComponent,
  
        SubscriptionLoginPageComponent,
  
        SubscriptionPlanPageComponent,
  
        HomepageVideoDashboardComponent,
  
        LiveStreamingComponent,
  
        LiveStreamingDashboardComponent
  
        //Csicon2019EditSlotComponent
        //Csicon2019EditSlotComponent
        // Csicon2019SlotBookingComponent,
    ],
    imports: [
       // RichTextEditorAllModule,
       AngularEditorModule,
        CommonModule,
        FlexLayoutModule,
        MatCheckboxModule,
        BrowserModule.withServerTransition({appId: 'trd'}),
        VgCoreModule,
        VgControlsModule,
        MatGridListModule,
        VgOverlayPlayModule,
        MatIconModule,
        DragDropModule,
        DndListModule,
        MatSidenavModule,
        SliderModule,
        VgBufferingModule,
        NavModule,
        MatCardModule,  MatListModule,
        MatGridListModule,
        FooterModule,
        MatRadioModule,
        AngularDateTimePickerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatProgressBarModule,
        MatInputModule,
        MatMenuModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        SliderModule,
        SlideshowModule,
        MatDialogModule,
        MatSelectModule,
        MatStepperModule,
        //MatFileUploadModule,
        DropdownModule,
        CONST_ROUTING,
        HttpClientModule,
        HttpModule,
        BrowserAnimationsModule,
        NgxHmCarouselModule,
        PdfViewerModule,
        MatTabsModule,
        MatChipsModule,
        MatIconModule,
        MatExpansionModule,
        // MatFileUploadModule,
        ServiceWorkerModule.register('/ngsw-worker-mod.js', {enabled: environment.production}),
        RouterModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }), // for database
        NgxMatSelectSearchModule,
        MatToolbarModule,
        MatNativeDateModule,
        SocialLoginModule,
        HttpClientModule,
        NgxTwitterTimelineModule,
        environment.production ? ServiceWorkerModule.register('firebase-messaging-sw.js'):[]
    ],
    // entryComponents: [
    //  SinglePopup
    //],
    entryComponents: [
      AocMumbaiQuestionAttemptedPopUp,AocMumbaiPollsComponent,QuizPopupComponent,SinglePopup2,
      // IagesPollsComponent,IagesQuestionAttemptedPopUp, 
      SinglePopup3, HeroJobAdComponent, HeroProfileComponent,SinglePopup, SingleYogaPopup, SingleYogaPopup1,SingleYogaPopup2,SingleYogaPopup3, RssdiPopup, LikeComment,ImportContactLoginComponent, ImportContactRegisterComponent,RegistrationComponent,//IagesNotificationComponent,
      AocNotificationComponent,VaiconPollsAttempted,VaiconNotificationComponent,VaiconPollsQuizComponent],

    providers: [HttpClient,WindowRef,WindowRefSub,WindowRefSubscription,
      { provide: MatDialogRef, useValue: {} },
	{ provide: MAT_DIALOG_DATA, useValue: [] },
                MessageService,
                {
                  provide: AuthServiceConfig,
                  useFactory: provideConfig
                },
        //{ provide: 'Window',  useValue: window },
                AngularFireAuth,
                SharedService, ArticleService,CatagoryServiceService, UserServiceService,LoginService, Title, DataService, AdService, FirebaseServiceService,MatDatepickerModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
