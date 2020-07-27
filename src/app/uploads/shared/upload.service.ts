import { Injectable } from '@angular/core';
import {Upload} from './upload';
import {UserServiceService} from "../../user-service.service";
//import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private db: AngularFireDatabase,private service: UserServiceService) { }

  private basePath:string = '/uploads';
  //uploads: FirebaseListObservable<Upload[]>;


  private basePath2 = '/Cathlab-business/profiles';

  pushFileToStorage(fileUpload: Upload, progress: {percentage: string}) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath2}/${fileUpload.file.name}`).put(fileUpload.file);
    return uploadTask;
  }

  pushUpload(upload: Upload) {
    let snap;
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        snap = snapshot as firebase.storage.UploadTaskSnapshot;
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        // upload.url = uploadTask.snapshot.downloadURL;
        // upload.name = upload.file.name;

        // uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        //   upload.downloadURL = downloadURL;
        //   console.log(upload.downloadURL);
        // });
        snap.ref.getDownloadURL().then(downloadURL => {console.log('File available at', downloadURL);
          upload.downloadURL = downloadURL;
          if ((upload.downloadURL).length > 1){
            this.saveFileData(upload);
          } else{
            alert('Image not uploaded');
          }
        });


      }
    );
  }



  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  this.service.changeImage(upload.downloadURL, JSON.parse(localStorage.getItem('currentUser'))['p_id']).subscribe(data=>
  {
    if (data['status']) {
      console.log(data);
      alert('Photo uploaded successfully...');
    } else {
      alert('Something wrong');
    }
  },error1 => console.log(error1));

  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
      .then( () => {
        this.deleteFileStorage(upload.name);
      })
      .catch(error => console.log(error));
  }

  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }

}

