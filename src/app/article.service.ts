import {throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Single} from './single-component/single';

@Injectable()
export class ArticleService {
  article: any;
  build_url: string;
  private api_url = 'https://therightdoctors.com/api/beta/article';
  private api_key = '6ZzQ52peX5XqUx3t824670wv8jIaf1B4';

  constructor(private _http: Http, private httpc: HttpClient) {
  }

// find one article
  findOne(slug, category) {
    console.log('find one calling');
    console.log('slug  =' + slug);
    console.log('catagory  =' + category);
    this.build_url = this.buildRequestURL(slug, category);
    console.log('build_url' + this.build_url);
    this.article = this.makeRequest(this.build_url);
    console.log(this.article);
    return this.article;
  }

  buildRequestURL(slug, category) {
    console.log('build_url callig');
    return this.api_url + '/' + slug + '?key=' + this.api_key;
  }

  update_comments(model, slug) {
    //console.log('in article service single video hai',);
    let data = JSON.stringify(model);
    const final_url = 'https://therightdoctors.com/api/beta/article_comment/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

    return this._http.put(final_url, {'json': data})
        .map(data => {
            data.json();
            console.log(' I CAN SEE DATA HERE put req: ', data.json());
            return data.json();
        }).catch(error => observableThrowError(error.json()));
  }

  add_to_list(model, p_id) {
    //console.log('in article service single video hai',);
    let data = JSON.stringify(model);
    const final_url = 'https://therightdoctors.com/api/beta/article_your_list/' + p_id + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

    return this._http.put(final_url, {'json': data})
        .map(data => {
            data.json();
            console.log(' I CAN SEE DATA HERE put req: ', data.json());
            return data.json();
        }).catch(error => observableThrowError(error.json()));
  }

