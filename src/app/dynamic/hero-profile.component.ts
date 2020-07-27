import {Component, Input} from '@angular/core';

import {AdComponent} from './ad.component';
import {VgAPI} from 'videogular2/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
 template: `
 <style>
 .story-views {
 padding-right: 8px;
 float: left;
 border-right: 2px solid #585857;
 text-align: center;
 margin-right: 10px;
 }

 @media (max-width: 599px) {
 .tags li {
 display: block;
 }

 .ul-div li {
 display: block !important;
 }

 .video_hd1 {
 margin-top: 22px !important;
 }

 .vid_img {
 margin: 0px 0 0 0 !important;
 }

 .mar-top {
 margin-top: 15px;
 }
 }

 .add_txt p {
 float: left;
 margin: 0 20px 0 0;
 font-style: italic;
 text-align: left !important;
 }

 .add_txt {
 float: none;
 padding: 10px 0 0 0;
 }

 .video_hd1 {
 font-size: 42px !important;
 font-weight: 500 !important;
 color: #333;
 margin: 10px 0px;
 }

 mrg_btm {
 margin: 0 0 10px 0 !important;
 }

 .bor-top-q-a {
 border-top: 1px solid #ccc;
 padding: 0px;
 margin-bottom: 15px;
 }

 .question {
 font-weight: 600;
 padding-top: 10px;
 padding-bottom: 0px;
 font-size: 16px;
 color: #3f51b5;
 }

 .answer {
 color: #3C3C3C;
 line-height: 27px;
 font-size: 16px;

 }

 .vid_p {
 font-size: 17px !important;

 }

 .para {
 line-height: 27px;
 }

 @media (max-width: 599px) {
 .pdg_no_m {
 padding-left: 0px;
 padding-right: 0px;
 }

 .pad-adject-text p {
 color: #666;
 font-size: 16px !important;
 }

 .vid_p {
 font-size: 15px !important;
 word-break: normal !important;
 }

 .question {
 font-weight: 600;
 padding-top: 10px;
 padding-bottom: 0px;
 font-size: 15px;
 color: #3f51b5;
 }

 .answer {
 color: #3C3C3C;
 line-height: 27px;
 font-size: 15px;

 }
 }

 .story_highlights_list {
 padding-left: 22px;
 }

 .story_highlights_list li::before {
 content: "•";
 color: #a50d3d;
 display: inline-block;
 width: 1em;
 margin-left: -1em;
 font-size: 150%;

 }

 .story_highlights_list li {
 color: #333;
 font-size: 14px;
 background: none;
 padding: 5px 15px;
 margin: 4px 0 0;

 }

 .story_highlights_h1 {
 font-size: 15px;
 color: #272727;
 padding: 5px 10px;
 text-align: left;
 background: #dcdcdc;
 font-weight: 600;
 }

 .story_highlights {
 border: 1px solid #ccc;
 margin-bottom: 10px;
 }

 @media (max-width: 768px) {
 .story_highlights {
 border: none;
 margin-bottom: 10px;
 }

 .tages-li {
 margin-top: 0px;
 padding: 0px 10px;
 }

 .tages-li li {
 background: #f8f8f8;
 border: 1px solid #ccc;
 color: #666;
 display: inline-block !important;
 padding: 5px;
 margin-right: 0px;
 /* width: inherit; */
 margin-bottom: 5px;

 }

 .story_highlights_list {
 padding-left: 8px;
 }

 .story_highlights_h1 {
 font-size: 17px;
 color: #272727;
 padding: 5px 10px;
 text-align: left;
 background: #dcdcdc;
 font-weight: 600;
 }

 .pad-0-d {
 padding-left: 15px !important;
 padding-right: 15px !important;
 }

 .new-highlet {
 clear: both;
 float: left;
 height: auto;
 padding: 0px;
 }
 }

 .img-wid {
 height: 60px;
 width: 60px;
 /* border-radius:100%;*/

 }

 .list-group li {
 border-top: 1px solid #ccc;
 padding: 4px 0px;
 font-size: 12px;
 }

 .list-group {
 margin-bottom: 0px;
 }

 .share-btn {
 float: left;
 width: 26px;
 height: 26px;
 display: block;
 margin: 3px 8px 5px 0 !important;
 background-repeat: no-repeat;
 background-color: transparent;
 }

 .highlight-new {
 color: #bb0a0a;
 font-size: 18px;
 font-weight: 500;
 text-transform: uppercase;
 margin-bottom: 5px;
 }

 .hi-lets li {
 background: #eee;
 border-bottom: 1px solid #CCCCCC;
 margin-bottom: 3px;
 padding: 5px;
 font-size: 13px;
 line-height: 24px;
 }

 .top {
 background: #f5f5f5;
 color: #272727;
 font-size: 18px;
 font-weight: 600;
 margin-bottom: 10px !important;
 /* margin-top: 20px!important;*/
 padding: 3px;
 }

 .pad-0 {
 padding: 0px;
 }

 .top-images li {
 border-bottom: 1px solid #ccc;
 padding: 5px 0px;
 }

 .pad-l {
 padding: 0px 0px 0px 10px;
 }

 .divid-btm {
 margin-top: 8px;
 border-bottom: 1px solid #ccc;
 padding-bottom: 5px;
 }

 .imag-stry {

 width: 100%;

 }

 .pad-left-0 {
 padding-left: 0px;
 }

 .dr-name-sv {
 color: #3f51b5;
 font-weight: 600;
 }

 .mar-top {

 margin-top: 10px;
 }

 .para-p {
 color: #272727;
 line-height: 27px;
 }

 .tages-li li {
 background: #f8f8f8;
 border: 1px solid #ccc;
 color: #666;
 display: inline;
 padding: 5px;
 margin-left: 5px;

 }

 .tages-li {
 margin-top: 10px;
 }

 .mar-btm-p {
 margin-bottom: 10px;
 }

 .p-mail {
 padding-top: 10px;
 font-size: 14px;
 padding-bottom: 10px;
 border-bottom: 1px solid #ccc;
 }

 .para-whatsup {
 /*text-align: center;*/
 font-size: 16px;
 padding-top: 10px;
 }

 @media (max-width: 768px) {
 .trd {
 color: #8a8989;
 font-size: 13px;
 padding-top: 0px;
 font-weight: 600;
 padding-bottom: 4px;
 text-align: left;
 }

 .list-group li {
 border-top: none;
 padding: 4px 0px;
 font-size: 12px;
 text-align: left;
 }

 .img-section {
 border-bottom: none;
 padding-bottom: 0px;
 }

 .pad-left-0-m {
 padding-left: 0px;
 }

 .follow-on {
 font-size: 14px;
 color: #000;
 font-weight: 600;
 margin-top: 10px !important;
 text-align: left;
 }

 .pad-1-hi {
 padding-left: 15px;
 padding-right: 15px;
 }

 .hi-lets li {
 margin-bottom: 3px;
 padding: 5px;
 font-size: 13px;
 line-height: 24px;
 list-style-type: disc;
 list-style-position: inside;
 text-indent: -1em;
 padding-left: 14px;
 background: none;
 border-bottom: none;
 }

 .p-mail {
 padding-top: 10px;
 font-size: 13px;
 padding-bottom: 10px;
 border-bottom: 1px solid #ccc;
 line-height: 27px;
 }

 .pad-0-m {
 padding-left: 15px;
 padding-right: 15px;
 }

 .row-set {
 margin-left: 0px;
 margin-right: 0px;
 padding-right: 15px;
 }
 }

 .pad-right-0 {
 padding-right: 0px;
 padding-left: 0px;
 }

 .mar-top-right {
 margin-top: 15px;
 /*border: 1px solid #ccc;*/
 /* padding: 5px;*/
 }

 .item-tops {
 margin-top: 10px;
 border-bottom: 1px solid #ccc;
 padding-bottom: 10px;
 margin-left: 0px;
 margin-right: 0px;

 }

 .pad-0-d {
 padding-left: 0px;
 padding-right: 0px;
 }

 .pad-adject-text {
 padding-left: 0px;
 }

 .pad-adject-text p {
 color: #666;
 font-size: 13px;
 }

 @media (max-width: 599px) {
 .pad-adject-text p {
 font-size: 12px !important;
 }
 }

 .pad-left-0-d {
 padding-left: 0px;
 }

 .color_orange {
 color: #e27520 !important;
 }

 .float_right-icons {
 float: right;
 }

 .p-mail a {
 color: #337ab7;
 text-decoration: underline !important;
 }

 @media (max-width: 768px) {
 .video_hd1 {
 font-size: 24px !important;
 font-weight: 500 !important;
 color: #333;
 margin: 10px 0px;
 }

 }

 .pad-right-0-img {
 padding-right: 0px;
 }

 .head-line-2 {
 font-size: 18px;
 color: #666;
 }

 .dropdown-bottons {
 background: #f44336;
 height: 25px;
 width: 25px;
 color: #fff;
 font-size: 18px;
 line-height: 15px;
 text-align: center;
 margin-top: 4px;
 border-radius: 3px;
 cursor: pointer;
 }

 .dropdown-menu {
 position: absolute;
 top: 75%;
 left: 59px;
 min-width: inherit;
 padding: 5px 10px;
 }

 .dropdown-menu > li > a {
 padding: 0px;
 }

 /*for New*/

 .hi-lets2 li {
 background: #fff;
 border-left: 6px solid #CCCCCC;
 margin-bottom: 3px;
 padding: 15px;
 font-size: 16px;
 line-height: 24px;
 color: #999;
 font-style: italic;
 }

 .para-whatsup2 {
 padding-bottom: 10px;
 }

 .icons-fallow-new i{
 font-size:14px;
 color: #fff;
 width: 30px;
 height: 30px;
 text-align: center;
 line-height: 30px;
 border-radius: 50%;}
 .icons-fallow-new li{
 float: left;
 color: #000;
 background: #f9f9f9;
 width: 100%;
 padding:5px 5px 5px 18px;
 margin-bottom: 5px;
 font-size: 14px;

 }

 .twit-clr {
 background: #1dcaff;
 }

 .google-plus {
 background: #d34836;
 }

 .linkd {
 background: #0d77b7;
 }

 .pin {
 background: #cd2029;
 }

 .fb {
 background: #3B5998;
 }

 .insta {
 background: #f09433;
 }

 .youtube {
 background: #cc181e;
 }

 .rss {
 background: #ffaf00;
 }

 .content-sing {
 margin-top: 10px;
 }

 .list-icons-top i {
 height: 30px;
 width: 30px;
 line-height: 30px;
 color: #fff;
 text-align: center;
 border-radius: 100%;
 font-size: 16px;
 /* float: right; */
 }

 .views {
 border-right: 1px solid #ccc;
 padding-right: 10px;
 position: relative;
 top: 10px;
 text-align: center;
 }

 .whats-app {
 background-color: #1fa67a;
 }

 .envo {
 background-color: #0a97b9;
 }

 @media (min-width: 0px) and (max-width: 359px) {
 .list-icons-top li {
 padding-left: 4px !important;
 padding-right: 4px !important;
 }

 .list-icons-top i {
 height: 27px;
 width: 27px;
 line-height: 27px;
 color: #fff;
 }
 }

 .head-style-top-stories {
 margin-left: 0px;
 background: #eee;
 margin-bottom: 13px !important;
 padding: 2px 7px;
 font-size: 17px;
 font-weight: 600;
 color: #000;
 margin-top: 15px;
 }

 .live-part-head1 {
 background: #eee;
 padding: 3px;
 margin-bottom: 10px !important;
 font-size: 17px;
 font-weight: 600;
 color: #000;
 }

 .divider-next {
 border-top: 8px solid #f3f3f3;
 margin-top: 40px;

 }

 .divider-next:before {
 content: "";
 display: block;
 margin: auto;
 margin-bottom: 6px;
 width: 0;
 height: 0;
 border-left: 10px solid transparent;
 border-right: 10px solid transparent;
 border-top: 10px solid #f3f3f3;
 }

 .divider-next p {
 font-size: 17px;
 font-style: italic;
 padding-bottom: 10px;
 color: #bfbfbf
 }
 .backcode{
     background:#585858;

 }

 @media (max-width: 599px) {
 .pad-adject-text {
 padding-left: 0px;
 padding-right: 0px;
 }
 }

 .item-part {
 margin-bottom: 10px;
 height: 205px;
 }
@media(max-width:599px){
    .item-part {
        margin-bottom: 10px;
        height: 165px;
    }   
}
 
 @media (min-width:600px) and (max-width:768px) {
     .item-part {
         margin-bottom: 10px;
         height: 250px;
     }
 }
 </style>
<div (mouseover)="changeUrl()">

 <div class="divider-next" align="center">
 Next Story 
 </div>

 <div class="container" >
 <div class="row">
 <div class="col-md-12">
 <h2 class="video_hd1 mrg_btm">{{data.sub_headline | titlecase}}: {{data.headline | titlecase}}</h2>
 </div>
 </div>
 <div class="row" style="margin-bottom:10px">
 <div class="col-md-7 col-sm-6 col-xs-12">
 <div class="head-line-2">
 {{data.headline2}}
 </div>
 </div>

 <div class="col-md-5 col-sm-6 col-xs-12" style="text-align:right;">
 <ul class="list-inline list-icons-top">
 <li class="views">{{data.anchor}}<br>Views</li>
 <li>
 <a href="https://www.facebook.com/dialog/feed?app_id=1066226316760891&redirect_uri=https://therightdoctors.com&link=https://therightdoctors.com/{{data.event}}/{{ data.category}}/{{ data.slug}}&picture={{ data.image_url }}&caption=TheRightDoctors.com%20|%20BY%20%20{{ data.sub_headline}},%20%20{{ data.designation}}&description={{ data.description}}&name={{ data.headline}}"
 title="Share on Facebook" data-service="facebook" target="_blank"><i
 class="fa fa-facebook fb" aria-hidden="true"></i>
 </a>
 </li>
 <li>
 <a href="https://twitter.com/intent/tweet?url=https://therightdoctors.com/{{data.event}}/{{ data.category}}/{{ data.slug}}&text={{ data.sub_headline}}%20-{{ data.headline}}&via=TheRightDoctors"
 title="Share on Twitter" data-service="twitter" target="_blank"> <i
 class="fa fa-twitter twit-clr" aria-hidden="true"></i></a></li>
 <li>
 <a href="https://plus.google.com/share?url=https://therightdoctors.com/{{data.event}}/{{ data.category}}/{{ data.slug}}"
 title="Share on Google Plus" data-service="gplus" target="_blank"><i
 class="fa fa-google-plus google-plus" aria-hidden="true"></i></a></li>
 <li>
 <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://therightdoctors.com/{{data.event}}/{{ data.category}}/{{ data.slug}}&title={{ data.headline}}&summary={{ data.headline2}}&source=therightdoctors.com"
 title="Share on Linkedin" data-service="linkedin"
 target="_blank"><i class="fa fa-linkedin linkd" aria-hidden="true"></i></a></li>
 <li>
 <a href="https://api.whatsapp.com/send?text=https://therightdoctors.com/{{data.event}}/{{ data.category}}/{{ data.slug}}"
 data-action="share/whatsapp/share" title="Share on Whatsapp" data-service="whatsapp"
 target="_blank"><i class="fa fa-whatsapp whats-app" aria-hidden="true"
 style="font-size:18px;"></i></a></li>
 <li>
 <a href="mailto:?subject={{ data.sub_headline}} : {{ data.headline}}&amp;body={{ data.headline2}}. Check out this site https://therightdoctors.com/{{data.event}}/{{ data.category}}/{{ data.slug}} ."
 title="Share by Email" data-service="email" target="_blank"><i
 class="fa fa-envelope envo" aria-hidden="true"></i></a></li>
 <li><a data-flip-widget="shareflip" title="Share on Flipit" target="_blank"
 href="https://share.flipboard.com/bookmarklet/popout?ext=sharethis&title={{data.headline}}&url=https://therightdoctors.com/{{data.event}}/{{ data.category}}/{{ data.slug}}&utm_campaign=widgets&utm_content={{data.sub_headline}}&utm_source=sharethis&v=2">
 <img style="width: 30px;height: 30px;margin-top: -2px;
 border-radius: 100%;" src="https://cdn.flipboard.com/badges/flipboard_srsw.png"/></a></li>
     <li><a
             href=""
             title="Share by Email" data-service="email" target="_blank"><i class="fa fa-code backcode" aria-hidden="true"></i></a>
     </li>
 </ul>
 </div>
 <div class="clearfix"></div>
 </div>

 </div>
 <div class="container">
 <div class="row ">
 <div class="col-md-9" style="margin-top: 10px;">
 <div *ngIf="true">
 <div class="row">
 <div class="col-md-12">
 <div class="text-center">
 <vg-player class="vid_img ratio-4-3" style="width:100%">
 <vg-overlay-play></vg-overlay-play>
 <vg-buffering></vg-buffering>
 <vg-scrub-bar style="bottom: 36px !important;">
 <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
 <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>
 </vg-scrub-bar>
 <vg-controls style="height:36px !important;" [vgAutohide]="true"
 [vgAutohideTime]="1.5">
 <vg-play-pause></vg-play-pause>
 <vg-playback-button></vg-playback-button>
 <img width="30px;" (click)="backward(media)" class="control-fr"
 src="../assets/backward2.jpg">
 &nbsp;
 <img width="30px;" (click)="forward(media)" class="control-br"
 src="../assets/forward2.jpg">


 <vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>
 <vg-scrub-bar style="pointer-events: none;"></vg-scrub-bar>
 <vg-time-display vgProperty="total" vgFormat="mm:ss"></vg-time-display>

 <vg-track-selector></vg-track-selector>
 <vg-mute></vg-mute>
 <vg-volume></vg-volume>

 <vg-fullscreen></vg-fullscreen>
 </vg-controls>
 <video [vgMedia]="media" #media preload="auto" poster="{{data.image_url}}">
 <source src="{{data.video_url}}" type="video/mp4">
 </video>
 </vg-player>

 </div>
 </div>

 </div>
 <br>
 </div>

 <div class="row">
 <div class="col-md-3 pad-1-hi" *ngIf="data.highlights1">
 <h2 class="highlight-new">Highlights</h2>
 <ul *ngIf="data.highlights1" class="hi-lets">
 <li *ngIf="data.highlights1">{{data.highlights1}}</li>
 <li *ngIf="data.highlights2">{{data.highlights2}}</li>
 <li *ngIf="data.highlights3">{{data.highlights3}}</li>
 <li *ngIf="data.highlights4">{{data.highlights4}}</li>
 </ul>

 </div>
 <div class="col-md-9 content-sing">
 <div class="row">
 <div class="col-md-6 col-xs-12 col-sm-12 mar-top" *ngIf="data.guest1">
 <div class="row">
 <div class="col-md-3 col-xs-3 col-sm-3 pad-right-0-img"
 *ngIf="data.guest1_image_url.length>0">
 <img src="{{ data.guest1_image_url}}" class="imag-stry"/></div>
 <div class="col-md-9 col-xs-9 col-sm-9 "><h5 class="dr-name-sv">
 {{ data.guest1}}</h5>
 <p>{{ data.guest1_designation}} {{ data.guest1_hospital}}</p>
 </div>

 </div>
 </div>
 <div class="col-md-6 col-xs-12 col-sm-12 mar-top" *ngIf="data.guest2">
 <div class="row">
 <div class="col-md-3 col-xs-3 col-sm-3 pad-right-0-img">
 <img src="{{ data.guest2_image_url}}" class="imag-stry"/></div>
 <div class="col-md-9 col-xs-9 col-sm-9 "><h5 class="dr-name-sv">
 {{ data.guest2}}</h5>
 <p>{{ data.guest2_designation}} {{ data.guest2_hospital}}</p>
 </div>

 </div>
 </div>

 </div>

 <br>

 <p class="para-p" *ngIf="data.description.length>0">{{data.description}}</p>
 <br>

 <p class="mar-btm-p"><b>Also Read:</b> <a
 href="/{{video_list[0]['event']}}/{{video_list[0]['category']}}/{{video_list[0]['slug']}}"><span
 style="color:#ff0000">&nbsp;{{video_list[0]['headline']}} {{video_list[0]['sub_headline']}}
 </span></a></p>
 <div class="bor-top-q-a">
 <div *ngFor=" let tra of sing_art">
 <p class="para-p" *ngIf="data.event === 'stemi-india-lucknow-2018'">
 {{tra.split(':')[0]}} </p> <br>
 <p class="question" *ngIf="data.event != 'stemi-india-lucknow-2018'">
 {{tra.split(':')[0]}}</p>
 <p class="para-p">{{tra.split('>')[1]}}</p>
 </div>
 </div>

 <div *ngIf="data.transcript_list.length>0" class="bor-top-q-a">
 <div *ngFor="let tr of data.transcript_list">
 <p class="question">{{tr['question'].split(':')[0]}}</p>
 <p class="para-p">{{tr['question'].split(':')[1]}}</p>

 <p class="question">{{tr['answer'].split(':')[0]}}</p>
 <p class="para-p"> {{tr['answer'].split(':')[1]}}</p>
 </div>
 </div>

 <div *ngIf="data.similar_topic.length>0">

 <p><b>Tags:</b></p>
 <ul class="tages-li mar-btm-p">
 <li *ngFor="let topic of data.similar_topic.split(',')">{{topic}}</li>
 </ul>
 </div>
 <div class="p-mail">Mail Us At <i>
 <a href="mailto:editorial@therightdoctors.com" style="color:#ff0000"> editorial@therightdoctors.com.</a></i>
 Stay Updated On  
 <a href="https://www.facebook.com/therightdoctors">Facebook</a>, 
 <a href="https://twitter.com/therightdoctors">Twitter</a>, 
 <a href="https://www.youtube.com/channel/UCUZIhLsNbgkCqymAZshSVHQ">YouTube</a> 
 and <a href="https://www.linkedin.com/company/therightdoctors-com">LinkedIn</a>.
 </div>
 <div class="para para-whatsup"><em>Join <b>TheRightDoctors</b> On WhatsApp. Type "JOIN" And
 Send To 9676401536</em></div>
 </div>
 <div class="col-md-12 pad-m-ad" *ngIf="video_list.length>0">
 <h3 class="head-style-top-stories" style="margin-left:0px">Popular Videos</h3>
 <div class="row">
 <div class="col-md-4 col-xs-6 col-sm-6 item-part">
 <a [routerLink]="['/'+video_list[11]['category']+'/'+video_list[11]['slug']]">
 <img src="{{video_list[11]['image_url']}}"
 alt="{{video_list[11]['image_alt']}}"/>
 <h4 class="hd4 color_base_m line-clamp line-clamp-2">
 {{video_list[11]['headline'] | slice:0:50}}...</h4>
 <p class="color_orange">{{video_list[11]['sub_headline']}}</p>
 </a>
 </div>

 <div class="col-md-4 col-xs-6 col-sm-6 item-part">
 <a [routerLink]="['/'+video_list[12]['category']+'/'+video_list[12]['slug']]">
 <img src="{{video_list[12]['image_url']}}"
 alt="{{video_list[12]['image_alt']}}"/>
 <h4 class="hd4 color_base_m line-clamp line-clamp-2">
 {{video_list[12]['headline'] | slice:0:50}}...</h4>
 <p class="color_orange">{{video_list[12]['sub_headline']}}</p>
 </a>
 </div>

 <div class="col-md-4 col-xs-6 col-sm-6 item-part">
 <a [routerLink]="['/'+video_list[13]['category']+'/'+video_list[13]['slug']]">
 <img src="{{video_list[13]['image_url']}}"
 alt="{{video_list[13]['image_alt']}}"/>
 <h4 class="hd4 color_base_m line-clamp line-clamp-2">
 {{video_list[13]['headline'] | slice:0:50}}...</h4>
 <p class="color_orange">{{video_list[13]['sub_headline']}}</p>
 </a>
 </div>

 <div class="col-md-4 col-xs-6 col-sm-6 item-part">
 <a [routerLink]="['/'+video_list[14]['category']+'/'+video_list[14]['slug']]">
 <img src="{{video_list[14]['image_url']}}"
 alt="{{video_list[14]['image_alt']}}"/>
 <h4 class="hd4 color_base_m line-clamp line-clamp-2">
 {{video_list[14]['headline'] | slice:0:50}}...</h4>
 <p class="color_orange">{{video_list[14]['sub_headline']}}</p>
 </a>
 </div>

 <div class="col-md-4 col-xs-6 col-sm-6 item-part">
 <a [routerLink]="['/'+video_list[15]['category']+'/'+video_list[15]['slug']]">
 <img src="{{video_list[15]['image_url']}}"
 alt="{{video_list[15]['image_alt']}}"/>
 <h4 class="hd4 color_base_m line-clamp line-clamp-2">
 {{video_list[15]['headline'] | slice:0:50}}...</h4>
 <p class="color_orange">{{video_list[15]['sub_headline']}}</p>
 </a>
 </div>

 <div class="col-md-4 col-xs-6 col-sm-6 item-part">
 <a [routerLink]="['/'+video_list[16]['category']+'/'+video_list[16]['slug']]">
 <img src="{{video_list[16]['image_url']}}"
 alt="{{video_list[16]['image_alt']}}"/>
 <h4 class="hd4 color_base_m line-clamp line-clamp-2">
 {{video_list[16]['headline'] | slice:0:50}}...</h4>
 <p class="color_orange">{{video_list[16]['sub_headline']}}</p>
 </a>
 </div>

 </div>
 <!-- </ng-template>-->
 <br/>


 </div>

 </div>
 </div>
 <!-- new-->

 <div class="col-md-3 pad-0-d">

 <div class=" mar-top-right" *ngIf="video_list.length>0">
 <h4 class="top">Top Stories</h4>

 <div class="row item-tops" style="clear:both;width:100%">
 <a [routerLink]="['/'+video_list[17]['category']+'/'+video_list[17]['slug']]">
 <div class="col-md-4 col-xs-4 col-sm-4 pad-left-0-d">
 <img src="{{video_list[17]['image_url']}}" style="width:100%"/>
 </div>

 <div class="col-md-8 col-xs-8 col-sm-8 pad-adject-text">
 <p>{{video_list[17]['headline'] | slice:0:50}}...</p>
 <p class="color_orange mar-adj"><b>{{video_list[17]['sub_headline']}}</b></p>
 </div>
 </a>
 </div>

 <div class="row item-tops" style="clear:both;width:100%">
 <a [routerLink]="['/'+video_list[18]['category']+'/'+video_list[18]['slug']]">
 <div class="col-md-4 col-xs-4 col-sm-4 pad-left-0-d">
 <img src="{{video_list[18]['image_url']}}" style="width:100%"/>
 </div>

 <div class="col-md-8 col-xs-8 col-sm-8 pad-adject-text">
 <p>{{video_list[18]['headline'] | slice:0:50}}...</p>
 <p class="color_orange mar-adj"><b>{{video_list[18]['sub_headline']}}</b></p>
 </div>
 </a>
 </div>

 <div class="row item-tops" style="clear:both;width:100%">
 <a [routerLink]="['/'+video_list[19]['category']+'/'+video_list[19]['slug']]">
 <div class="col-md-4 col-xs-4 col-sm-4 pad-left-0-d">
 <img src="{{video_list[19]['image_url']}}" style="width:100%"/>
 </div>

 <div class="col-md-8 col-xs-8 col-sm-8 pad-adject-text">
 <p>{{video_list[19]['headline'] | slice:0:50}}...</p>
 <p class="color_orange mar-adj"><b>{{video_list[19]['sub_headline']}}</b></p>
 </div>
 </a>
 </div>

 <div class="row item-tops" style="clear:both;width:100%">
 <a [routerLink]="['/'+video_list[20]['category']+'/'+video_list[20]['slug']]">
 <div class="col-md-4 col-xs-4 col-sm-4 pad-left-0-d">
 <img src="{{video_list[20]['image_url']}}" style="width:100%"/>
 </div>

 <div class="col-md-8 col-xs-8 col-sm-8 pad-adject-text">
 <p>{{video_list[20]['headline'] | slice:0:50}}...</p>
 <p class="color_orange mar-adj"><b>{{video_list[20]['sub_headline']}}</b></p>
 </div>
 </a>
 </div>


 </div>
 <div class=" mar-top-right" >
 <h4 class="top" style="text-align:center;">Connect with TheRightDoctors</h4>
 <ul class="icons-fallow-new" style="">
 <li><i class="fa fa-facebook fb" aria-hidden="true"></i>
 <a data-service="facebook" target="_blank" title="Share on Facebook"
 href="https://www.facebook.com/therightdoctors">&nbsp;&nbsp;<b>Like</b> us on Facebook</a>
 </li>

 <li><i class="fa fa-twitter twit-clr" aria-hidden="true"></i>
 <a data-service="twitter" target="_blank" title="Follow us on Twitter"
 href="https://twitter.com/therightdoctors">&nbsp;&nbsp;<b>Follow</b> us on Twitter </a>
 </li>

 <li><i class="fa fa-google-plus google-plus" aria-hidden="true"></i>
 <a data-service="gplus" target="_blank" title="Follow us on Google Plus"
 href="https://plus.google.com/+TheRightDoctors">&nbsp;&nbsp;<b>Circle</b> us on Google+</a>
 </li>

 <li><i class="fa fa-linkedin linkd" aria-hidden="true"></i>
 <a data-service="linkedin" target="_blank" title="Follow us on Linkedin"
 href="https://www.linkedin.com/company/therightdoctors-com">&nbsp;&nbsp;<b>Add</b> us on
 Linkedin</a>
 </li>
 </ul>
 </div>
 <div class="clearfix"></div>
 <div class=" mar-top-right">
 <h4 class="top">Trending Presentations</h4>

 <div class="row item-tops" style="clear:both;width:100%">
 <a [routerLink]="['/specials/wccpci-2016/presentation/Dr.%20Samin%20K%20Sharma%20MD,NOAC%20in%20NVAF:%20Status%202016/57e664f55ea33af71b22942c']">
 <div class="col-md-4 col-xs-4 col-sm-4 pad-left-0-d">
 <img src="https://storage.googleapis.com/web-assets/images/presentations/thumbs/Saumitra%20Ray.jpg"
 alt="Dr Saumitra ray" style="width:100%"/>
 </div>

 <div class="col-md-8 col-xs-8 col-sm-8 pad-adject-text">
 <p> NOAC in NVAF: Status 2016</p>
 <p class="color_orange mar-adj"><b>Dr. Saumitra Ray</b></p>
 </div>
 </a>
 </div>
 <div class="row item-tops" style="clear:both;width:100%">
 <a [routerLink]="['/specials/wccpci-2016/presentation/dr-s-ramakrishnan-stemi-care-in-India-challenges-ahead/57e6370fa273e4660f965cc2']">

 <div class="col-md-4 col-xs-4 col-sm-4 pad-left-0-d">
 <img src="https://storage.googleapis.com/web-assets/images/presentations/thumbs/Ramakrishnan.jpg"
 alt="Dr Ramakrishna" style="width:100%"/>
 </div>

 <div class="col-md-8 col-xs-8 col-sm-8 pad-adject-text">
 <p>STEMI care in India Challenges ahead</p>
 <p class="color_orange mar-adj"><b>Dr. Ramakrishna</b></p>
 </div>

 </a>
 </div>
 <div class="row item-tops" style="clear:both;width:100%">
 <a [routerLink]="['/specials/wccpci-2016/presentation/dr-jagdish-s-hiremath-oral-anticoagulants-in-cardiology-new-frontiers/567a2365a3ecfead3f7f2e39']">

 <div class="col-md-4 col-xs-4 col-sm-4 pad-left-0-d">
 <img src="https://storage.googleapis.com/web-assets/images/presentations/thumbs/Dr.JS%20Hiremath.jpg"
 alt="Dr JS Hiremath" style="width:100%"/>
 </div>

 <div class="col-md-8 col-xs-8 col-sm-8 pad-adject-text">
 <p>Oral Anticoagulants in Cardiology...</p>
 <p class="color_orange mar-adj"><b>Dr. JS Hiremath</b></p>
 </div>

 </a>

 </div>
 <div class="row item-tops" style="clear:both;width:100%">
 <a [routerLink]="['/specials/wccpci-2016/presentation/Prof%20Shashank%20R%20Joshi,%20Endocrinologist,%20Edible%20Oils%20CVD%20Impacts/57e64fd9d0d9221817a73a29']">

 <div class="col-md-4 col-xs-4 col-sm-4 pad-left-0-d">
 <img src="https://storage.googleapis.com/web-assets/images/presentations/thumbs/Shashank%20Joshi.jpg"
 alt="Dr Shashank" style="width:100%"/>
 </div>

 <div class="col-md-8 col-xs-8 col-sm-8 pad-adject-text">
 <p> Edible Oils CVD Impacts</p>
 <p class="color_orange mar-adj"><b>Dr. Shashank Joshi</b></p>
 </div>

 </a>

 </div>


 </div>

 <div class=" mar-top-right">
 <h4 class="top">Connect with TheRightDoctors</h4>
 <ul class="icons-fallow-new">
 <li><i class="fa fa-instagram insta" aria-hidden="true"></i>
 <a data-service="youtube" target="_blank" title="Follow us by Instagram"
 href="https://www.instagram.com/therightdoctors/">&nbsp;&nbsp;<b>Follow</b> us on Instagram</a>
 </li>

 <li><i class="fa fa-youtube youtube" aria-hidden="true"></i>
 <a data-service="youtube" target="_blank" title="Follow us by Youtube"
 href="https://www.youtube.com/channel/UCUZIhLsNbgkCqymAZshSVHQ">&nbsp;&nbsp;<b>Follow</b> us on
 Youtube</a>
 </li>

 <li><i class="fa fa-pinterest-p pin" aria-hidden="true"></i>
 <a data-service="youtube" target="_blank" title="Follow us by Pinterest"
 href="https://in.pinterest.com/pin/388154061619065576/?lp=true">&nbsp;&nbsp;<b>Follow</b> us on
 Pinterest</a></li>
 <li> <img style="width: 29px;height: 29px;margin-top: -2px;margin-right: 9px;
 border-radius: 100%;" src="https://cdn.flipboard.com/badges/flipboard_srsw.png" alt="Follow us by flipboard"/>
 <a data-flip-widget="shareflip" title="Follow us by Flipit" target="_blank"
 href="https://flipboard.com/@TheRightDoctors" >&nbsp;&nbsp;<b>Follow</b> us on
 Fliboard</a></li>
 <!-- <li><i class="fa fa-rss rss" aria-hidden="true"></i> &nbsp;<b>Subscribe</b> us on RSS </li>-->
 </ul>
 </div>

 </div>


 </div>


 </div>

 </div>

 `
})
export class HeroProfileComponent implements AdComponent {
 @Input() data: any;
 @Input() sing_art: any;
 @Input() video_list: any;
 @Input() url: any;
 api: VgAPI;

constructor(private lk: Location) {

}
 // sing_art = data['transcript'].replace('<b>', '').split('<b>');
 onPlayerReady(api: VgAPI) {

 console.log('on player redy method');
 console.log('on player ready called and api inislized');
 this.api = api;
 api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
 //this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
 }

 playVideo() {
 //this.api.play();
 }

 changeUrl(){
this.lk.replaceState(this.url);
 //alert('change URL');
 }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
