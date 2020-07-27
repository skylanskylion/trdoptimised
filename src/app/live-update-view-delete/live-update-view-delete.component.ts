import { Component, OnInit } from '@angular/core';
import {FirebaseServiceService} from "../firebase-service.service";
@Component({
  selector: 'app-live-update-view-delete',
  templateUrl: './live-update-view-delete.component.html',
  styleUrls: ['./live-update-view-delete.component.css']
})
export class LiveUpdateViewDeleteComponent implements OnInit {
  conv : any;
  finaldata : object[] = [];
  constructor(private fbs: FirebaseServiceService) { }

  ngOnInit() {
    this.fbs.onGetUserDocuments('gdggh').subscribe(data => {
      this.conv = data;
      for(var j=data.length-1; j>=0 ; j--){ 
        this.finaldata.push(data[j]);
      }
      console.log('datafinal', this.conv);
      console.log('datafinalfj ', this.finaldata);
  });
  }

}
