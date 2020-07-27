import {Component, OnInit, ViewChild, Inject, PLATFORM_ID , Renderer2, EventEmitter} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CatagoryServiceService} from '../catagory-service.service';
import {PerfectScrollbarComponent, PerfectScrollbarConfigInterface, PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';
import * as screenfull from 'screenfull';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import {NgForm, FormGroupDirective, FormControl, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";
import {UserServiceService} from "../user-service.service";
import * as moment from 'moment';
//import * as jsPDF from 'jspdf';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {DomSanitizer, Meta, Title} from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';
import {Output} from "@angular/core";
import {PdfViewerComponent} from "ng2-pdf-viewer";
import {AuthResponse, AccountKit} from "ng2-account-kit";
import {HttpErrorResponse} from "@angular/common/http";
//import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
    public configure: PerfectScrollbarConfigInterface = {};
    @ViewChild(PerfectScrollbarComponent) componentScroll: PerfectScrollbarComponent;
    @ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;
    @ViewChild("slideshow") slideshow: any;
    @ViewChild("slideshows") slideshows: any;
    @Output('onSwipeLeft') public onSwipeLeft = new EventEmitter<number>();
    @Output('onSwipeRight') public onSwipeRight = new EventEmitter<number>();
    @ViewChild(PdfViewerComponent) public pdfComponent: PdfViewerComponent;
    inputChecking = new FormControl('', [
        Validators.required
    ]);
    matcher = new MyErrorStateMatcher();
    current: number = 1;
    current1: number = 1;
    slug: string;
    single_article: any;
    articles: any;
    article: any;
    seo_des_one: any;
    doctor_name_one: any;
    specialisation_one: any;
    url_one: any;
    title_one: any;
    seo_key_one: any;
    hospital_one: any;
    slug_one: any;
    video_one: any;
    headline_one: any;
    headline_two: any;
    name: string;
    arr: Array<string> = [];
    arr2: any = [];
    sat: string;
    conv: object[] = [];
    latest: object[] = [];
    public imageSources: string[] = [];
    more_videos: any;
    event: any;
    public imagesUrls;
    load: any;
    fullscreen: any;
    downloads: any;
    model: any ={};
    published: any;
    tagss: any;
    id: any;
    likes: any;
    total_art: any;
    i: any;
    singleSlide: any;
    isBrowser: boolean;
    isBrowsers: boolean;
    lastSlide: any;
    lastSlided: any;
    load_data: any;
    organizer: any;
    eventname: any;
    page: number = 1;
    totalPages: number;
    isLoaded: boolean = false;
    pdfSrc: string;
    activated: any;
    active: any;
    lshare: any;
    model2: any = {};
    model3: any = {};
    model4: any ={};
    users: any;
    logged: boolean = false;
    loading: boolean = true;
    islogin: boolean = true;
    isregister: boolean = false;
    username: any;
    message: any;
    foundresult: any;
    searching : boolean = false;
    searched: boolean = false;
    p: number = 1;
    show_m_search: boolean = false;
    constructor(
        private _renderer2: Renderer2, @Inject(DOCUMENT) private _document,
        @Inject(PLATFORM_ID) private platformId,
        //@Inject('Window') private window: Window,
        private titleService: Title, private meta: Meta,
        private dialog: MatDialog, private route: ActivatedRoute, private router: Router,
        private service: CatagoryServiceService, private serviceh: ArticleService) {
        this.isBrowser = isPlatformBrowser(platformId);
        this.isBrowsers = isPlatformServer(platformId);
        this.users = (localStorage.getItem('trdUser'));
        console.log('user',this.users);
        if(this.users==null){
            this.dialog.open(SinglePopup2, {
                width: '600px',
                height: 'auto',
                panelClass: 'myapp-no-padding-dialog',
                data: {islogin:'true'}
            });
            this.logged = false;
            this.islogin=true;
            this.isregister = false;
        } else{
            this.logged = true;
            this.username = JSON.parse(localStorage.getItem('trdUser'));
            this.username = JSON.parse(JSON.stringify(this.username['data'][0]['username']));
        }
    }


    ngOnInit() {
        this.lshare = false;
        this.active = true;
        this.activated = false;
        this.loading = true;
        this.fullscreen = false;
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
        this.load = false;
        this.downloads = false;
        this.imagesUrls = [
            'https://storage.googleapis.com/web-assets/presentations/wccpci_2016/Day_2/O.P.YADAVA/Slide1.JPG',
            'https://storage.googleapis.com/web-assets/presentations/wccpci_2016/Day_2/O.P.YADAVA/Slide2.JPG',
            'https://storage.googleapis.com/web-assets/presentations/wccpci_2016/Day_2/O.P.YADAVA/Slide3.JPG'
        ];


        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
        //this.presentation() ;
        this.route.params.subscribe(params => {
            // this.titleService.setTitle(params['slug'] + '|TheRighDoctors');

            if (params['id']) {
                this.id = params['id'];
                console.log('dajhsdsd');
                this.presentation(params['id']);
            }
            this.event = params['event'];
            if(this.event=="dr-ulhas-pandurangi-fifteenth-annual-electrocardiology-course-basics-and-beyond-madras-medical-mission-2018")
            {
                this.eventname ="Presentations From 15th Annual ECG Course";
                this.organizer = "Dr.Ulhas Pandurangi";
            } else if(this.event=="dr-ulhas-pandurangi-sixth-live-cardiac-electrophysiology-workshop-madras-medical-mission-2018"){
                this.eventname ="Presentations From 6th Live Cardiac Electrophysiology Workshop";
                this.organizer ="Dr.Ulhas Pandurangi";
            } else if(this.event =="stemi-india-lucknow-2018"){
                this.eventname="";
                this.organizer="Dr.Rishi Sethi";
            } else if(this.event=="wccicc-2017"){
                this.eventname="";
                this.organizer="Dr.G.N.Mahapathra";
            }else if(this.event=="wccpci-2016")
            {
                this.eventname="WCCPCI 2016";
                this.organizer="Dr.H.K.Chopra";
            }
            else if(this.event=="apvic"){
                this.eventname="";
                this.organizer="Dr.N.N.Khanna";
            }else if(this.event=="csikochi-2016"){
                this.eventname="";
                this.organizer="Dr.P.P.Mohanan";
            }else if(this.event=="csinic-2016"){
                this.eventname="";
                this.organizer="Dr.K.Saratchandra.";
            }else if(this.event=="c3"){
                this.eventname="";
                this.organizer="Dr.Rajesh Dave";
            }else if(this.event=="ihj-2015"){
                this.eventname="";
                this.organizer="Dr.Sundeep Mishra";
            }
            else{
                this.eventname = this.event;
            }
            //this.presentation_all(this.event);
            this.morevideos();
        });
        this.current = this.slideshow.getRightSideIndex()+1;
        this.current1 = this.slideshows.getRightSideIndex()+1;
    }
    allow_m_search(){
        if(this.show_m_search==true) {
            this.show_m_search = false;
        } else{
            this.show_m_search = true;
        }
    }
    searchResults(){
        this.p = 1;
        this.searching = true;
        this.searched = false;
        this.service.searchforpresentation(this.model.searchinput).subscribe(
            data=>{
                if(data['success']){
                    this.message = data['count'] + " Results found for ";
                    this.foundresult = data['data'];
                } else{
                    this.message = "No Results Found for ";
                    this.p = 0;
                    this.foundresult = null;
                }
                this.searching = false;
                this.searched = true;
            }
        ),(error)=>{
            console.log(error);
            this.message = "No Internet Connection";
            this.searching = false;
            this.searched = true;
        }
    }
    thumbSelect(index){
        this.slideshows.goToSlide(index);
        this.current1 = this.slideshows.getRightSideIndex();
    }
    showRightdiv(){
        if(this.active == false){
            this.active = true;
        } else{
            this.active = false;
        }
    }
    showShares(){
        if(this.lshare == false){
            this.lshare = true;
        } else{
            this.lshare = false;
        }
    }
    activeThumbnails(){
        if(this.activated==true){
            this.activated = false;
        } else{
            this.activated = true;
        }
    }
    afterLoadComplete(pdfData: any) {
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
    }
    nextPage() {
        this.page++;
    }
    prevPage() {
        this.page--;
    }
    //Download presentation
//  getBase64Image(img) {
//      // put your code which is access window variable
//      var canvas = document.createElement("canvas");
//      console.log("image");
//      canvas.width = 500;
//      canvas.height = 450;
//      var ctx = canvas.getContext("2d");
//      ctx.drawImage(img, 0, 0, 500, 450);
//      var dataURL = canvas.toDataURL("image/png");
//      return dataURL;
//
//  }
//
////var base64 = (document.getElementById("imageid"));
//  download(){
//    if (this.isBrowser || this.isBrowsers) {
//      // put your code which is access window variable
//      let doc = new jsPDF();
//      for (var i = 0; i < this.imageSources.length; i++) {
//        this.downloads = true;
//        let imageData = this.getBase64Image(document.getElementById('img' + i));
//        console.log(imageData);
//        doc.addImage(imageData, "JPG", 5, 50, 200, 180);
//        doc.addPage();
//      }
//      let done = doc.save(this.article['headline'] + '-' + this.article['doctor_name'] + '.pdf');
//      this.downloads = false;
//    }
//  }
    nextSlide(){
        if(this.current==this.imageSources.length || this.current1==this.imageSources.length){
            for (this.i =0;this.i<=this.conv.length;this.i++){
                if(this.id==this.conv[this.i]['_id']) {
                    window.location.href='/specials/' + this.conv[this.i + 1]['event'] + '/presentation/' + this.conv[this.i + 1]['doctor_name'] + '/' + this.conv[this.i + 1]['_id'];
                    this.presentation(this.conv[this.i + 1]['_id']);
                }
            }
            if(this.id==this.conv[this.conv.length]['_id']){
                window.location.href='/specials/'+this.conv[0]['event']+'/presentation/'+this.conv[0]['doctor_name']+'/'+this.conv[0]['_id'];
                this.presentation(this.conv[0]['_id']);
            }
        }
    }

    shareSingleSlide(){
        this.singleSlide = JSON.stringify(this.imageSources[this.current-1]);
    }
    //for desktop
    onPrevious(){
        this.lastSlided = false;
        if(this.current!=1 && this.current<=this.imageSources.length){
            this.current = this.current-1;
        } else {
            this.current = this.imageSources.length;
            this.lastSlided=true;
        }
        this.slideshow.onSlide(-1);
    }
    onNext(){
        this.lastSlided = false;
        this.current = this.slideshow.getRightSideIndex()+1;
        this.slideshow.onSlide(1);
        if(this.current==this.imageSources.length)
        {
            this.slideshow.onSlide(1);
            this.lastSlided=true;
        }
    }
    //for mobile
    //onswiping left
    onPreviousmm(){
        this.lastSlide = false;
        if(this.current1!=1 && this.current1<=this.imageSources.length){
            this.current1 = this.current1-1;
        } else {
            this.current1 = this.imageSources.length;
            this.lastSlide=true;
        }
    }
    //onswiping right
    onNextmm(){
        this.lastSlide = false;
        this.current1 = this.slideshows.getRightSideIndex();
        if(this.current1==this.imageSources.length)
        {
            this.current1 = this.current1+1;
            this.lastSlide = true;
        }
    }
    //on clicking arrows
    onPreviousm(){
        this.lastSlide = false;
        if(this.current1!=1 && this.current1<=this.imageSources.length){
            this.current1 = this.current1-1;
        } else {
            this.current1 = this.imageSources.length;
            this.lastSlide=true;
        }
        this.slideshows.onSlide(-1);
    }
    onNextm(){
        this.lastSlide = false;
        this.current1 = this.slideshows.getRightSideIndex()+1;
        this.slideshows.onSlide(1);
        if(this.current1==this.imageSources.length)
        {
            this.lastSlide = true;
        }
    }
    //for fullscreen in desktop
    toggleon(){
        screenfull.toggle();
        this.fullscreen = true;
    }
    toggleoff(){
        screenfull.toggle();
        this.fullscreen = false;
    }

    //
    ngAfterViewInit() {
        console.log('Directive geometry', this.directiveScroll.geometry());

        console.log('Component geometry', this.componentScroll.directiveRef.geometry());
    }

    onScrollToXY(x: number, y: number) {
        this.directiveScroll.scrollTo(x, y, 500);

        this.componentScroll.directiveRef.scrollTo(x, y, 500);
    }

    onScrollToTop() {
        this.directiveScroll.scrollToTop();

        this.componentScroll.directiveRef.scrollToTop();
    }

    onScrollToLeft() {
        this.directiveScroll.scrollToLeft();

        this.componentScroll.directiveRef.scrollToLeft();
    }

    onScrollToRight() {
        this.directiveScroll.scrollToRight();

        this.componentScroll.directiveRef.scrollToRight();
    }

    onScrollToBottom() {
        this.directiveScroll.scrollToBottom();

        this.componentScroll.directiveRef.scrollToBottom();
    }

    createRange(number) {
        var items: number[] = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    }

    upvote(){
        this.model.likes = this.article['likes']+1;
        this.service.update_totallikes(this.model,this.id).subscribe(
            data3=>{
            }
        );
        if(this.likes==0)
        {
            this.likes = 1;
        } else {
            this.likes = this.article['likes'] + 1;
        }
    }
    presentation(id) {
        let slug1: string;
        let sg: string;
        this.loading = true;
        this.service.get_presentation(id).subscribe(
            data => {
                if(data['success']){
                    console.log(data);
                    this.pdfSrc=data['data']['pdfSrc'];
                    if(this.pdfSrc){
                        this.loading = false;
                    }
                    console.log('total views' + data['data']['total_views']);
                    this.model.total_views=data['data']['total_views']+1;
                    this.service.update_totalviews(this.model,id).subscribe(
                        data2=>{
                        }
                    );
                    this.presentation_all(this.event);
                }
                this.article = data['data'];
                this.likes = this.article['likes'];
                if(this.likes==null)
                {
                    this.likes = 0;
                }
                this.published = moment(this.article['created_at']).format('DD-MM-YYYY');

                let s = this._renderer2.createElement('script');
                s.type = `application/ld+json`;
                s.text = `
            {
  "@context": "http://schema.org",
  "@type": "VideoObject",
  "name":"`+this.article['headline']+`",
  "description": "`+this.article['headline']+`",
  "thumbnailUrl": "`+this.article['url']+`",
  "uploadDate": "2018-08-10T08:00:00+08:00",
  "duration": "PT1M33S",
  "publisher": {
    "@type": "Organization",
    "name": "TheRightDoctors",
    "logo": {
      "@type": "ImageObject",
      "url": "https://therightdoctors.com/assets/new-home-page/single/images/logo.jpg",
      "width": 600,
      "height": 60
    }
  },
  "contentUrl": "`+this.article['url']+`",
  "embedUrl": "https://therightdoctors.com/`+this.article['event']+`/`+this.article['similar_topic']+`/`+this.article['slug']+`",
  "interactionCount": "2347"
}`;
                this._renderer2.appendChild(this._document.body, s);
                this.titleService.setTitle(this.article['headline'] + ' | TheRightDoctors');
                this.meta.updateTag({name: 'description', content:  this.article['headline'] + ' TheRightDoctors '});
                this.meta.updateTag({name: 'keywords', content: this.article['headline'] + ' ' + this.article['seo_keywords']});
                /*this.meta.updateTag({name: 'rel', href: this.article['image_url']});*/
                this.meta.updateTag({
                    property: 'vr:canonical',
                    content: 'https://therightdoctors.com/' + this.article['event'] + '/' + this.article['similar_topic'] + '/' + this.article['slug']
                });
                this.meta.updateTag({property: 'og:title', content: this.article['headline']});
                this.meta.updateTag({property: 'og:description', content: this.article['headline']});
                this.meta.updateTag({
                    property: 'og:url',
                    content: 'https://therightdoctors.com/'+this.article['event'] + '/' + this.article['similar_topic'] + '/' + this.article['slug']
                });
                this.meta.updateTag({property: 'og:image', content: this.article['url']});
                this.meta.updateTag({property: 'og:image:secure_url', content: this.article['url']});

                this.meta.updateTag({name: 'twitter:title', content: this.article['headline']});
                this.meta.updateTag({name: 'twitter:description', content: this.article['headline']});
                /*this.meta.updateTag({name: 'twitter:text:description', content: this.article['headline2']});*/
                this.meta.updateTag({name: 'twitter:image', content: this.article['url']});
                this.meta.updateTag({
                    name: 'twitter:player',
                    content: this.article['url']});
                this.meta.updateTag({name: 'twitter:player:stream', content: this.article['url']});
                //if(JSON.parse(localStorage.getItem('mail_subscribed'))==null){
                //  const dialogRef = this.dialog.open(SinglePopup2, {
                //    width: '750px',
                //    data: {
                //      headline: this.article['headline'],
                //      //headline2:this.single_article['headline2'],
                //      guest1: this.article['doctor_name'],
                //      guest1_designation: this.article['specialisation'],
                //      guest1_hospital: this.article['hospital'],
                //      guest1_image_url: this.article['url'],
                //      //guest2: this.single_article['guest2'],
                //      //guest2_designation: this.single_article['guest2_designation'],
                //      //guest2_hospital: this.single_article['guest2_hospital'],
                //      //guest2_image_url: this.single_article['guest2_image_url'],
                //      //guest3: this.single_article['guest3'],
                //      //guest3_designation: this.single_article['guest3_designation'],
                //      //guest3_hospital: this.single_article['guest3_hospital'],
                //      //guest3_image_url: this.single_article['guest3_image_url'],
                //      //guest4: this.single_article['guest4'],
                //      //guest4_designation: this.single_article['guest4_designation'],
                //      //guest4_hospital: this.single_article['guest4_hospital'],
                //      //guest4_image_url: this.single_article['guest4_image_url'],
                //      //guest5: this.single_article['guest5'],
                //      //guest5_designation: this.single_article['guest5_designation'],
                //      //guest5_hospital: this.single_article['guest5_hospital'],
                //      //guest5_image_url: this.single_article['guest5_image_url'],
                //      //guest6: this.single_article['guest6'],
                //      //guest6_designation: this.single_article['guest6_designation'],
                //      //guest6_hospital: this.single_article['guest6_hospital'],
                //      //guest6_image_url: this.single_article['guest6_image_url'],
                //      link: 'https://therightdoctors.com/specials/' + this.article['event'] + '/presentation/' + this.article['alt']+'/'+this.article['_id'],
                //      image_url: this.article['url'],
                //      type: 'presentation'
                //      }
                //  });
                //}


                this.sat = this.article['slides'][0];
                //console.log("New Data Split",this.sat.split(','));
                if(this.sat) {
                    this.arr2 = this.sat.split(',');
                    console.log('New array after splitting', this.arr2);
                    console.log('Array elements', this.arr2[0]);
                    this.imageSources = this.arr2;
                    this.loading = false;
                }
                this.load = true;

            }
        );
    }

    presentation_all(event) {
        console.log(this.event);
        this.service.get_presentation_all(this.event).subscribe(
            data1 => {
                this.total_art = data1;
                this.articles = data1['data'];
                console.log('articles data ', this.articles);
                console.log('Data data data', data1['data']);
                for(var j=0;j<data1['data'].length;j++)
                {
                    if(this.articles[j]['total_views']<=200)
                    {
                        this.articles[j]['total_views'] = this.rand(200,1000);
                        console.log(this.articles[j]['total_views']);
                        this.service.update_views(this.articles[j],this.articles[j]['_id']).subscribe
                        (data=>{
                            console.log('updating views'+ data);
                        })
                    }
                }
                if(this.articles.length!=this.conv.length) {
                    for (var i = 0; i < data1['data'].length; i++) {
                        this.conv.push(data1['data'][i]);
                    }
                }
                console.log('Conv printing here ', this.conv);
            }
        );
    }
    rand(min,max)
    {
       return Math.floor(Math.random() * max) + min;
    }

    morevideos() {
        this.service.morevideos(this.event).subscribe(
            data1 => {
                this.more_videos = data1['data'];
                if(data1['success']) {
                console.log('Data data data', data1['data']);
                for (var i = 0; i < data1['data'].length; i++) {
                    //this.conv.push(data1['data'][i]);
                    this.latest.push(data1['data'][i]);
                }}

                console.log('Conv printing here ', this.latest);
            }
        );
    }
    changestoPage(type){
        if(type=='login')
        {
            this.dialog.open(SinglePopup2, {
                width: '600px',
                // height: '250px',
                panelClass: 'myapp-no-padding-dialog',
                data: {islogin:'true'}
            });
        } else{
            this.dialog.open(SinglePopup2, {
                width: '600px',
                // height: '250px',
                panelClass: 'myapp-no-padding-dialog',
                data: {isregister:'true'}
        });
        }
    }


    /*public config: ICarouselConfig = {
      verifyBeforeLoad: true,
      log: false,
      animation: true,
      animationType: AnimationConfig.SLIDE,
      autoplay: false,
      autoplayDelay: 2000,
      stopAutoplayMinWidth: 768
    };*/


}


@Component({
    selector: 'app-single-popups',
    templateUrl: 'single-popup.html',
})
export class SinglePopup2 implements OnInit{
    model: any ={};
    model2: any ={};
    model3: any ={};
    model4: any ={};
    model5: any ={};
    load: boolean = false;
    is_subscribe: boolean = false;
    lr: boolean = true;
    islogin: boolean = true;
    isregister: boolean = false;
    phone_checked: any;
    message: any;
    verification_code: boolean = false;
    m_verify: boolean = false;
    isRegister1: boolean = true;
    isRegister2: boolean = false;
    isRegister3: boolean = false;
    load1: boolean = false;
    load2: boolean = false;
    load3: boolean = false;
    load4: boolean = false;
    isLogin1: boolean = true;
    isLogin2: boolean = false;
    result: any;
    constructor(
        private router: Router,
        private users: UserServiceService,
        public dialogRef: MatDialogRef<SinglePopup2>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(){
        // AccountKit.init({
        //     appId: '1066226316760891',
        //     state: 'awse#456tfg',
        //     version: 'v1.1'
        // });
        if(this.data.islogin=='true'){
            this.islogin = true;
            this.isregister = false;
        } else{
            this.isregister = true;
            this.islogin = false;
        }
        this.model4.country_code ='+91';
    }
    // onNoClick(): void {
    //   this.dialogRef.close();
    // }
    close() {
        this.dialogRef.close();
    }
    lreg(){
        if(this.islogin==true)
        {
            this.islogin=false;
            this.isregister = true;
        } else{
            this.islogin=true;
            this.isregister=false;
        }
    }
    editPhone(){
        this.isRegister2 = true;
        this.isRegister3 = false;
    }
    forgot(){
        this.isLogin1 = false;
        this.isLogin2 = true;
    }
    validateLogin(){
        this.load4 = true;
        console.log(JSON.stringify(this.model2.email));
        console.log(JSON.stringify(this.model2.password));
        this.users.login(this.model2).subscribe(
            data => {
                console.log(data['success']);
                if(data['success'])
                {
                    var user_details = data;
                    localStorage.setItem('trdUser', JSON.stringify(user_details));
                    //alert('Logged in successfully...');
                    this.load4= false;
                    window.location.reload();
                } else{
                    this.load4 = false;
                    alert('Wrong email and password Or Verify your email');
                }
            });
    }
    verify_code(){
        this.load3 = true;
        console.log(this.model4.token);
        console.log(this.model4.country_code);
        console.log(this.model4.phone_number);
        console.log(this.model3.email);
        this.users.verify_code2(this.model4.token,this.model4.country_code,this.model4.phone_number,this.model3.email).subscribe
        (data=> {
            console.log(data);
            if(data['success']){
                //alert('Verification Done');
                this.m_verify = true;
                this.load3 = false;
            } else{
                alert('Already Verified this number...Try with another number');
                this.isRegister2=true;
                this.isRegister3 = false;
                this.load3 = false;
            }
        });
    }
    phone_btn_onclick(): void {
        this.load2 = true;
        console.log('phone');
        if(this.model4.phone_number.toString().length==10) {
            this.users.verification_code_send2(this.model4.phone_number,this.model4.country_code).subscribe
            (data=> {
                console.log(data);
                if (data['success']) {
                    alert('Verification code sent to your mobile number');
                    this.isRegister2=false;
                    this.isRegister3=true;
                    this.load2 = false;
                } else {
                    this.load2 = false;
                    alert('Error or Already verified this number');
                }
            });
        } else{
            alert('Enter valid mobile number');
        }
    }
    validateRegister(){
        this.model3.url = this.router.url;
        this.load1 = true;
        this.users.register(JSON.stringify(this.model3)).subscribe(
            data => {
                console.log(data['success']);
                if(data['success']==true)
                {
                    //alert('Registered successfully...');
                    this.isRegister1 = false;
                    this.isRegister2 = true;
                    this.load1 = false;
                    
                } else{
                    this.load1 = false;
                    alert('Already Registered with this email');
                }
            });
    }
    pwd_reset () {
        this.load4 = true;
        this.result = '';
        if (this.model5.email) {
            this.users.reset_password(this.model5.email)
                .subscribe(data => {
                        if (data['success']) {
                            this.load4 = false;
                            this.result = 'Reset link sent to your email';
                            //alert('Reset Link sent to your email');
                        } else {
                            this.load4 = false;
                            this.result = 'Please enter correct email address';
                            alert('Please enter correct email address');
                        }
                    },
                    (err: HttpErrorResponse)=>{
                        this.load = false;
                        this.result = 'No Internet Connection';
                        console.log(err);
                    });
        }
    }
    subscribe_email(){
        this.load = true;
        this.model.headline = this.data['headline'];
        this.model.headline2 = this.data['headline2'];
        this.model.guest1 = this.data['guest1'];
        this.model.guest1_designation = this.data['guest1_designation'];
        this.model.guest1_hospital = this.data['guest1_hospital'];
        this.model.guest1_image_url = this.data['guest1_image_url'];
        this.model.type = this.data['type'];
        //this.model.guest2 = this.data['guest2'];
        //this.model.guest2_designation = this.data['guest2_designation'];
        //this.model.guest2_hospital = this.data['guest2_hospital'];
        //this.model.guest2_image_url = this.data['guest2_image_url'];
        //this.model.guest3 = this.data['guest3'];
        //this.model.guest3_designation = this.data['guest3_designation'];
        //this.model.guest3_hospital = this.data['guest3_hospital'];
        //this.model.guest3_image_url = this.data['guest3_image_url'];
        //this.model.guest4 = this.data['guest4'];
        //this.model.guest4_designation = this.data['guest4_designation'];
        //this.model.guest4_hospital = this.data['guest4_hospital'];
        //this.model.guest4_image_url = this.data['guest4_image_url'];
        //this.model.guest5 = this.data['guest5'];
        //this.model.guest5_designation = this.data['guest5_designation'];
        //this.model.guest5_hospital = this.data['guest5_hospital'];
        //this.model.guest5_image_url = this.data['guest5_image_url'];
        //this.model.guest6 = this.data['guest6'];
        //this.model.guest6_designation = this.data['guest6_designation'];
        //this.model.guest6_hospital = this.data['guest6_hospital'];
        //this.model.guest6_image_url = this.data['guest6_image_url'];
        this.model.link = this.data['link'];
        this.model.image_url = this.data['image_url'];
        console.log(this.model);
        if (this.model.email) {
            this.users.subscribe_mail(JSON.stringify(this.model))
                .subscribe(data => {
                    if (data['success']) {
                        this.load = false;
                        let myObj = { email: "verified"};
                        localStorage.setItem('mail_subscribed', JSON.stringify(myObj));
                        alert('Thank you for subscribing...');
                        this.close();
                    } else {
                        this.load = false;
                        alert('Please enter correct email address');
                    }
                });
        }
    }
}