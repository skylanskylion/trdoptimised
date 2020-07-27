import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {NewHomeComponent} from './new-home/new-home.component';
import {LikeComment,
  RegistrationComponent,
  SingleArticleVideoComponent
} from "./single-article-video/single-article-video.component";
import {PollsComponent} from "./polls/polls.component";
import {SlidepresentationComponent} from "./slidepresentation/slidepresentation.component";
import {LiveUpdatesComponent} from "./live-updates/live-updates.component";
import {LiveUpdateFormComponent} from "./live-update-form/live-update-form.component";
import {VerifyEmailComponent} from "./verify-email/verify-email.component";
import {PodcastComponent} from "./podcast/podcast.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {SinglePodcastComponent} from "./single-podcast/single-podcast.component";
import {PodcastSpecialComponent} from "./podcast-special/podcast-special.component";
import {BlogComponent} from "./blog/blog.component";
import {JournelsAllComponent} from "./journels-all/journels-all.component";
import {SingleYogaOfWccpc3Component} from "./single-yoga-of-wccpc3/single-yoga-of-wccpc3.component";
import {SingleYogaOfWccpc2Component} from "./single-yoga-of-wccpc2/single-yoga-of-wccpc2.component";
import {SingleYogaOfWccpc1Component} from "./single-yoga-of-wccpc1/single-yoga-of-wccpc1.component";
import {WccpciGalleryComponent} from "./wccpci-gallery/wccpci-gallery.component";
import {SingleYogaOfWccpcComponent} from "./single-yoga-of-wccpc/single-yoga-of-wccpc.component";
import {RssdiGalleryComponent} from "./rssdi-gallery/rssdi-gallery.component";
import {RssdiSingleGalleryComponent} from "./rssdi-single-gallery/rssdi-single-gallery.component"
import {SingleBenefitsOfYoga3Component} from "./single-benefits-of-yoga3/single-benefits-of-yoga3.component";
import {ApvicGalleryComponent} from "./apvic-gallery/apvic-gallery.component";
import {Csi2017GalleryComponent} from "./csi2017-gallery/csi2017-gallery.component";
import {SingleBenefitsOfYoga2Component} from "./single-benefits-of-yoga2/single-benefits-of-yoga2.component";
import {SalesGetComponent} from "./sales-get/sales-get.component";
import {SalesPostComponent} from "./sales-post/sales-post.component";
import {AllBlogPageComponent} from "./all-blog-page/all-blog-page.component";
import {SurveyQuestionsComponent} from "./survey-questions/survey-questions.component";
import {NewKnowledgePartnerComponent} from "./new-knowledge-partner/new-knowledge-partner.component";
import {PresentationSliderComponent} from "./presentation-slider/presentation-slider.component";
import {UploadFileComponent} from "./upload-file/upload-file.component";
import {PresentationEventComponent} from "./presentation-event/presentation-event.component";
import {EventSurveyComponent} from "./event-survey/event-survey.component";
import {TestAudioPlayerComponent} from "./test-audio-player/test-audio-player.component";
import {TesComponent} from "./tes/tes.component";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import {TagsComponent} from "./tags/tags.component";
import {BapComponent} from "./bap/bap.component";
import { ImportContactComponent } from './import-contact/import-contact.component';
import { ImportContactLoginComponent, ImportContactRegisterComponent } from './import-contact-login/import-contact-login.component';
import { Csi2019pptComponent } from './csi2019ppt/csi2019ppt.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { MailerEventWiseComponent } from './mailer-event-wise/mailer-event-wise.component';
import { MailerDoctorWiseComponent } from './mailer-doctor-wise/mailer-doctor-wise.component';
import { SoapconSlotBookingComponent } from './soapcon-slot-booking/soapcon-slot-booking.component';
import { ImgPresentaionMailerEventWiseComponent } from './img-presentaion-mailer-event-wise/img-presentaion-mailer-event-wise.component';
import{PodcastMailComponent} from './podcast-mail/podcast-mail.component';
import { EventworkflowComponent } from './eventworkflow/eventworkflow.component';
import { SalesforceMailerComponent } from './salesforce-mailer/salesforce-mailer.component';
import{JournalMailComponent} from './journal-mail/journal-mail.component'
import { PostEventBrandedComponent } from './post-event-branded/post-event-branded.component';
import { EventlastWordComponent } from './eventlast-word/eventlast-word.component';
import { EventlastWordSingleComponent } from './eventlast-word-single/eventlast-word-single.component';
import { AutoRegistrationOfInviteesComponent } from './auto-registration-of-invitees/auto-registration-of-invitees.component';
import { ResetPasswordAutoRegistrationOfInviteesComponent } from './reset-password-auto-registration-of-invitees/reset-password-auto-registration-of-invitees.component';
import { TrdRegistrationFormComponent } from './trd-registration-form/trd-registration-form.component';
import { VerificationOfRegistrationComponent } from './verification-of-registration/verification-of-registration.component';
import { ImportSalesforceContactsComponent } from './import-salesforce-contacts/import-salesforce-contacts.component';
import { TheLastWordWithoutEventComponent } from './the-last-word-without-event/the-last-word-without-event.component';
import { SinglePageTheLastWordWithoutEventComponent } from './single-page-the-last-word-without-event/single-page-the-last-word-without-event.component';

