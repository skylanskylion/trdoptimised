import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, HostListener } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';
import { AdComponent } from './ad.component';
import {AdService} from "./ad.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-ad-banner',
  template: `
              <div class="ad-banner">
                <!--<h3>Advertisements</h3>-->
                <ng-template ad-host></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;
    
    ugl: any = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private location: Location) { }

  ngOnInit() {
    /*this.ads = this.adService.getAds();*/
    this.loadComponent1();
   // this.getAds();
    this.getvideo();
  }

    // @HostListener('scroll', ['$event'])
    scrollHandler(event) {
        console.debug("Scroll Event");
        this.loadComponent();

        //for(let i=0; i< this.ugl.legnth; i++)
        //this.location.replaceState(this.ugl[0]);
    }
    
  ngOnDestroy() {
    clearInterval(this.interval);
      setTimeout(() => { clearInterval(this.interval);}, 5000);
  }


  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;

    //this is for clering compoennet and  add new , so commented for appending at last

    /*viewContainerRef.clear();*/

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
      
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1000);
  }

    loadComponent1() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAdIndex];

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        let viewContainerRef = this.adHost.viewContainerRef;

        //this is for clering compoennet and  add new , so commented for appending at last

        /*viewContainerRef.clear();*/

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
        (<AdComponent>componentRef.instance).sing_art = adItem.sing_art;
        (<AdComponent>componentRef.instance).video_list = adItem.video_list;
        (<AdComponent>componentRef.instance).url = adItem.url;
        //this.location.replaceState(adItem.url);
        this.ugl.push(adItem.url);
        
    }

    getvideo() {
        this.interval = setInterval(() => {
            this.loadComponent1();
        }, 1000);

        setTimeout(() => { clearInterval(this.interval); }, 15000);

    }
    //setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/