
import {APP_ID, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {CatagoryServiceService} from "../catagory-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {UserServiceService} from "../user-service.service";
import { RssdiPopup } from "../rssdi-single-gallery/rssdi-single-gallery.component";
import { saveAs } from 'file-saver'; 

@Component({
  selector: 'app-single-page-the-last-word-without-event',
  templateUrl: './single-page-the-last-word-without-event.component.html',
  styleUrls: ['./single-page-the-last-word-without-event.component.css']
})
export class SinglePageTheLastWordWithoutEventComponent implements OnInit {
  catagory: any;
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
  ev: any;
  url:any;
  newUrl : any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(APP_ID) private appId: string, private CatagoryService: CatagoryServiceService, private route: ActivatedRoute,
              private router: Router,
              private titleService: Title, private meta: Meta,private dialog: MatDialog, private service: UserServiceService) {
      this.users = (localStorage.getItem('currentUser'));
      console.log('user',this.users);
      if(this.users!=null){
         
          this.logged = true;
          this.username = JSON.parse(localStorage.getItem('currentUser'));
          //this.username = JSON.parse(JSON.stringify(this.username['data'][0]['username']));
      }
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.slug = "dr-banshi-saboo-rssdi-2018";
          console.log('hii how  ', this.slug);
          this.id = "5bf7cb8715d54b77b1caacdd";
          console.log('hii how  ', this.id);
          this.getlastword(this.id);
          this.ev = "rssdi-ahmedabad-2018";
      });

      this.id1=this.slug;
      this.event=this.id;
      console.log('event ',this.event);
      console.log('slug value',this.id1);
      //this.get_single_video(this.slug, this.catagory);
  }
  changestoPage(type){
      if(type=='login')
      {
          this.dialog.open(RssdiPopup, {
              width: '600px',
              // height: '250px',
              panelClass: 'myapp-no-padding-dialog',
              data: {islogin:'true'}
          });
      } else{
          this.dialog.open(RssdiPopup, {
              width: '600px',
              // height: '250px',
              panelClass: 'myapp-no-padding-dialog',
              data: {isregister:'true'}
          });
      }
  }
  downloadImage(url) {
       this.newUrl = url.replace('-large','-original');
      this.service.getDownload(this.newUrl);
  }


  getlastword(slug) {
      console.log('get catagory calling');
      this.service.getlastwordbyslug(slug).subscribe(
          data => {
              this.catagory = data['data'];
              console.log('I CANT SEE DATA HERE in single componenet : ', this.catagory);
              this.titleService.setTitle(this.catagory['doctor_name'] + ' '+this.ev);
              this.meta.updateTag({name: 'description', content:  ' ' + ' '+this.ev + this.catagory['doctor_name'] + ' ' + this.catagory['seo_description']});
              this.meta.updateTag({name: 'keywords', content: this.catagory['seo_keywords']});
              /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
              this.meta.updateTag({
                  property: 'vr:canonical',
                  content: 'https://therightdoctors.com/'+this.ev+'/the-last-word/'+this.slug+'/'+this.id
              });
              this.meta.updateTag({property: 'og:title', content: this.catagory['doctor_name']});
              this.meta.updateTag({property: 'og:description', content: this.catagory['seo_description']});
              this.meta.updateTag({
                  property: 'og:url',
                  content: 'https://therightdoctors.com/'+this.ev+'/the-last-word/'+this.slug+'/'+this.id
              });
              this.meta.updateTag({property: 'og:image', content: this.catagory['url']});
              this.meta.updateTag({property: 'og:image:secure_url', content: this.catagory['url']});
              this.meta.updateTag({name: 'twitter:title', content: this.catagory['headline']});
              this.meta.updateTag({name: 'twitter:description', content: this.catagory['seo_description']});
              this.meta.updateTag({name: 'twitter:text:description', content: this.catagory['seo_description']});
              this.meta.updateTag({name: 'twitter:image', content: this.catagory['url']});
              this.meta.updateTag({
                  name: 'twitter:url',
                  content: 'https://therightdoctors.com/'+this.ev+'/the-last-word/'+this.slug+'/'+this.id
              });
          }
      );
  }

}
