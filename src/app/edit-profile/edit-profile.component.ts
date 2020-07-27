import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {HttpErrorResponse} from '@angular/common/http';
import {Upload} from '../uploads/shared/upload';
import * as _ from 'lodash';
import {UploadService} from '../uploads/shared/upload.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(private service: UserServiceService, private upSvc: UploadService) { }
  user: any;
  profile: any;
  data: any;
  list: any;
  loading: any;
  nf: boolean = false;
  model:any={};
  ngOnInit() {
    this.loading = true;
    this.nf = false;
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.get_profile();
  }
  get_profile () {
    this.nf = false;
    this.service.profile(this.user['p_id']).subscribe(
      data1 => {
        console.log('responce in main parent profile  --------------');
         console.log(data1);
        this.data = data1;
        console.log(this.data['data'][0]['username']);
        for (let i = 0; i < data1['data'].length; i++) {
          this.loading = true;
        }
        this.loading = false;
        this.list = data1;
        console.log(this.list);
        this.model.username = this.list['data'][0]['username'];
        this.model.email = this.list['data'][0]['email'];
        this.model.password = this.list['data'][0]['password'];
        this.model.mobile = this.list['data'][0]['mobile'];
        this.model.country_code = this.list['data'][0]['country_code'];
        //this.hservice.addNode(data1.json());
        } ,
      (err: HttpErrorResponse) => {
        console.log('errore----------------');
        this.loading = false;
        this.nf = true;
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );


  }

  createRange(number) {
    const items: number[] = [];
    for ( let i = 0; i <= number - 1; i++) {
      items.push(i);
    }
    return items;
  }

  Range(number) {
    const items: number[] = [];
    for ( let i = 0; i <= number - 1; i++) {
      items.push(i);
    }
    return items;
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }
  onSubmit() {
    console.log(this.model);
    console.log(this.user['p_id']);
    this.service.profile_update(JSON.stringify(this.model), JSON.parse(localStorage.getItem('currentUser'))['p_id'])
      .subscribe(
        data => {
            console.log(data);
          console.log(data["success"]);
          if (data['success']) {
            alert('Details updated Successfully');
          }
        },
        error => {
          console.log(error);
        }
      );
  }



}
