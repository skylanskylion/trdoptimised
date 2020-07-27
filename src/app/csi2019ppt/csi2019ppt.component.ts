import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
 selector: 'app-csi2019ppt',
 templateUrl: './csi2019ppt.component.html',
 styleUrls: ['./csi2019ppt.component.css']
})
export class Csi2019pptComponent implements OnInit {
  event: any;
  b_url: any;
  ev: any;
  venue: any; 
  constructor(private route: ActivatedRoute, private meta: Meta,
  private _formBuilder: FormBuilder, private titleService: Title) { }
 ngOnInit() {
   this.route.params.subscribe(data => {
//storing the route event parameter value in event variable
     this.event = data['event'];
     console.log(this.event);
    
     if(this.event == 'branding-and-sponsorship-opportunity-for-csi-tv'){
      this.b_url = 'CSI-2019';
      this.ev = 'CSI';
      this.venue = '5th-8th December 2019, New Delhi';
    }
    if(this.event == 'branding-and-sponsorship-opportunity-for-ossicon-tv'){
      this.b_url = 'OSSICON-2020';
      this.ev = 'OSSICON';
      this.venue = '27th-29th February 2020, New Delhi';
    }
    if(this.event == 'branding-and-sponsorship-opportunity-for-isacon-tv'){
      this.b_url = 'ISACON-Odisha';
      this.ev = 'ISA'
      this.venue = '18th-20th October 2019, Bhubaneswar';
    }

    if(this.event == 'branding-and-sponsorship-opportunity-for-cidaap-tv'){
      this.b_url = 'CIDAAP';
      this.ev = 'Lets-CIDAAP';
      this.venue = '15th-16th November 2019, Gurugram';
    }

    if(this.event == 'branding-and-sponsorship-opportunity-for-vsicon-tv'){
       this.b_url = 'VSICON%202019';
       this.ev = 'VSI';
       this.venue = '17th-20th October 2019, HICC, Hyderabad';
     }
    if(this.event == 'branding-and-sponsorship-opportunity-for-esicon-tv'){
     this.b_url = 'ESICON-2019';
     this.ev = 'ESI';
     this.venue = '21st-24th November 2019, Hotel Le Meridian, Nagpur';
   }
   
    // if(this.event == 'branding-and-sponsorship-opportunity-for-soapccon-tv'){
    // this.b_url = 'SOAPCCON-2019';
    // this.ev = 'SOAPCCON';
    // this.venue = '21st-22nd September 2019, Hyderabad';
    // }
    if(this.event == 'branding-and-sponsorship-opportunity-for-usicon-tv'){
      this.b_url = 'USICON-2019';
      this.ev = 'USI';
      this.venue = '15th-17th November 2019, Greater Noida'
      }
    if(this.event == 'branding-and-sponsorship-opportunity-for-neurovascon-tv'){
        this.b_url = 'Neurovascon-2019';
        this.ev = 'NEUROVASCON';
        this.venue = '13th-15th September 2019, Bhubaneswar';
     }
    //  if(this.event == 'branding-and-sponsorship-opportunity-for-iascon-tv'){
    //   this.b_url = 'IASCON-2019';
    //   this.ev = 'IASCON';
    //   this.venue = '27th-28th September 2019, New Delhi';
    //   }
      if(this.event == 'branding-and-sponsorship-opportunity-for-isacon-tv-bengaluru'){
        this.b_url = 'ISACON-2019';
        this.ev = 'ISACON';
        this.venue = '25th-29th November 2019, Bengaluru';
        }
      if(this.event == 'branding-and-sponsorship-opportunity-for-aicog-tv'){
          this.b_url = 'AICOG-2020';
          this.ev = 'AICOG';
          this.venue = '29th January-02nd February 2020, Lucknow';
       }
       if(this.event == 'branding-and-sponsorship-opportunity-for-amasicon-tv'){
        this.b_url = 'AMISICON%202019';
        this.ev = 'AMASICON';
        this.venue = '07th-10th November 2019, Nagpur';
     }
    //  if(this.event == 'glaucoknow-tv-lucknow-proposal'){
    //   this.b_url = 'GLAUCOKNOW%202019';
    //   }
      // if(this.event == 'acrsicon-tv-srinagar-proposal'){
      //   this.b_url = 'ACRSICON%202019';
      //   }
      if(this.event == 'branding-and-sponsorship-opportunity-for-aioc-tv'){
          this.b_url = 'AIOC%202020';
          this.ev = 'AIOC';
          this.venue = '13th-16th February 2020, Gurugram';
       }
    //    if(this.event == 'gujasicon-tv-gujarat-proposal'){
    //     this.b_url = 'GUJASICON';
    //  }
     if(this.event == 'branding-and-sponsorship-opportunity-for-jasicon-tv'){
      this.b_url = 'JASICON%202019';
      this.ev = 'JASICON';
      this.venue = '15th-17th November 2019, Ranchi';
   }
   if(this.event == 'branding-and-sponsorship-opportunity-for-kscasion-tv'){
    this.b_url = 'KSCASICON%202020%20tv';
    this.ev = 'KSCASI';
    this.venue = '19th-20th October 2019, Bangalore';
    }
    if(this.event == 'branding-and-sponsorship-opportunity-for-apicon-tv'){
      this.b_url = 'APICON%202020';
      this.ev = 'API';
      this.venue = '06th-09th January 2020, KNCC, Agra';
      }
    // if(this.event == 'dfsicon-tv-coimbatore-proposal'){
    //     this.b_url = 'DFSICON%202019';
    //  }
    //  if(this.event == 'iancon-tv-hyderabad-proposal'){
    //   this.b_url = 'IANCON%202019';
    //   }
      // if(this.event == 'iasgcon-tv-new-delhi-proposal'){
      //   this.b_url = 'IASGCON%202019';
      //   }
      // if(this.event == 'ifascon-tv-new-delhi-proposal'){
      //     this.b_url = 'IFASCON%202019';
      //  }
       if(this.event == 'branding-and-sponsorship-opportunity-for-ioacon-tv'){
        this.b_url = 'IOACON%202019';
        this.ev = 'IOA';
        this.venue = '19th-24th November 2019, Kolkata';
     }
     if(this.event == 'branding-and-sponsorship-opportunity-for-iria-tv'){
      this.b_url = 'IRIA%202020';
      this.ev = 'IRIA';
      this.venue = '23rd-26th January 2020, Gujarat';
   }
  //  if(this.event == 'branding-and-sponsorship-opportunity-for-isbp-and-pdsi-tv'){
  //   this.b_url = 'ISB%20and%20PDSI';
  //   this.ev = 'ISBandPDSI';
  //   this.venue = ''
  //   }
    if(this.event == 'branding-and-sponsorship-opportunity-for-isnacc-tv'){
      this.b_url = 'ISNACC';
      this.ev = 'ISNACC';
      this.venue = '30th January-02nd February 2020, Chennai';
      }
    // if(this.event == 'pedicon-tv-chennai-proposal'){
    //     this.b_url = 'PEDICON%202019';
    //  }
     if(this.event == 'branding-and-sponsorship-opportunity-for-posicon-tv'){
      this.b_url = 'posicon%202020';
      this.ev = 'POSI';
      this.venue = '09th-12th January 2020, Coimbatore';
   }
   
    if(this.event =='branding-and-sponsorship-opportunity-for-criticare-tv')
    {this.b_url='Critical-care-2019';
     this.ev = 'CRITICARE';
     this.venue = '26th February-01st March 2020, Hyderabad';
  }
  if(this.event =='branding-and-sponsorship-opportunity-for-ispae-tv'){
    this.b_url='ISPAE-2019';
    this.ev = 'ISPAE';
    this.venue = '29th Nov-1st Dec 2019, Kolkata';
  }

 if(this.event =='branding-and-sponsorship-opportunity-for-anciapp-tv'){
   this.b_url='ANCIAPP2019';
   this.ev = 'ANCIPP';
   this.venue = '14th-17th November 2019, Mumbai';
  }
 if(this.event =='wirco-tv-mumbai-proposal'){
   this.b_url='WIROC%202019';
   this.ev = 'WIROC';
   this.venue = '20th-22nd December 2019, Mumbai';
  }
 if(this.event =='branding-and-sponsorship-opportunity-for-apsicon-tv'){
   this.b_url='APSICON%202019';
   this.ev = 'APSI';
   this.venue = '11th-15th December 2019, Bhubaneswar';
  }

 //if(this.event =='asricon-tv-kanyakumari-proposal'){this.b_url='ASRICON%202019';}
 if(this.event =='branding-and-sponsorship-opportunity-for-iactacon-tv'){
   this.b_url='IACTACON%202020';
  this.ev = 'IACTA';
  this.venue = '07th-09th February 2020, Goa';
  }
 //if(this.event =='icccon-tv-kochi-proposal'){this.b_url='ICCCON%202019';}
 if(this.event =='branding-and-sponsorship-opportunity-for-vaicon-tv'){
   this.b_url='VAICON%202020';
  this.ev = 'VAI';
  this.venue = '16th-19th January 2020, The Lalit, Mumbai';
  }
//  if(this.event =='skullbasecon-tv-tamilnadu-proposal'){this.b_url='Skullbasecon';}
 if(this.event =='branding-and-sponsorship-opportunity-for-ezusicon-tv'){
   this.b_url='EZUSI%202019';
   this.ev = 'EZUSI';
   this.venue ='18th-19th October 2019, Jharkand';
  }
 if(this.event =='branding-and-sponsorship-opportunity-for-iages-tv'){
   this.b_url='IAGES-%202020';
   this.ev ='IAGES';
   this.venue = '7th-9th Feruary 2020, Guwahati';
  }
 //if(this.event =='cigicon-tv-mumbai-proposal'){this.b_url='CIGICON%202019';}
 if(this.event =='branding-and-sponsorship-opportunity-for-ancipscon-tv'){
   this.b_url='ANCIP-%202020';
   this.ev = 'ANCIP';
   this.venue = '22nd-25th january 2020, Kolkata';
  }
 if(this.event =='branding-and-sponsorship-opportunity-for-asiraj-tv'){
   this.b_url='ASIRAJ-2019';
   this.ev = 'ASIRAJ';
    this.venue = '18th-20th Ocotober 2019, Jodhpur,Rajasthan';
  }
 //if(this.event =='iaci-tv-jaipur-proposal'){this.b_url='IACI%20-2019';}
 if(this.event =='branding-and-sponsorship-opportunity-for-iactscon-tv'){
   this.b_url='IACTSCON-%202020';
    this.ev = 'IACTS';
    this.venue = '6th-9th February 2020, Ahmedabad, Gujarat';
  }
 if(this.event =='branding-and-sponsorship-opportunity-for-iracon-tv'){
   this.b_url='iracon%20-2019';
  this.ev = 'IRA';
  this.venue = '5th-8th December 2019, Puducherry';
}
 if(this.event =='branding-and-sponsorship-opportunity-for-isacon-tv-amritsar'){
   this.b_url='ISACON%202019-Amritsar';
   this.ev = 'ISA';
   this.venue ='14th-16th February 2020, Amritsar';
  }
 //if(this.event =='isacon-tv-vadodara-proposal'){this.b_url='ISACON-%20VADODARA';}
 //if(this.event =='wzusicon-tv-rajkot-proposal'){this.b_url='WZUSICON-2019';}
 if(this.event =='branding-and-sponsorship-opportunity-for-echoindia-tv'){
   this.b_url='Echo%20India';
   this.ev = 'ECHOINDIA';
   this.venue = '7th-10th November 2019, Kolkata';}

 if(this.event =='branding-and-sponsorship-opportunity-for-iapscon-tv'){
   this.b_url='IAPSCON%202019';
   this.ev = 'IAPS';
   this.venue = '30th Oct-02nd November 2019, New Delhi';
  }
 if(this.event =='branding-and-sponsorship-opportunity-for-isncon-tv'){
   this.b_url='ISNCON%202019';
   this.ev = 'ISN';
   this.venue = '21st-24th November 2019, Chandigarh';
  }
 if(this.event =='branding-and-sponsorship-opportunity-for-pericon-tv'){
   this.b_url='PERICON%202019';
   this.ev = 'PERI';
    this.venue = '1st-3rd November 2019, Kochi';
  }
 
 if(this.event =='branding-and-sponsorship-opportunity-for-neurologyupdatemumbai-tv'){
   this.b_url='Neurology%20Update%20Mumbai';
   this.ev = 'NEUROLOGYUPDATEMUMBAI';
   this.venue = '14th-16th February 2020, Mumbai';}
//  if(this.event =='inshlt-tv-delhi-proposal'){this.b_url='INSHLT';}
 if(this.event =='branding-and-sponsorship-opportunity-for-isacon-tv-kerala'){
   this.b_url='ISACON%20kerala%202019';
   this.ev = 'ISA';
   this.venue = '18th-20th October 2019, Kerala';
  }
 if(this.event =='branding-and-sponsorship-opportunity-for-aansim-tv'){
   this.b_url='AANSIM%202019';
   this.ev = 'AANSIM';
   this.venue = '05th-08th December 2019, Mumbai';
  }
 if(this.event =='branding-and-sponsorship-opportunity-for-mpsicon-tv'){
   this.b_url='MPSICON%202020/';
   this.ev = 'MPSI';
  this.venue = '22nd-23rd February 2020, Bhopal';
}
 //if(this.event =='dermacon-tv-pune-proposal'){this.b_url='Dermacon-2020';}
 if(this.event =='branding-and-sponsorship-opportunity-for-mahapedicon-tv'){
   this.b_url='Mahapedicon%20%202019';
   this.ev = 'MAHAPEDICON';
   this.venue = '15th-17th November 2019, Amravati';
  }
 if(this.event =='branding-and-sponsorship-opportunity-for-c2d2-tv'){
   this.b_url='C2D2';
   this.ev = 'C2D2';
   this.venue = '23rd-25th November 2019, Mumbai';}
 if(this.event =='branding-and-sponsorship-opportunity-for-gcdc-tv'){
   this.b_url='GCDC%202019';
  this.ev = 'GCDC';
  this.venue = '18th-20th October 2019, Kolkata';
}
 if(this.event =='branding-and-sponsorship-opportunity-for-iactscme-tv'){
   this.b_url='IACTS%20CME';
   this.ev = 'IACTSCME';
   this.venue = '15th-16th November 2019, Jammu';}

   if(this.event =='branding-and-sponsorship-opportunity-for-isarcon-tv'){
    this.b_url='ISARCON%202019';
    this.ev = 'ISAR';
    this.venue = '08th-10th November 2019, New Delhi';}

    
 console.log('else consition');
 this.titleService.setTitle(this.ev +'| TheRightDoctors');
this.meta.updateTag({name: 'description', content: 'TheRightDoctors: Branding and Sponsorship Opportunity for '+ this.ev +' tv'});
this.meta.updateTag({name: 'keywords', content: this.ev+ ', TheRightDoctors'});
/*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
this.meta.updateTag({
    property: 'vr:canonical',
    content: 'https://therightdoctors.com/'+ this.event
});
this.meta.updateTag({property: 'og:title', content: 'TheRightDoctors: Branding and Sponsorship Opportunity for '+ this.ev +' tv'});
this.meta.updateTag({property: 'og:description', content:  this.venue });
this.meta.updateTag({
    property: 'og:url',
    content: 'https://therightdoctors.com/' + this.event
});
this.meta.updateTag({name: 'twitter:title', content: 'TheRightDoctors: Branding and Sponsorship Opportunity for '+ this.ev +' tv'});
this.meta.updateTag({name: 'twitter:description', content: this.venue });

this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/'+this.b_url+'/Slide2.PNG'});
this.meta.updateTag({property: 'og:image:secure_url', content: 'https://storage.googleapis.com/web-assets/presentations-2019/'+this.b_url+'/Slide2.PNG'});
this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/'+this.b_url+'/Slide2.PNG'});
this.meta.updateTag({
 name: 'twitter:url',
 content: 'https://therightdoctors.com/'+ this.event});
this.meta.updateTag({name: 'twitter:text:description', content: this.event +' TheRightDoctors ' + this.venue});

if(this.event == 'knowledge-partner-proposal-services')
    {
      console.log('if condition');
     this.titleService.setTitle('TheRightDoctors: Digital Knowledge Partner Services');
     this.meta.updateTag({name: 'description', content: 'TheRightDoctors: Digital Knowledge Partner Services'});
     this.meta.updateTag({name: 'keywords', content: 'Presentation,Digital Knowledge Partner Services,TheRightDoctors'});
     /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
     this.meta.updateTag({
         property: 'vr:canonical',
         content: 'https://therightdoctors.com/'+ this.event
     });
     this.meta.updateTag({property: 'og:title', content: 'TheRightDoctors: Digital Knowledge Partner Services'});
     this.meta.updateTag({property: 'og:description', content: 'Amplify.Connect.Engage.Interact'});
     this.meta.updateTag({
         property: 'og:url',
         content: 'https://therightdoctors.com/' + this.event
     });
     this.meta.updateTag({name: 'twitter:title', content: 'TheRightDoctors: Digital Knowledge Partner Services'});
     this.meta.updateTag({name: 'twitter:description', content: 'Amplify.Connect.Engage.Interact'});
   
     this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/KPP.jpg'});
    this.meta.updateTag({property: 'og:image:secure_url', content:'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/KPP.jpg' });
    this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/KPP.jpg'});
    this.meta.updateTag({
     name: 'twitter:url',
     content: 'https://therightdoctors.com/'+ this.event});
   this.meta.updateTag({name: 'twitter:text:description', content: 'Amplify.Connect.Engage.Interact'});
   
   }
//digital-knowledge-partner-services
if(this.event == 'digital-knowledge-partner-services')
    {
      console.log('if condition');
     this.titleService.setTitle('TheRightDoctors: Digital Knowledge Partner Services');
     this.meta.updateTag({name: 'description', content: 'TheRightDoctors: Digital Knowledge Partner Services'});
     this.meta.updateTag({name: 'keywords', content: 'Presentation,Digital Knowledge Partner Services,TheRightDoctors'});
     /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
     this.meta.updateTag({
         property: 'vr:canonical',
         content: 'https://therightdoctors.com/'+ this.event
     });
     this.meta.updateTag({property: 'og:title', content: 'TheRightDoctors: Digital Knowledge Partner Services'});
     this.meta.updateTag({property: 'og:description', content: 'Amplify.Connect.Engage.Interact'});
     this.meta.updateTag({
         property: 'og:url',
         content: 'https://therightdoctors.com/' + this.event
     });
     this.meta.updateTag({name: 'twitter:title', content: 'TheRightDoctors: Digital Knowledge Partner Services'});
     this.meta.updateTag({name: 'twitter:description', content: 'Amplify.Connect.Engage.Interact'});
   
     this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/KPP.jpg'});
    this.meta.updateTag({property: 'og:image:secure_url', content:'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/KPP.jpg' });
    this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/KPP.jpg'});
    this.meta.updateTag({
     name: 'twitter:url',
     content: 'https://therightdoctors.com/'+ this.event});
   this.meta.updateTag({name: 'twitter:text:description', content: 'Amplify.Connect.Engage.Interact'});
   
   }
   if(this.event == 'post-event-branded-app')
   {
     console.log('if condition');
    this.titleService.setTitle('TheRightDoctors: Post Event Branded APP');
    this.meta.updateTag({name: 'description', content: 'TheRightDoctors: Post Event Branded APP'});
    this.meta.updateTag({name: 'keywords', content: 'TheRightDoctors: Post Event Branded APP'});
    /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
    this.meta.updateTag({
        property: 'vr:canonical',
        content: 'https://therightdoctors.com/'+ this.event
    });
    this.meta.updateTag({property: 'og:title', content: 'TheRightDoctors: Post Event Branded APP'});
    this.meta.updateTag({property: 'og:description', content: 'Video.Blog.Podcast.Slide'});
    this.meta.updateTag({
        property: 'og:url',
        content: 'https://therightdoctors.com/' + this.event
    });
    this.meta.updateTag({name: 'twitter:title', content: 'TheRightDoctors: Post Event Branded APP'});
    this.meta.updateTag({name: 'twitter:description', content: 'Video.Blog.Podcast.Slide'});
  
    this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/Post-Event-Branded-App.jpg'});
   this.meta.updateTag({property: 'og:image:secure_url', content:'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/Post-Event-Branded-App.jpg' });
   this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/Post-Event-Branded-App.jpg'});
   this.meta.updateTag({
    name: 'twitter:url',
    content: 'https://therightdoctors.com/'+ this.event});
  this.meta.updateTag({name: 'twitter:text:description', content: 'Video.Blog.Podcast.Slide'});
  
  }

  if(this.event == 'branding-and-sponsorship-opportunity-for-your-conference-tv')
   {
     console.log('if condition');
    this.titleService.setTitle('TheRightDoctors:Branding and Sponsorship Opportunity for Your Conference tv');
    this.meta.updateTag({name: 'description', content: 'TheRightDoctors:Branding and Sponsorship Opportunity for Your Conference tv'});
    this.meta.updateTag({name: 'keywords', content: 'TheRightDoctors:Branding and Sponsorship Opportunity for Your Conference tv'});
    /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
    this.meta.updateTag({
        property: 'vr:canonical',
        content: 'https://therightdoctors.com/'+ this.event
    });
    this.meta.updateTag({property: 'og:title', content: 'TheRightDoctors:Branding and Sponsorship Opportunity for Your Conference tv'});
    this.meta.updateTag({property: 'og:description', content: 'Video.Blog.Podcast.Slide'});
    this.meta.updateTag({
        property: 'og:url',
        content: 'https://therightdoctors.com/' + this.event
    });
    this.meta.updateTag({name: 'twitter:title', content: 'TheRightDoctors:Branding and Sponsorship Opportunity for Your Conference tv'});
    this.meta.updateTag({name: 'twitter:description', content: 'Video.Blog.Podcast.Slide'});
  
    this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/New-Kpp.jpg'});
   this.meta.updateTag({property: 'og:image:secure_url', content:'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/New-Kpp.jpg' });
   this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/presentations-2019/Event-Presentation/New-Kpp.jpg'});
   this.meta.updateTag({
    name: 'twitter:url',
    content: 'https://therightdoctors.com/'+ this.event});
  this.meta.updateTag({name: 'twitter:text:description', content: 'Video.Blog.Podcast.Slide'});
  
  }
  
  
  if(this.event == 'branding-and-sponsorship-opportunity-for-rssdi-tv')
 {
   console.log('if condition');
  this.titleService.setTitle('Branding and Sponsorship Opportunity for RSSDI tv | TheRightDoctors');
  this.meta.updateTag({name: 'description', content: 'Branding and Sponsorship Opportunity for RSSDI tv'});
  this.meta.updateTag({name: 'keywords', content: 'RSSDI tv, rssdi 2019, Jaipur, TheRightDoctors, Event, Conference'});
  /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
  this.meta.updateTag({
      property: 'vr:canonical',
      content: 'https://therightdoctors.com/'+ this.event
  });
  this.meta.updateTag({property: 'og:title', content: 'Branding and Sponsorship Opportunity for RSSDI tv'});
  this.meta.updateTag({property: 'og:description', content: '7th-10th November 2019, JECC, Jaipur'});
  this.meta.updateTag({
      property: 'og:url',
      content: 'https://therightdoctors.com/' + this.event
  });
  this.meta.updateTag({name: 'twitter:title', content: 'Branding and Sponsorship Opportunity for RSSDI tv'});
  this.meta.updateTag({name: 'twitter:description', content: '7th-10th November 2019, JECC, Jaipur'});

  this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/RSSDI-ppt/RSSDi2019Proposal/Slide2.PNG'});
 this.meta.updateTag({property: 'og:image:secure_url', content:'https://storage.googleapis.com/web-assets/RSSDI-ppt/RSSDi2019Proposal/Slide2.PNG' });
 this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/RSSDI-ppt/RSSDi2019Proposal/Slide2.PNG'});
 this.meta.updateTag({
  name: 'twitter:url',
  content: 'https://therightdoctors.com/'+ this.event});
this.meta.updateTag({name: 'twitter:text:description', content: '7th-10th November 2019, JECC, Jaipur'});

}
    

     /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
     

   })}
 createRange(number) {
   var items: number[] = [];
   for (var i = 1; i <= number; i++) {
     items.push(i);
   }
   return items;
 }
}