import { BookSlotWithoutEventComponent } from './book-slot-without-event/book-slot-without-event.component';
import { EditBookSlotWithoutEventComponent } from './edit-book-slot-without-event/edit-book-slot-without-event.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import {PollsQuizComponent} from "./polls-quiz/polls-quiz.component";
import { WinnerslistComponent } from './winnerslist/winnerslist.component';
import { EditBookStudioSlotComponent } from './edit-book-studio-slot/edit-book-studio-slot.component';
import { SendEmailForTranscriptComponent } from './send-email-for-transcript/send-email-for-transcript.component';
import { SendEmailForInterviewVideoEditComponent } from './send-email-for-interview-video-edit/send-email-for-interview-video-edit.component';
import { KnowledgePartnerProposalComponent } from './knowledge-partner-proposal/knowledge-partner-proposal.component';
import { SendPeriodicMailersComponent } from './send-periodic-mailers/send-periodic-mailers.component';
import { AutomationOfMailersComponent } from './automation-of-mailers/automation-of-mailers.component';
import {AutoEngagementTriggersComponent} from './auto-engagement-triggers/auto-engagement-triggers.component';
import { AocMumbaiComponent } from './aoc-mumbai/aoc-mumbai.component';
import { AocMumbaiPollsWinnersComponent } from './aoc-mumbai-polls-winners/aoc-mumbai-polls-winners.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { AocLiveUpdateAndLiveStreamingComponent } from './aoc-live-update-and-live-streaming/aoc-live-update-and-live-streaming.component';
import { VaiconpollsComponent } from './vaiconpolls/vaiconpolls.component';
import { SendMailerToPharmaComponent } from './send-mailer-to-pharma/send-mailer-to-pharma.component';
import { SelectToSendMailerToPharmaComponent } from './select-to-send-mailer-to-pharma/select-to-send-mailer-to-pharma.component';
import { LiveUpdatesAocComponent } from './live-updates-aoc/live-updates-aoc.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { LiveUpdateViewDeleteComponent } from './live-update-view-delete/live-update-view-delete.component';
import { QuestionPagePostEventComponent } from './question-page-post-event/question-page-post-event.component';
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
import { LoginLiveUpdatesComponent } from './login-live-updates/login-live-updates.component';
import { SendMailerToDocsComponent } from './send-mailer-to-docs/send-mailer-to-docs.component';
import { CoronaDaywiseUpdatesComponent } from './corona-daywise-updates/corona-daywise-updates.component';
import { SendBlogMailersComponent } from './send-blog-mailers/send-blog-mailers.component';
import { EditNewsletterMailerComponent } from './edit-newsletter-mailer/edit-newsletter-mailer.component';
import { CoronaComponent } from './corona/corona.component';
import { LogInContributionComponent } from './log-in-contribution/log-in-contribution.component';
import { RegisterContributionComponent } from './register-contribution/register-contribution.component';
import { PlanContributionComponent } from './plan-contribution/plan-contribution.component';
import { ResetPassContributionComponent } from './reset-pass-contribution/reset-pass-contribution.component';
import { ProfileContributionComponent } from './profile-contribution/profile-contribution.component';
import { MailVerContributionComponent } from './mail-ver-contribution/mail-ver-contribution.component';
import { CovidstatsComponent } from './covidstats/covidstats.component';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { FaqSubscriptionComponent } from './faq-subscription/faq-subscription.component';
import { NewsletterSubscriptionComponent } from './newsletter-subscription/newsletter-subscription.component';
import { SubscriptionRegisterComponent } from './subscription-register/subscription-register.component';
import { MauticUserLoginComponent } from './mautic-user-login/mautic-user-login.component';
import { MauticUserDashboardComponent } from './mautic-user-dashboard/mautic-user-dashboard.component';
import { MauticUserAddcontactComponent } from './mautic-user-addcontact/mautic-user-addcontact.component';
import { SubscriptionLandingPageComponent } from './subscription-landing-page/subscription-landing-page.component';
import { SubscriptionAccountDetailsComponent } from './subscription-account-details/subscription-account-details.component';
import { SubscriptionNewslettersComponent } from './subscription-newsletters/subscription-newsletters.component';
import { SubscriptionBillingDetailsComponent } from './subscription-billing-details/subscription-billing-details.component';
import { SubscriptionLoginPageComponent } from './subscription-login-page/subscription-login-page.component';
import { SubscriptionPlanPageComponent } from './subscription-plan-page/subscription-plan-page.component';
import { HomepageVideoDashboardComponent } from './homepage-video-dashboard/homepage-video-dashboard.component';
import { LiveStreamingComponent } from './live-streaming/live-streaming.component';
import { LiveStreamingDashboardComponent } from './live-streaming-dashboard/live-streaming-dashboard.component';


