import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/toPromise';

import {Fileup} from './fileup';

@Injectable()
export class DataService {

    private customersUrl = 'https://www.therightdoctors.com/api/beta';  // URL to web API
    private  api_key  = '6ZzQ52peX5XqUx3t824670wv8jIaf1B4';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private db: AngularFireDatabase) { }

    private basePath = '/TRD/live-updates';

    pushFileToStorage(fileUpload: Fileup, progress: {percentage: string}) {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

        return uploadTask;

        /*uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot
          //progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)

        },
        (error) => {
          // fail
          console.log(error);
        },
        () => {
          // success
          fileUpload.url = uploadTask.snapshot.downloadURL;
          fileUpload.name = fileUpload.file.name;
          //console.log(fileUpload);
          progress.percentage = fileUpload.url;
          title = fileUpload.url;
          console.log(title);
          this.saveFileData(fileUpload);
          console.log('upoaded url'+ fileUpload.url);
          /!*return fileUpload.url;*!/
        }
      );*/

    }
    private handleError(error: any): Promise<any> {
        console.error('Error', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getAllStates(id) {
        console.log(id,'this si fai')
        return this.http.get('https://therightdoctors.com/api/beta/seco/state/?token=trd_token&country_id=' + id + '&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
    }

    getAllCities(id) {
        return this.http.get('https://therightdoctors.com/api/beta/seco/city/?token=trd_token&state_id=' + id + '&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg');
    }
    updatebapdetails(data) {
        alert('this')
        return this.http.put('https://therightdoctors.com/api/beta/bap?token=trd_token&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg', {'json': data});
    }
}
