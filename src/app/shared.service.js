"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {value: true});
var core_1 = require("@angular/core");
require("rxjs/Rx");
var rxjs_1 = require("rxjs");
var SharedService = (function () {
  function SharedService(_http) {
    this._http = _http;
    this.weatherURL1 = 'https://query.yahooapis.com/v1/publ0where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
    this.weatherURL2 = '%2C%20';
    this.weatherURL3 = '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    this.findMovieURL1 = 'http://www.omdbapi.com/?t=';
    this.findMovieURL2 = '&y=&plot=short&r=json';
    this.currencyURL = 'https://therightdoctors.com/api/beta/article?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg&catagory=one-more-thing';
    this.homeURL = 'https://therightdoctors.com/api/beta/article/new/home/assets/sample?day=Wednesday&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    this.totReqsMade = 0;
  }

  SharedService.prototype.findWeather = function (city, state) {
    this.totReqsMade = this.totReqsMade + 1;
    return this._http.get(this.weatherURL1 + city + this.weatherURL2 + state + this.weatherURL3)
      .map(function (response) {
        {
          return response.json();
        }
      })
      .catch(function (error) {
        return rxjs_1.Observable.throw(error.json());
      });
  };
  SharedService.prototype.findMovie = function (movie) {
    this.totReqsMade = this.totReqsMade + 1;
    return this._http.get(this.findMovieURL1 + movie + this.findMovieURL2)
      .map(function (response) {
        {
          return response.json();
        }
      })
      .catch(function (error) {
        return rxjs_1.Observable.throw(error.json().error);
      });
  };
  SharedService.prototype.getCurrencyExchRate = function (currency) {
    this.totReqsMade = this.totReqsMade + 1;
    return this._http.get(this.currencyURL + currency)
      .map(function (response) {
        {
          return response.json();
        }
      })
      .catch(function (error) {
        return rxjs_1.Observable.throw(error.json());
      });
  };
  SharedService.prototype.getHomeVideo = function () {
    this.totReqsMade = this.totReqsMade + 1;
    return this._http.get(this.homeURL)
      .map(function (response) {
        {
          return response.json();
        }
      })
      .catch(function (error) {
        return rxjs_1.Observable.throw(error.json());
      });
  };
  return SharedService;
}());
SharedService = __decorate([
  core_1.Injectable()
], SharedService);
exports.SharedService = SharedService;
