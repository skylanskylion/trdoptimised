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
var ArticleService = (function () {
  function ArticleService(_http) {
    this._http = _http;
    this.api_url = 'https://therightdoctors.com/api/beta/article';
    this.api_key = '6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
  }

  // find one article
  ArticleService.prototype.findOne = function (slug, category) {
    console.log('find one calling');
    console.log('slug  =' + slug);
    console.log('catagory  =' + category);
    this.build_url = this.buildRequestURL(slug, category);
    console.log('build_url' + this.build_url);
    this.article = this.makeRequest(this.build_url);
    console.log(this.article);
    return this.article;
  };
  ArticleService.prototype.buildRequestURL = function (slug, category) {
    console.log('build_url callig');
    return this.api_url + '/' + slug + '?key=' + this.api_key;
  };
  ArticleService.prototype.makeRequest = function (final_url) {
    console.log('in make request');
    /*this._http.get(final_url).map((response: Response) => {
      console.log(response);
      response.json();
    }).subscribe();*/
    return this._http.get(final_url).map(function (response) {
      {
        console.log(response);
        response.json();
      }
    }).catch(function (error) {
      return rxjs_1.Observable.throw(error.json());
    });
  };
  ArticleService.prototype.get_single_video = function (slug, catagory) {
    console.log('in article service single video');
    var final_url = this.api_url + '/' + slug + '?key=' + this.api_key;
    console.log(final_url);
    return this._http.get(final_url)
      .map(function (data) {
        data.json();
        // the console.log(...) line prevents your code from working
        // either remove it or add the line below (return ...)
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(function (error) {
        return rxjs_1.Observable.throw(error.json());
      });
  };
  ArticleService.prototype.single_video_page = function (slug) {
    console.log('in article service single video');
    var final_url = this.api_url + '/' + slug + '?key=' + this.api_key;
    console.log(final_url);
    return this._http.get(final_url)
      .map(function (data) {
        data.json();
        // the console.log(...) line prevents your code from working
        // either remove it or add the line below (return ...)
        console.log(' I CAN SEE DATA HERE: ', data.json());
        return data.json();
      }).catch(function (error) {
        return rxjs_1.Observable.throw(error.json());
      });
  };
  return ArticleService;
}());
ArticleService = __decorate([
  core_1.Injectable()
], ArticleService);
exports.ArticleService = ArticleService;
