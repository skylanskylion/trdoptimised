import {throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CatagoryServiceService {
  private event_url = '';
  private api_url = 'https://therightdoctors.com/api/beta/article/?limit=25&category=';
  private artical_url = 'https://therightdoctors.com/api/beta/article/?limit=25&category=';
  private api_key = '6ZzQ52peX5XqUx3t824670wv8jIaf1B4';

  constructor(private _http: Http, private httpc: HttpClient) {
  }

  get_single_catagory(slug) {
    console.log('in get single catagory');
    const final_url = this.artical_url + slug + '&key=' + this.api_key;
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }


  event_home(event) {
    this.event_url = 'https://therightdoctors.com/api/beta/article?event='+event+'&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&is_live=true';
    console.log('in catagory home');
    /*const  final_url = this.event_url + event + '&key=' + this.api_key ;*/
    console.log(this.event_url);
    return this._http.get(this.event_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  trending_presentations(event) {
    this.event_url = 'https://therightdoctors.com/api/beta/image?type=presentation&event=' + event + '&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log('in catagory home');
    /*const  final_url = this.event_url + event + '&key=' + this.api_key ;*/
    console.log(this.event_url);
    return this._http.get(this.event_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }
  podcast_audio_files_cor(){
    //  alert('event in rest api-main'+event);
      return this._http.get('https://therightdoctors.com/api/beta/article?category=podcast&event=corona-virus&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&limit=15',
          this.jwt()).map((response: Response) => response.json());
  }


  get_benefits_of_yoga() {
    //console.log('live url');
    //const slug = 'the-interview';
    const final_url = 'https://therightdoctors.com/api/beta/image?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  get_single_benefits_page(slug) {
    console.log('in article service single video');
    const final_url = 'https://therightdoctors.com/api/beta/image?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        // the console.log(...) line prevents your code from working
        // either remove it or add the line below (return ...)
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));

  }
  rssdi_the_last_word(){
    const final_url = 'https://therightdoctors.com/api/beta/image?type=gallery&event=rssdi-ahmedabad-2018&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
        .map(data => {
            data.json();
            console.log(' I CAN SEE DATA HERE: ', data.json());
            return data.json();
        }).catch(error => observableThrowError(error.json()));
}
  get_get_a_good_start() {
    //console.log('live url');
    //const slug = 'the-interview';
    const final_url = 'https://therightdoctors.com/api/beta/image?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  snack_of_the_day() {
    //console.log('live url');
    //const slug = 'the-interview';
    const final_url = 'https://therightdoctors.com/api/beta/image?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  Quote_of_the_day() {
    //console.log('live url');
    //const slug = 'the-interview';
    const final_url = 'https://therightdoctors.com/api/beta/image?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  the_last_word() {
    //console.log('live url');
    //const slug = 'the-interview';
    const final_url = 'https://therightdoctors.com/api/beta/image?type=gallery&event=csicon2014&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }
  the_last_word_corona() {
    //console.log('live url');
    //const slug = 'the-interview';
    const final_url = 'https://therightdoctors.com/api/beta/image?type=gallery&event=corona-virus&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&limit=22';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }


  event_last_word(event) {
    //console.log('live url');
    //const slug = 'the-interview';
    const final_url = 'https://therightdoctors.com/api/beta/image?type=gallery&event='+event+'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  new_event_last_word(event) {
    //console.log('live url');
    //const slug = 'the-interview';
    const final_url = 'https://therightdoctors.com/api/beta/image/new?type=gallery&event='+event+'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }


  get_presentation(id) {
    console.log('live url', id);
    const slug = 'the-interview';
    const final_url = 'https://therightdoctors.com/api/beta/image/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error));
  }
  get_presentation_all(event) {

    const final_url = 'https://therightdoctors.com/api/beta/image?type=presentation&event='+event+'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }


the_last_word_iages() {
    return this._http.get('https://therightdoctors.com/api/beta/article?category=one-more-thing&event=iages-guwahati-2020&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
  }
  searchforpresentation(input) {
    console.log('live url', input);
    const final_url = 'https://therightdoctors.com/api/beta/searchpresentations/'+input+'/?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
        .map(data => {
            data.json();
            console.log(' I CAN SEE DATA HERE: ', data.json());
            return data.json();
        }).catch(error => observableThrowError(error));
}
    update_totalviews(model, slug) {
        //console.log('in article service single video hai',);
        const final_url = 'https://therightdoctors.com/api/beta/image/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

        return this._http.put(final_url, model)
            .map(data => {
                data.json();
                console.log(' I CAN SEE DATA HERE put req: ', data.json());
                return data.json();

            }).catch(error => observableThrowError(error.json()));
    }
    update_totallikes(model, slug) {
        //console.log('in article service single video hai',);
        const final_url = 'https://therightdoctors.com/api/beta/image/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

        return this._http.put(final_url, model)
            .map(data => {
                data.json();
                console.log(' I CAN SEE DATA HERE put req: ', data.json());
                return data.json();
            }).catch(error => observableThrowError(error.json()));
    }
    update_views(data,id) {
        return this._http.put('https://therightdoctors.com/api/beta/image/'+id+'?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', data, this.jwt()).map((response:Response) => response.json());
    }
    private jwt() {
        console.log('in jwt function');
        // create authorization header with jwt token
        /*let currentUser = JSON.parse(localStorage.getItem('currentUser'));*/
        let currentUser = null;
        if (currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
            return new RequestOptions({headers: headers});
        }
    }

  // get_presentation_all(event) {

  //   const final_url = 'https://therightdoctors.com/api/beta/image?type=presentation&event='+event+'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
  //   console.log(final_url);
  //   return this._http.get(final_url)
  //     .map(data => {
  //       data.json();
  //       console.log(' I CAN SEE DATA HERE: ', data.json());
  //       return data.json();
  //     }).catch(error => observableThrowError(error.json()));
  // }

  morevideos(event) {

    const final_url = 'https://therightdoctors.com/api/beta/article?event='+event+'&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  live_cases(event) {
    const final_url = 'https://therightdoctors.com/api/beta/article?event=csinic-2016&category=live-case&limit=100&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    console.log('url',final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  Revolution_Talk() {
    const final_url = 'https://therightdoctors.com/api/beta/article?event=revolution-talk&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&category=in-conversation&limit=5&limit=10';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }


  get_next_live() {
    console.log('This Is Naresh');
    const slug = 'the-interview';
    console.log(slug);
    const final_url = 'https://therightdoctors.com/api/beta/article?key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&test=livevideo';
    //const final_url = 'https://therightdoctors.com/api/beta/article/get/live-updates/video-list?key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&test=livevideo'
    console.log(final_url);
    return this.httpc.get(final_url)
      .map(data => {
        console.log('videos all : ');
        console.log(' I CAN SEE DATA HERE in all Live  videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }

  get_live_category() {
    console.log('live url');
    const slug = 'the-interview';
    const final_url = 'https://therightdoctors.com/api/beta/article?key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&test=livevideo';
    console.log(final_url);
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

    get_live_category2() {
        console.log('live url');
        const slug = 'the-interview';
        const final_url = 'https://therightdoctors.com/api/beta/article?key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&event=rssdi-ahmedabad-2018&category=the-interview&limit=5';
        console.log(final_url);
        return this._http.get(final_url)
            .map(data => {
                data.json();
                console.log(' I CAN SEE DATA HERE: ', data.json());
                return data.json();
            }).catch(error => observableThrowError(error.json()));
    }

}
