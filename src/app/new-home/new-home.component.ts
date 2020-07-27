import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { Title } from '@angular/platform-browser';
import { UserServiceService } from '../user-service.service'
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})


export class NewHomeComponent implements OnInit {
  nf: any = false;
  title = 'TheRightDoctors';
  allarticles: any = [];
  top: any = [];
  popular : any = [];
  topimpact: any = [];
  image: any = [];
  pr: any = [];
  public imageSources: string[] = [];
  loading: boolean = false;
  private days: any = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  current_day: string = this.days[new Date().getDay()];
  private article_url: string;
  private top_article: string;
  private image_url: string;

  item: any;
  item2: any;
  v: boolean;
  accepts: boolean;
  key: any;
  pop: boolean;
  v2: boolean;
  key2: any;
  id: any;
  id2: any;

  constructor(private http: Http, private titleService: Title, private service: UserServiceService
    // ,private messageService: MessageService
    ) {
    if (this.current_day === 'Wednesday') {
      this.current_day = 'Wednesdaay';
    }

    /*this.item = (localStorage.getItem('Item 1'));
    this.item2 = (localStorage.getItem('Item 2'));
    console.log('data');
    console.log(this.item);
    if(this.item == null){
      this.v = false;
      this.accepts = false;
    }
    else{
      this.v = true;
      this.accepts = true;
    }*/

  }


  ngOnInit() {
    // this.messageService.getPermission();
    // this.messageService.receiveMessage();
    // this.messageService.currentMessage;
    // console.log('Firebase Message New ', this.messageService.currentMessage);
    this.titleService.setTitle("Insights from the World's Best Medical Minds");
    //this.loading = true;
    // this.setArticles();
    // this.setImage();
    // this.setTop();
    // this.setTopimpact();
    // this.setPopularStory();   
    
    //this.loading = true;

   /* this.id = setTimeout(() => {
      if(this.item == null){
        this.v = false;
        this.accepts = false;
        this.key = 'Item 1';
        let myObj = { name: 'Skip'};
        localStorage.setItem(this.key, JSON.stringify(myObj));
        if(this.item2==null) {
          this.v = true;
          this.accepts = true;
          this.pop = true;
          this.v2 = false;
          this.key2 = 'Item 2';
          let myObj2 = { name: 'Skip2'};
          localStorage.setItem(this.key2, JSON.stringify(myObj2));
        }
      }
      else{
        this.v = true;
        this.accepts = true;
        if(this.item2==null) {
          this.pop = true;
          this.v2 = false;
          this.key2 = 'Item 2';
          let myObj2 = { name: 'Skip2'};
          localStorage.setItem(this.key2, JSON.stringify(myObj2));
        }
      }
    }, 10000);
    this.id2 = setTimeout(()=>{
      this.pop = false;
      this.v2 = true;
    },20000);*/

  }
 /* ngOnDestroy() {
    if(this.id) {
      clearInterval(this.id);
    }
    else if(this.id2){
      clearInterval(this.id2);
    }
  }*/

  setArticles() {
    this.loading = true;
    this.article_url = 'https://therightdoctors.com/api/beta/article/new/home/assets/sample?day='+this.days[0]+'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log('set articles calling');
    this.http.get(this.article_url)
      .map((res: Response) => res.json()).subscribe(data => {
      this.allarticles = data;
      console.log(this.allarticles);
      this.loading = false;
    }, (err: HttpErrorResponse) => {
      console.log('something went wroung');
      this.loading = false;
      this.nf = true;
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
  }

  setTop() {

    this.loading = true;
    console.log('get top calling');
    this.top_article = 'https://therightdoctors.com/api/beta/article?day=Friday&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&top_category=true';
    this.http.get(this.top_article)
      .map((res: Response) => res.json()).subscribe(data => {
        
        console.log('top top'+ data['data'][0]['sub_headline']);
      this.topimpact = data;
      this.loading = false;
      
    }, (err: HttpErrorResponse) => {
      console.log('something went wroung');
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
  }
  setPopularStory() {

    this.loading = true;
    console.log('get top calling');
    this.top_article = 'https://therightdoctors.com/api/beta/article?category=the-interview&event=corona-virus&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&limit=5';
    this.http.get(this.top_article)
      .map((res: Response) => res.json()).subscribe(data => {
        
        console.log('top top'+ data['data'][0]['sub_headline']);
      this.popular = data;
      this.loading = false;
      
    }, (err: HttpErrorResponse) => {
      console.log('something went wroung');
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
  }
  setTopimpact() {

    this.loading = true;
    console.log('get top calling');
    this.top_article = 'https://therightdoctors.com/api/beta/article?day=Friday&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&is_impact_feature=true';
    this.http.get(this.top_article)
      .map((res: Response) => res.json()).subscribe(data => {
        
        console.log('top top'+ data['data'][0]['sub_headline']);
      this.top = data;
      this.loading = false;
      
    }, (err: HttpErrorResponse) => {
      console.log('something went wroung');
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
  }

  setImage() {
    this.loading = true;
    console.log('get image calling');
    this.image_url = 'https://therightdoctors.com/api/beta/home/new/image/sample?day=Friday&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    this.http.get(this.image_url)
      .map((res: Response) => res.json()).subscribe(data => {
      this.image = data;
      this.pr = this.image['data']['presentation'];
      console.log(this.image['data']['presentation']);
      for (let i = 0; i < data['data']['event-images'].length; i++) {
        console.log('in for loop');
        console.log(data['data']['event-images'][i]['url']);
        //this.imageSources.push(data['data']['event-images'][i]['url']);
        this.imageSources.push('https://storage.googleapis.com/web-assets/images/wcce2017_Images/80/80-medium.jpg',
          'https://storage.googleapis.com/web-assets/images/wcce2017_Images/81/81-medium.jpg',
          'https://storage.googleapis.com/web-assets/images/wcce2017_Images/71/71-medium.jpg',
          'https://storage.googleapis.com/web-assets/images/wcce2017_Images/77/77-medium.jpg',
          'https://storage.googleapis.com/web-assets/images/wcce2017_Images/56/56-medium.jpg');

        this.loading = false;
      }
    }, (err: HttpErrorResponse) => {
      console.log('something went wroung');
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
  }

}