const MAINMENU_ROUTES: Routes = [
  // full : makes sure the path is absolute path
{path: 'iages/presentations/:id', component:SendIagesPresentationTopicsComponent},

  {path: 'IAGES-2020-Question-of-the-Talk', loadChildren: 'app/iages/iages.module#IagesModule'},
  
  {path: 'question-page/:id', component:QuestionPageComponent},
  {path: 'question-page-post-event/:id', component:QuestionPagePostEventComponent},
  {path: 'question-page-last-minute/:id', component:QuestionPageLastMinuteComponent},
{path: 'live-update-edit-delete', component: LiveUpdateViewDeleteComponent},
{path: 'send-mailer-kp-pharma/:id', component:SendMailerToPharmaComponent,},
{path: 'AOC-2020-Live-Updates', component: LiveUpdatesAocComponent},

  {path: 'edit-transcript-event/:id/:tid/:did', component:EditBookStudioSlotComponent},
  {path: 'verification-of-registration/:id', component:VerificationOfRegistrationComponent},
  {path: 'import-contact-login/:slug', component: ImportContactLoginComponent},
  {path: 'import-contact-register/:slug', component: ImportContactRegisterComponent},


  // {path: 'import-contact', component: ImportContactComponent},
  {path: 'import-contact', loadChildren: 'app/import-contact/import-contact.module#ImportContactModule'},

  {path: 'unsubscribe-mailer/:slug', component: UnsubscribeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile-edit', component: EditProfileComponent},
  {path: 'automation/:all', component: AutoEngagementTriggersComponent},
  {path: 'tv-studio-workflow', component:EventworkflowComponent},
  //{path: 'post-event-branded-app', component:PostEventBrandedComponent},
  {path : 'subscription-newsletter' , component:NewsletterSubscriptionComponent},
  {path: 'salesforce-mailer', component:SalesforceMailerComponent},
  {path:'journal-mail', component:JournalMailComponent},
  {path: 'subscription-register' , component : SubscriptionRegisterComponent},
  {path: 'subscription-plan', component:SubscriptionPlanComponent},
  {path: 'faq-subscription', component: FaqSubscriptionComponent},
  {path: 'mautic-user-login', component: MauticUserLoginComponent},
  {path: 'subscription',component :SubscriptionLandingPageComponent},
  {path: 'subscription-account', component :SubscriptionAccountDetailsComponent},
  {path: 'subscription-newsletters-new' , component : SubscriptionNewslettersComponent},
  {path: 'mautic-user-dashboard/:team', component: MauticUserDashboardComponent},
  {path: 'subscription-billing-details' , component:SubscriptionBillingDetailsComponent},
  {path: 'mautic-user-addcontact/:team', component: MauticUserAddcontactComponent},
  {path:'covid-19-cases-state-wise' , component : CovidstatsComponent},
  {path: 'mailer-event-wise-doctors-video-metrics', component: MailerEventWiseComponent},
  {path: 'mailers-auto', component: AutomationOfMailersComponent},
   {path: 'mailer-doctor-selected-videos-metrics', component: MailerDoctorWiseComponent},
   {path: 'image-presentation-email', component: ImgPresentaionMailerEventWiseComponent},
  {path: 'survey-100119', component: SurveyQuestionsComponent},
    {path: 'knowledge-partner' , component : NewKnowledgePartnerComponent},
    {path: 'podcast-mail', component:PodcastMailComponent},
    {path: 'presentation-event' , component : PresentationEventComponent},
    {path: 'test-audio' , component : TestAudioPlayerComponent},
    {path: 'event-survey' , component : EventSurveyComponent},
    {path: 'presentation-slider' , component : PresentationSliderComponent},
    {path: 'upload-file' , component : UploadFileComponent},
    {path: 'wockhardt-rssdi-tv-ahmedabad-2018/the-last-word', component: RssdiGalleryComponent},
    {path: 'wockhardt-rssdi-tv-ahmedabad-2018/the-last-word/:slug/:id', component: RssdiSingleGalleryComponent},
    {path: ':event/the-last-word', component: EventlastWordComponent},
    {path: ':event/the-last-word/:slug/:id', component: EventlastWordSingleComponent},
    {path: 'single-page-the-last-word', component: SinglePageTheLastWordWithoutEventComponent},
    {path: 'the-last-word', component: TheLastWordWithoutEventComponent},
    {path: '', component: NewHomeComponent, data:{name:'Home'}},
    {path: 'salesforce/get', component: SalesGetComponent},
    {path: 'salesforce/post/:slug', component: SalesPostComponent},
    {path: 'test', component: TesComponent},
    {path: 'tag-video/:tag' , component:TagsComponent},
  {path:'bap' , component: BapComponent},
    {path: 'specials/:slug/gallerywcc', component: WccpciGalleryComponent},
    {path: 'specials/:slug/wccpcigallery/:id', component:SingleYogaOfWccpcComponent},
    {path: 'specials/:slug/wccpcigallery1/:id', component:SingleYogaOfWccpc1Component},
    {path: 'specials/:slug/wccpcigallery2/:id', component:SingleYogaOfWccpc2Component},
    {path: 'specials/:slug/wccpcigallery3/:id', component:SingleYogaOfWccpc3Component},
    {path: 'specials/:slug/gallery/:id', component: SingleBenefitsOfYoga3Component},
    {path: 'specials/apvic/event-gallery', component: ApvicGalleryComponent },
    {path: 'specials/csi-2017/event-gallery', component: Csi2017GalleryComponent},
    {path: 'specials/:slug/event-gallery/:id', component: SingleBenefitsOfYoga2Component},
    {path : 'subscription-plan-page'  , component:SubscriptionPlanPageComponent},
    {path:'blog/:category/:slug', component: BlogComponent},
    {path: 'home-page-video-dashboard', component: HomepageVideoDashboardComponent},
     {path: 'all-blog-page', component: AllBlogPageComponent},
     {path: 'subscription-login', component: SubscriptionLoginPageComponent},
    {path:'verify-email/:email', component:VerifyEmailComponent},
    {path: 'podcast/:slug', component: SinglePodcastComponent},
    {path:'presentation/new/password/:email',component:ResetPasswordComponent},
  {path: 'the-interview', loadChildren: 'app/the-interview/the-interview.module#TheInterviewModule', data:{name:'The-Interview'}},
  {path: 'the-speakers', loadChildren: 'app/the-speakers/the-speakers.module#TheSpeakersModule', data:{name:'The-Speakers'}},
  {path: 'one-more-thing', loadChildren: 'app/one-more-thing/one-more-thing.module#OneMoreThingModule', data:{name:'One-More-Thing'}},
  {path: 'in-conversation', loadChildren: 'app/in-conversation/in-conversation.module#InConversationModule', data:{name:'In-Conversation'}},
  {path: 'specials', loadChildren: 'app/specials/specials.module#SpecialsModule', data:{name:'Specials'}},
  {path: 'specials/:event', loadChildren: 'app/event-home/event-home.module#EventHomeModule'},
  {path: 'specials/:event/:category', loadChildren: 'app/single-event-category/single-event-category.module#SingleEventCategoryModule'},
  {path: 'synapse', loadChildren: 'app/synapse/synapse.module#SynapseModule', data:{name: 'Synapse'}},
  {path: 'live', loadChildren: 'app/live/live.module#LiveModule', data:{name:'Live'}},
  {path:'live-streaming',component:LiveStreamingComponent},
  {path:'live-streaming-dashboard',component:LiveStreamingDashboardComponent},
  {path: 'live/videos/:slug', loadChildren: 'app/live/live.module#LiveModule', data:{name:'live'}},
  {path: 'showcase', loadChildren: 'app/products/products.module#ProductsModule'},
  {path: 'podcast', component: PodcastSpecialComponent},
  {path: 'login', component: LikeComment},
  {path: 'signup', component: RegistrationComponent},
  {path:'blog' , component: BlogComponent},
   {path: 'podcast-event/:event', component: PodcastComponent},
    {path: ':category/live-updates', component: LiveUpdatesComponent},
    {path: 'covid19-updates', component: CovidLiveUpdatesComponent},
    {path: ':category/live-updates/:date/:slug', component: LiveUpdateSinglepageComponent},
    {path: 'coronavirus-stories', component: SubmitCoronavirusStoriesComponent},
    {path: 'iages-live-updates', component: IagesLiveUpdatesComponent},
    {path: 'coronavirus-questions', component : CoronavirusQuestionsComponent},
    {path: 'iages-live-updates-form', component: IagesLiveUpdatesFormComponent},
    {path: 'live-updates-pipeline', component: LiveUpdatesPipelineComponent},
    {path: 'live-update-dashboard', component: LiveUpdateFormComponent},
    {path: 'login-live-updates', component: LoginLiveUpdatesComponent},
    {path: 'contribution-login', component: LogInContributionComponent},
    {path : 'contribution-register', component:RegisterContributionComponent},
    {path : 'plan',component:PlanContributionComponent},
    {path : 'contribution-forgot-pass', component:ResetPassContributionComponent},
    {path : 'contribution-profile', component:ProfileContributionComponent},
    {path : 'mailVer', component:MailVerContributionComponent},
    {path: 'login-live-update-dashboard', component:LoginLiveUpdateDashboardComponent},
   {path: 'live-update-main-dashboard', component:LiveUpdatesMainDashboardComponent},
  {path: 'admin', loadChildren: 'app/home-admin/home-admin.module#HomeAdminModule'},
  {path: 'revolution-talk', loadChildren: 'app/revolution-talk/revolution-talk.module#RevolutionTalkModule', data:{name:'Revolution-Talk'}},
  {path: ':category/all', loadChildren: 'app/category-all/category-all.module#CategoryAllModule', data: {name: 'category'}},
  {path: 'notfound', loadChildren:'app/not-found-component/not-found-component.module#NotFoundComponentModule'},
  // {path: 'pres', loadChildren:'app/presentation-home/presentation-home.module#PresentationHomeModule'},
  {path: 'specials/:event/presentation/:slug/:id', loadChildren:'app/presentation/presentation.module#PresentationModule'},
  {path: 'csinic-2016/live_cases', loadChildren:'app/live-cases/live-cases.module#LiveCasesModule', data:{name: 'Live-Cases'}},
    {path: 'specials/event/revolution-talk/:slug', loadChildren:'app/single-revolution/single-revolution.module#SingleRevolutionModule', data:{name:'single'}},
  {path: ':event/:catagory/:slug', component: SingleArticleVideoComponent , data:{name:'single'}},
  {path: 'polls', component: PollsComponent, data:{name:'polls'}},
    {path: 'journals', component: JournelsAllComponent, data:{name:'Journals'}},
  {path: 'presentation', component: SlidepresentationComponent, data:{name:'presentation'}},
  {path:'live-update', component: LiveUpdatesComponent},
  {path: 'Dr-Hk-Chopra-Sr-Cardiologist-Moolchand-Hospital-Delhi', loadChildren: 'app/dr-hk-chopra/dr-hk-chopra.module#DrHkChopraModule', data:{name: 'Dr-Hk-Chopra'}},
  {path: 'Dr-Manish-Verma-Sr-Cardiologist-Fortis-Hospital-Bangalore', loadChildren: 'app/dr-manish-verma/dr-manish-verma.module#DrManishVermaModule', data:{name: 'Dr-Manish-Verma'}},
  {path: 'Dr-Rishi-Jain-Sr-Cardiologist', loadChildren: 'app/dr-rishi-jain/dr-rishi-jain.module#DrRishiJainModule', data:{name: 'Dr-Rishi-Jain'}},
  {path: 'terms-of-service', loadChildren: 'app/terms-of-service/terms-of-service.module#TermsOfServiceModule', data:{name:'Terms-Service'}},
  {path: 'disclaimer', loadChildren: 'app/disclaimer/disclaimer.module#DisclaimerModule', data:{name:'Disclaimer'}},
  {path: 'privacy-policy', loadChildren: 'app/privacy-policy/privacy-policy.module#PrivacyPolicyModule', data:{name:'Privacy'}},
  {path: 'about-us', loadChildren: 'app/about-us/about-us.module#AboutUsModule', data:{name:'about'}},
  {path: 'contact-us', loadChildren: 'app/contact-us/contact-us.module#ContactUsModule', data:{name:'Contact'}},
  {path: 'rssdi-jaipur-2019-slot-booking', component: DetailsFormComponent},
  {path: 'registration-form-covid', component: AskQuestionsFaqComponent},
  {path: 'csicon-delhi-2019-slot-booking', loadChildren: 'app/csicon2019-slot-booking/csicon2019-slot-booking.module#Csicon2019SlotBookingModule'},
  {path: 'edit-rssdi-jaipur-2019-slot-booking/:id', component: BookSlotComponent},
  {path: 'edit-csicon-delhi-2019-slot-booking/:id', loadChildren: 'app/csicon2019-edit-slot/csicon2019-edit-slot.module#Csicon2019EditSlotModule'},
  {path: 'esicon-nagpur-2019-slot-booking', loadChildren: 'app/esicon-slot-booking/esicon-slot-booking.module#EsiconSlotBookingModule'},
  {path: 'edit-esicon-nagpur-2019-slot-booking/:id', loadChildren: 'app/edit-esicon-slot-booking/edit-esicon-slot-booking.module#EsiconEditSlotBookingModule'},
  {path: 'soapccon-hyderabad-2019-slot-booking', component:SoapconSlotBookingComponent},
  {path: 'book-slot-ecg', loadChildren: 'app/book-slot-ecg/book-slot-ecg.module#BookSlotEcgModule'},
    {path: ':catagory/:slug', loadChildren:'app/single-component/single-component.module#SingleComponentModule'  , data:{name:'single'}},
    {path: 'upload-auto-registration-data', component:AutoRegistrationOfInviteesComponent},
    {path: 'reset-password-registration/:id', component: ResetPasswordAutoRegistrationOfInviteesComponent},
    {path: 'trd-registration-form', component:TrdRegistrationFormComponent},
    {path: 'Import-Salesforce-contacts', component: ImportSalesforceContactsComponent },
    {path: 'slot-booking', component: BookSlotWithoutEventComponent},
    {path:'thankyoupage',component:ThankyoupageComponent},
    //{path: 'polls-quiz', component: PollsQuizComponent, data:{name:'polls-quiz'}},
    {path: 'AOC-2020-Question-of-the-Talk', component: AocMumbaiComponent, data:{name:'aoc-quiz'}},
      // {path: 'registration-form-covid', component:RegistrationFormCovidComponent},

   // {path: 'polls-quiz-winners', component: WinnerslistComponent, data:{name:'polls-quiz-winners'}},
    {path: 'AOC-2020-Question-of-the-Talk-Winners', component: AocMumbaiPollsWinnersComponent, data:{name:'aoc-polls-quiz-winners'}},
    {path:'AOC-2020-Live-Update-Live-Streaming',component:AocLiveUpdateAndLiveStreamingComponent},
    {path:'vaiconpolls',component:VaiconpollsComponent},
    {path: 'corona-podcast', component: CoronaComponent},
  {path: 'podcast', component: PodcastSpecialComponent},
{path: 'send-email-for-transcript', component:SendEmailForTranscriptComponent},
{path: 'send-email-for-interview-edit', component:SendEmailForInterviewVideoEditComponent},
{path: 'edit-slot-booking/:id', component:EditBookSlotWithoutEventComponent},
{path: 'send-mailer-kp', component:SendPeriodicMailersComponent},
{path: 'send-mailer-for-interviews', component:SendMailerToDocsComponent},
{path: 'send-mailer/kp/new/:id', component:SendPeriodicMailersComponent},
{path: 'send-blog-mailer', component:SendBlogMailersComponent},
{path: 'select-to-send-mailer-kp-pharma', component:SelectToSendMailerToPharmaComponent},
{path: 'day-wise-updates', component:CoronaDaywiseUpdatesComponent},
{path: 'edit-newsletters', component:EditNewsletterMailerComponent},
    {path: ':event', component:Csi2019pptComponent},
   


  ];

  @NgModule({
  imports: [RouterModule.forRoot(MAINMENU_ROUTES)],
  exports: [RouterModule],
})
export class AppRouting { }
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
