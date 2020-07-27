import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {HttpErrorResponse} from '@angular/common/http';
import {Upload} from '../uploads/shared/upload';
import * as _ from 'lodash';
import {UploadService} from '../uploads/shared/upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(private service: UserServiceService,private upSvc: UploadService) { }
  user: any;
  profile: any;
  data: any;
  list: any;
  loading: any;
  nf: boolean = false;
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

  // follow(){
  //   if(localStorage.getItem('currentUser')){
  //     if(this.single_article['follow_details'].length > 0){
  //       for(let k = 0; k< this.single_article['follow_details'].length; k++){
  //         if(this.single_article['follow_details'][k].id == JSON.parse(localStorage.getItem('currentUser')).p_id){
  //           console.log("continue");
  //           this.follow_toggle = 1;
  //         }
  //       }
  //       if(this.follow_toggle == 0){
  //         this.temp_follow = new new_follow();
  //         console.log("Temp_follow", this.temp_follow);
  //         this.follow_toggle = 1;
  //         this.update_follow(this.temp_follow);
  //       }
  //     }
  //     else{
  //       this.follow_toggle = 1;
  //       console.log(this.single_article['follow_details'].length);
  //       console.log("follow_details are empty",this.single_article['follow_details']);
  //       this.temp_follow = new new_follow();
  //       console.log("Temp_follow", this.temp_follow);
  //       this.update_follow(this.temp_follow);
  //     }
  //   }
  //   else{
  //     this.openDialog();
  //   }
  // }

  // update_follow(follow_details){
  //   console.log(follow_details);
  //   console.log(JSON.parse(localStorage.getItem('currentUser')));
  //   console.log(JSON.parse(localStorage.getItem('currentUser')).p_id);
  //   follow_details.id = JSON.parse(localStorage.getItem('currentUser')).p_id;
  //   follow_details.followed = this.single_article['guest1'];
  //   follow_details.follower = JSON.parse(localStorage.getItem('currentUser')).username;
  //   this.follow_list.push(follow_details);
  //   this.model['follow_details'] = this.follow_list;
  //   console.log(this.slug);
  //   console.log(this.model);
  //   this.articleservice.update_follows(this.model, this.slug).subscribe(
  //       data => {
  //         console.log(data['data']);
  //       });
  // }
  // update_follow_list_value(follow_list: any){
  //   this.follow_list = follow_list;
  // }


}
