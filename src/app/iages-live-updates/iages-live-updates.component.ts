//import { Component, OnInit } from '@angular/core';
import {CatagoryServiceService} from "../catagory-service.service";
//import {AngularFireDatabase} from "angularfire2/database";
import {Live_Details} from "../live_details";
import {FirebaseServiceService} from "../firebase-service.service";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'app-iages-live-updates',
  templateUrl: './iages-live-updates.component.html',
  styleUrls: ['./iages-live-updates.component.css']
})
export class IagesLiveUpdatesComponent implements OnInit {
  catagory: any;
  live_details: AngularFireList<Live_Details[]>;
  public now: Date = new Date();
  ld: any;
  conv : any ;
 finaldata : object[] = [];
  private dbPath = '/iages-live-updates';
  //private dbPath = '/live_updates';
  customersRef: AngularFireList<Live_Details> = null;
  //ld: any;
constructor(private service: CatagoryServiceService, private fbs: FirebaseServiceService, private db: AngularFireDatabase) {
  this.customersRef = db.list(this.dbPath); 
}

createRange(number) {
  var items: number[] = [];
  for (var i = 1; i <= number; i++) {
    items.push(i);
  }
  return items;
}

ngOnInit() {
  const splashScreen: HTMLElement = document.getElementById('splashScreenClass');
  if (splashScreen) {
    splashScreen.remove();
  }
    this.fbs.onGetUsersDocuments_for_Iages().subscribe(data => {
        this.conv = data;
        for(var j=data.length-1; j>=0 ; j--){
          this.finaldata.push(data[j]);
        }
        console.log('datafinal', this.conv);
        console.log('datafinalfj ', this.finaldata);
    });
  this.get_catagory('stemi-india-lucknow-2018');
}

get_catagory(event) {
  this.service.event_home(event).subscribe(
      data => {
        this.catagory = data['data'];
      })
}
}
