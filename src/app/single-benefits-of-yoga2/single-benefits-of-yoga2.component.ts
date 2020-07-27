import { Component, OnInit } from '@angular/core';
import {APP_ID, Inject, PLATFORM_ID} from '@angular/core';
import {CatagoryServiceService} from '../catagory-service.service';
import {ActivatedRoute, Router} from '@angular/router';

import {Meta, Title} from '@angular/platform-browser';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {UserServiceService} from "../user-service.service";
@Component({
  selector: 'app-single-benefits-of-yoga2',
  templateUrl: './single-benefits-of-yoga2.component.html',
  styleUrls: ['./single-benefits-of-yoga2.component.css']
})
export class SingleBenefitsOfYoga2Component implements OnInit {
  slug: string;
  id: any;
  users: any;
  event:any;
  logged: boolean = false;
  loading: boolean = true;
  islogin: boolean = true;
  id1:any;
  isregister: boolean = false;
  username: any;
  conv: object[] = [];
  single_article: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(APP_ID) private appId: string, private CatagoryService: CatagoryServiceService, private route: ActivatedRoute,
              private titleService: Title, private meta: Meta,private dialog: MatDialog ) {
    this.users = (localStorage.getItem('trdUser'));
    console.log('user',this.users);
    if(this.users==null){
      this.dialog.open(SinglePopup2, {
        width: '600px',
        // height: '250px',
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
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      console.log('hii how  ', this.slug);
      //this.catagory = params['catagory']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      //updates
      this.id = params['id'];
      console.log('hii how  ', this.id);
    });

    this.event=this.slug;
    this.id1=this.id;
    console.log('event ',this.event);
    console.log('slug value',this.id1);
   // this.get_single_benefits_page(this.slug);
    //this.get_single_video(this.slug, this.catagory);
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

  get_single_benefits_page(slug) {
    console.log('get catagory calling');
    this.CatagoryService.get_single_benefits_page(slug).subscribe(
        data => {
          //this.str = "Benefits Of Yoga";
          this.single_article = data['data'];
          for (var i = 0; i < data['data'].length; i++) {
            if (data['data'][i]['doctor_name'] == this.slug) {
              this.conv.push(data['data'][i]);
              console.log('nares', this.conv);
              console.log('hiii', data['data'][i]);


              this.titleService.setTitle(data['data'][i]['title'] + ' | TheRightDoctors.com');
              this.meta.updateTag({
                name: 'description',
                content: ' TheRightDoctors.com ' + ' ' + data['data'][i]['people'][0] + ' ' + data['data'][i]['seo_description']
              });
              this.meta.updateTag({name: 'keywords', content: data['data'][i]['seo_keywords']});
              /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
              this.meta.updateTag({
                property: 'vr:canonical',
                content: 'https://therightdoctors.com/synapse/' + this.id + '/' + this.slug
              });
              this.meta.updateTag({property: 'og:title', content: data['data'][i]['people'][0]});
              this.meta.updateTag({property: 'og:description', content: data['data'][i]['seo_description']});
              this.meta.updateTag({
                property: 'og:url',
                content: 'https://therightdoctors.com/synapse/' + this.id + '/' + this.slug
              });
              this.meta.updateTag({property: 'og:image', content: data['data'][i]['url']});
              this.meta.updateTag({property: 'og:image:secure_url', content: data['data'][i]['url']});
              this.meta.updateTag({name: 'twitter:title', content: data['data'][i]['headline']});
              this.meta.updateTag({name: 'twitter:description', content: data['data'][i]['seo_description']});
              this.meta.updateTag({name: 'twitter:text:description', content: data['data'][i]['seo_description']});
              this.meta.updateTag({name: 'twitter:image', content: data['data'][i]['url']});
              this.meta.updateTag({
                name: 'twitter:url',
                content: 'https://therightdoctors.com/synapse/' + this.id + '/' + this.slug
              });
            }
          }
          console.log('I CANT SEE DATA HERE in single componenet : ', this.conv);
        }
    );
  }
}

  @Component({
    selector: 'app-single-popup2',
    templateUrl: 'single-popup2.html',
  })
  export class SinglePopup2 implements OnInit{

  model: any ={};
  model2: any ={};
  model3: any ={};
  model4: any ={};
  load: boolean = false;
  is_subscribe: boolean = false;
  lr: boolean = true;
  islogin: boolean = true;
  islogin1: boolean = false;
  isregister: boolean = false;
  phone_checked: any;
  message: any;
  verification_code: boolean = false;
  m_verify: boolean = false;
  isRegister1: boolean = true;
  isRegister2: boolean = false;
  isRegister3: boolean = false;
  isclose:boolean = false;
  foundresult: any;
  searching : boolean = false;
  searched: boolean = false;
  p: number = 1;
  show_m_search: boolean = false;
  load1: boolean = false;
  load2: boolean = false;
  load3: boolean = false;
  load4: boolean = false;
  constructor(
      private router: Router,
      private users: UserServiceService,
      public dialogRef: MatDialogRef<SinglePopup2>,
      @Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialog,private service:CatagoryServiceService) {}

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
    this.isclose = true;
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
  editPhone(){
    this.isRegister2 = true;
    this.isRegister3 = false;
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
            this.islogin1 = true;
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
    this.users.register1(JSON.stringify(this.model3)).subscribe(
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


