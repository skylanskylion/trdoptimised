import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {MatCard} from '@angular/material';
import { DropdownDirective, TOGGLE_STATUS  } from 'angular-custom-dropdown';
// import {MessageService} from './message.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  @ViewChild('myDropdown') myDropdown: DropdownDirective;

  cuurenturl: any;
  accepts: boolean = false;
  cls:boolean = false;
  user: any;
  contribute : boolean = false;
  item:any;
  key:any;
  v:any;
  a:any;
  myItem:any;
  // ngAfterViewInit(){
  //   this.loading = false;
  title = 'TheRightDoctors';
  // message: any;

  // }
  constructor(private Route: Router, private _router: ActivatedRoute ) {
    this.fun();

    /*this.myItem = localStorage.getItem(this.user);
    console.log('data'+ this.myItem);*/
    this.item = (localStorage.getItem('Item 1'));
    console.log('data');
    console.log(this.item);
    if(this.item == null){
       this.v = false;
    }
    else{
      //let myObj = { name: 'Skip'};
      //localStorage.setItem(this.key, JSON.stringify(myObj));
      this.v = true;
    }
    /* this.cuurenturl = this._router.snapshot.url[0].path;*/
    /* this.cuurenturl = this._router.snapshot.data.valueOf();*/
    /* this._router.events.subscribe(event => {

       if (event instanceof NavigationEnd ) {
         console.log("current url",e); // event.url has current url
         // your code will goes here
       }
     });*/
  }
  /*openNow() {
    this.myDropdown.open();
  }*/

  ngOnInit(){
    // this.contribute = true ;
    /*this.myDropdown.statusChange()
        .subscribe((status: TOGGLE_STATUS) => {
          let statusValue: String;
          if (status === TOGGLE_STATUS.OPEN) {
            statusValue = 'Opened';
          } else if (status === TOGGLE_STATUS.CLOSE) {
            statusValue = 'Closed';
          }
          console.info(`Dropdown status changed to "${statusValue}".`);
        });*/

    const scrollLevels: { [navigationId: number]: number } = {};
    let lastId = 0;
    let restoredId: number;

    this.Route.events.subscribe((event) => {

      if (event instanceof NavigationStart) {
        scrollLevels[lastId] = window.scrollY;
        lastId = event.id;
        restoredId = event.restoredState ? event.restoredState.navigationId : undefined;
      }

      if (event instanceof NavigationEnd) {
        if (restoredId) {
          // Optional: Wrap a timeout around the next line to wait for
          // the component to finish loading
          window.scrollTo(0, scrollLevels[restoredId] || 0);
        } else {
          window.scrollTo(0, 0);
        }
      }

    });
    // this.messaging.getPermission();
    // this.messaging.receiveMessage();
  }

  fun() {
    this.Route.events
      .filter(e => e instanceof NavigationEnd)
      .forEach(e => {
        this.cuurenturl = this._router.root.firstChild.snapshot.data['name'];
      });
  }

  homeHeader() {
    if (this.cuurenturl === 'home') {
      return false;
    } else {
      return true;
    }
  }

  singleHeader() {
    if (this.cuurenturl === 'single') {
      return false;
    } else {
      return true;
    }
  }

  accept(){
  this.accepts = true;
    this.key = 'Item 1';
    let myObj = { name: 'Skip'};
    localStorage.setItem(this.key, JSON.stringify(myObj));

  }
  close(){
    this.accepts = true;
  }
  close_contribute(){
    console.log('Executed !!!')
    this.contribute = true; 
  }
}