  update_totalviews(model, slug) {
    //console.log('in article service single video hai',);
    let data = JSON.stringify(model);
    const final_url = 'https://therightdoctors.com/api/beta/article/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

    return this._http.put(final_url, {'json': data})
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE put req: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

    update_likes(model, slug){
        let data = JSON.stringify(model);
        const final_url = 'https://therightdoctors.com/api/beta/article/like/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

        return this._http.put(final_url, {'json': data})
            .map(data => {
                data.json();
                console.log('I CAN SEE DATA HERE put req: ', data.json());
                return data.json();
            }).catch(error => observableThrowError(error.json()));
    }

    // --------------------------------------Changes made 12/6/19---------------------------------------------
    update_follows(model, slug){
        let data = JSON.stringify(model);
        const final_url = 'https://therightdoctors.com/api/beta/article/follow/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

        return this._http.put(final_url, {'json': data})
            .map(data => {
                data.json();
                console.log('I CAN SEE DATA HERE put req: ', data.json());
                return data.json();
            }).catch(error => observableThrowError(error.json()));
    }
    //--------------------------------------------------------------------------------------------------------

    // --------------------------------------Changes made 12/6/19---------------------------------------------
    update_addToList(model, slug){
        let data = JSON.stringify(model);
        const final_url = 'https://therightdoctors.com/api/beta/article/addToList/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

        return this._http.put(final_url, {'json': data})
            .map(data => {
                data.json();
                console.log('I CAN SEE DATA HERE put req: ', data.json());
                return data.json();
            }).catch(error => observableThrowError(error.json()));
    }
    //--------------------------------------------------------------------------------------------------------

  makeRequest(final_url) {

    console.log('in make request');

    /*this._http.get(final_url).map((response: Response) => {
      console.log(response);
      response.json();
    }).subscribe();*/


    return this._http.get(final_url).map(response => {
      {
        console.log(response);
        response.json();
      }
    }).catch(error => observableThrowError(error.json()));

  }

  post_total_views(slug, user: Single) {
    console.log(user);
    return this._http.post('https://therightdoctors.com/api/beta/trdadmin/article/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',
      user, this.jwt()).map((response: Response) => response.json());
  }

  table_data() {
    const table_url = 'https://therightdoctors.com/api/beta/article?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    return this._http.get(table_url)
      .map(data => {
        data.json();
        console.log('Display Data : ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }
  get_your_list(p_id) {
    const table_url = 'https://therightdoctors.com/api/beta/article_get_your_list/' + p_id + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    return this._http.get(table_url)
      .map(data => {
        data.json();
        console.log('Display Data : ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }
  table_data_doctor_info() {
    const table_url = 'https://therightdoctors.com/api/beta/doctor-info?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    return this._http.get(table_url)
      .map(data => {
        data.json();
        console.log('Display Data : ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  table_data_images() {
    const table_url = 'https://therightdoctors.com/api/beta/image?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    return this._http.get(table_url)
      .map(data => {
        data.json();
        console.log('Display Data : ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  articles_create(finalJson) {
    console.log('in article service single video hai', finalJson);
    let data = JSON.stringify(finalJson);
    const final_url = 'https://therightdoctors.com/api/beta/article?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.post(final_url, {'json': data});

  }

  list_table() {
    const list: string = 'https://therightdoctors.com/api/beta/article?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    return this.httpc.get(list)
      .map(data => {
        //console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }

  displayform(slug) {
    const final_url = 'https://therightdoctors.com/api/beta/article/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  deleteform(slug) {
    //console.log('in article service single video hai',);
    //let data = JSON.stringify(slug);
    const final_url = 'https://therightdoctors.com/api/beta/article/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

    return this._http.delete(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));


  }

  deleteimageform(slug) {
    const final_url = 'https://therightdoctors.com/api/beta/image/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    return this._http.delete(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));


  }

  displayimageform(slug) {
    const final_url = 'https://therightdoctors.com/api/beta/image/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    return this._http.get(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));


  }

  doctorinfo(finalJson) {
    console.log('in article service single video hai', finalJson);
    let data = JSON.stringify(finalJson);
    const final_url = 'https://therightdoctors.com/api/beta/angular/doctor-info/?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.post(final_url, {'json': data});
  }

  doctor_deleteform(slug) {
    //console.log('in article service single video hai',);
    //let data = JSON.stringify(slug);
    const final_url = 'https://therightdoctors.com/api/beta/doctor-info/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

    return this._http.delete(final_url)
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));


  }

  edit_doctor_details(slug) {
    const edit_url = 'https://therightdoctors.com/api/beta/doctor-info/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    return this._http.get(edit_url).map(data => {
      data.json();
      console.log('data is : ', data.json());
      return data.json();
    }).catch(error => observableThrowError(error.json()));
  }

  update_dotor_details_edit(model, slug) {
    let data = JSON.stringify(model);
    const final_url = 'https://therightdoctors.com/api/beta/angular/doctor-info/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

    return this._http.put(final_url, {'json': data})
      .map(data => {
        data.json();
        console.log(' I doctor-edit_details put req: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  images_create(finalJson) {
    console.log('in article service single video hai', finalJson);
    let data = JSON.stringify(finalJson);
    const final_url = 'https://therightdoctors.com/api/beta/image?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    console.log(final_url);
    return this._http.post(final_url, {'json': data});
  }

  update_edit(model, slug) {
    //console.log('in article service single video hai',);
    let data = JSON.stringify(model);
    const final_url = 'https://therightdoctors.com/api/beta/article/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';

    return this._http.put(final_url, {'json': data})
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE put req: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }

  update_image_edit(model, slug) {
    let data = JSON.stringify(model);
    const final_url = 'https://therightdoctors.com/api/beta/image/' + slug + '?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    return this._http.put(final_url, {'json': data})
      .map(data => {
        data.json();
        console.log(' I CAN SEE DATA HERE put req: ', data.json());
        return data.json();
      }).catch(error => observableThrowError(error.json()));
  }
    // sudesh
    all_tags(tag) {
        // return this._http.get('https://therightdoctor.com/api/beta/all-tags/'+tag+'?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',this.jwt())
        //     .map((response: Response) => response.json());
        console.log('in article service single video');
        const final_url = this.api_url + '/tags/' + tag + '?key=' + this.api_key;
        console.log(final_url);
        return this._http.get(final_url)
            .map(data => {
                data.json();
                // the console.log(...) line prevents your code from working
                // either remove it or add the line below (return ...)
                console.log(' I CAN SEE TAG DATAAAA HERE: ', data.json());
                return data.json();
            }).catch(error => observableThrowError(error.json()));
    }
// sudesh
  get_single_video(slug, catagory) {
    console.log('in article service single video');
    const final_url = this.api_url + '/' + slug + '?key=' + this.api_key;
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

    get_short_url (Url) {
        console.log('in Url Shortner service');
        console.log(Url);
        const url_service ='http://localhost:5000/short';
        console.log(Url);
        return this.httpc.post('https://trd.therightdoctors.com/short', {'url': Url});
    }

  single_video_page(slug) {
    console.log('in article service single video');
    const final_url = this.api_url + '/' + slug + '?key=' + this.api_key;
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

  emcure(category) {
    console.log('in get csicnic');
    console.log(category);
    const emcure: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=csikochi-2016&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';

    /*const wccpci:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wccpci-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;
    const cardiac:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';

    const csinic:string= 'https://therightdoctors.com/api/beta/article?category='+category+'&event=csinic-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;
    const apvic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=apvic&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const csicon:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const wcchd:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wcchd-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ihj :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ihj-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ias :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';*/

    return this.httpc.get(emcure)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));

  }

  wccpci(category) {
    console.log('in get csicnic');
    console.log(category);


    const wccpci: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=wccpci-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    /* const cardiac:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const emcure:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csikochi-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const apvic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=apvic&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const csicon:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const wcchd:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wcchd-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const ihj :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ihj-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const ias :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';*/

    return this.httpc.get(wccpci)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));

  }

  apvic(category) {
    console.log('in get csicnic');
    console.log(category);


    const apvic: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=apvic&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    /* const cardiac:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const emcure:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csikochi-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const apvic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=apvic&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const csicon:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const wcchd:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wcchd-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const ihj :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ihj-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
     const ias :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';*/

    return this.httpc.get(apvic)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));

  }

  csicnic(category) {
    console.log('in get csicnic');
    console.log(category);
    const csinic: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=csinic-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';

    /*const wccpci:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wccpci-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;
    const cardiac:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const emcure:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csikochi-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const apvic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=apvic&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const csicon:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const wcchd:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wcchd-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ihj :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ihj-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ias :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';*/

    return this.httpc.get(csinic)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));

  }

  cardic(category) {
    console.log('in get csicnic');
    console.log(category);
    const cardic: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const csinic:string= 'https://therightdoctors.com/api/beta/article?category='+category+'&event=csinic-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;

    /*const wccpci:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wccpci-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;
    const cardiac:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const emcure:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csikochi-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const apvic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=apvic&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const csicon:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const wcchd:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wcchd-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ihj :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ihj-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ias :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';*/

    return this.httpc.get(cardic)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));

  }

  csicon(category) {
    console.log('in get csicnic');
    console.log(category);
    const csicon: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const cardic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const csinic:string= 'https://therightdoctors.com/api/beta/article?category='+category+'&event=csinic-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;

    /*const wccpci:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wccpci-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;
    const cardiac:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const emcure:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csikochi-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const apvic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=apvic&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const csicon:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const wcchd:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wcchd-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ihj :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ihj-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ias :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';*/

    return this.httpc.get(csicon)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));

  }

  ihj(category) {
    console.log('in get csicnic');
    console.log(category);
    const ihj: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=ihj-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    // const csicon:string= 'https://therightdoctors.com/api/beta/article?category='+category+'&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const cardic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const csinic:string= 'https://therightdoctors.com/api/beta/article?category='+category+'&event=csinic-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;

    /*const wccpci:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wccpci-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;
    const cardiac:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const emcure:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csikochi-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const apvic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=apvic&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const csicon:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const wcchd:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wcchd-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';

    const ias :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';*/

    return this.httpc.get(ihj)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));

  }

  ias(category) {
    console.log('in get csicnic');
    console.log(category);
    const ias: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const csicon:string= 'https://therightdoctors.com/api/beta/article?category='+category+'&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const cardic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const csinic:string= 'https://therightdoctors.com/api/beta/article?category='+category+'&event=csinic-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;

    /*const wccpci:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wccpci-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;
    const cardiac:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const emcure:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csikochi-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const apvic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=apvic&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const csicon:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const wcchd:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wcchd-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ihj :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ihj-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ias :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';*/

    return this.httpc.get(ias)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }


  stemi_india(category) {
    console.log('in get stemi india');
    console.log(category);
    const stemi_india: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=stemi-india-lucknow-2018&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    return this.httpc.get(stemi_india)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }

  aicog(category) {
    console.log('in get aicog');
    //console.log(category);
    const aicog: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=aicog-2018&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    return this.httpc.get(aicog)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }

  wccicc(category) {
    console.log('in get aicog');

    //console.log(category);
    const wccicc: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=wccicc-2017&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    return this.httpc.get(wccicc)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }

 csitv(category) {
    console.log('in get aicog');

    //console.log(category);
    const csitv: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=csi-2017&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    return this.httpc.get(csitv)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }

  c_three(category) {
    console.log('in get aicog');

    //console.log(category);
    const c_three: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=c3&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    return this.httpc.get(c_three)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }

  wcchd(category) {
    console.log('in get csicnic');
    console.log(category);
    //const ias :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const csicon:string= 'https://therightdoctors.com/api/beta/article?category='+category+'&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const cardic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    //const csinic:string= 'https://therightdoctors.com/api/beta/article?category='+category+'&event=csinic-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;
    const wcchd: string = 'https://therightdoctors.com/api/beta/article?category=' + category + '&event=wcchd-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    /*const wccpci:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wccpci-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4' ;
    const cardiac:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=cardiac-prevent-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const emcure:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csikochi-2016&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const apvic:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=apvic&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const csicon:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=csicon-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const wcchd:string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=wcchd-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ihj :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ihj-2015&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    const ias :string= 'https://therightdoctors.com/api/beta/article?category=the-interview&event=ias-2014&limit=8&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';*/

    return this.httpc.get(wcchd)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }

  get_next_video(category, event) {
    console.log(category);
    console.log(event);
    const next: string = 'https://therightdoctors.com/api/beta/article?category=the-interview&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';

    return this.httpc.get(next)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }


    get_next_video2() {
        const next: string = 'https://therightdoctors.com/api/beta/article/byanchor/?key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4';

        return this.httpc.get(next)
            .map(data => {
                console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
                return data;
            }).catch(error => observableThrowError(error.json()));
    }


    get_single_event_category(event, category) {
    console.log(category);
    const next: string = 'https://therightdoctors.com/api/beta/article?event=' + event + '&category=' + category + '&limit=100&key=6ZzQ52peX5XqUx3t824670wv8jIaf1B4&is_live=true';

    return this.httpc.get(next)
      .map(data => {
        console.log(' I CAN SEE DATA HERE in all categoris videos: ', data);
        return data;
      }).catch(error => observableThrowError(error.json()));
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }

}



