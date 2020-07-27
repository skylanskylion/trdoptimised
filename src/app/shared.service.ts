import {throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SharedService {
  weatherURL1 = 'https://query.yahooapis.com/v1/publ0where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
  weatherURL2 = '%2C%20';
  weatherURL3 = '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  findMovieURL1 = 'http://www.omdbapi.com/?t=';
  findMovieURL2 = '&y=&plot=short&r=json';
  currencyURL = 'https://therightdoctors.com/api/beta/article?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&catagory=one-more-thing';
  homeURL = 'https://therightdoctors.com/api/beta/article/new/home/assets/sample?day=Wednesday&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
  totReqsMade: number = 0;

  constructor(private _http: Http) {
  }

  findWeather(city, state) {
    this.totReqsMade = this.totReqsMade + 1;
    return this._http.get(this.weatherURL1 + city + this.weatherURL2 + state + this.weatherURL3)
      .map(response => {
        {
          return response.json();
        }
      })
      .catch(error => observableThrowError(error.json()));
  }

  findMovie(movie) {
    this.totReqsMade = this.totReqsMade + 1;
    return this._http.get(this.findMovieURL1 + movie + this.findMovieURL2)
      .map(response => {
        {
          return response.json();
        }
      })
      .catch(error => observableThrowError(error.json().error));
  }

  getCurrencyExchRate(currency) {
    this.totReqsMade = this.totReqsMade + 1;
    return this._http.get(this.currencyURL + currency)
      .map(response => {
        {
          return response.json();
        }
      })
      .catch(error => observableThrowError(error.json()));
  }

  getHomeVideo() {
    this.totReqsMade = this.totReqsMade + 1;
    return this._http.get(this.homeURL)
      .map(response => {
        {
          return response.json();
        }
      })
      .catch(error => observableThrowError(error.json()));
  }
}
