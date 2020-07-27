import {Component, OnInit} from '@angular/core';
import {Upload} from './shared/upload';
import {UploadService} from './shared/upload.service';
import * as _ from "lodash";
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  constructor(private upSvc: UploadService) {
  }

  ngOnInit() {
  }

  selectedFiles: FileList;
  currentUpload: Upload;

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload)
  }

  uploadMulti() {
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushUpload(this.currentUpload)}
    )
  }



}
