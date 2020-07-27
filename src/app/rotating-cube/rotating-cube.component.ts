import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-rotating-cube',
  templateUrl: './rotating-cube.component.html',
  styleUrls: ['./rotating-cube.component.css']
})
export class RotatingCubeComponent implements OnInit {
  data : any ; 
  constructor(private userservice : UserServiceService) { }
  show:boolean;
  closed:boolean

  ngOnInit() {
    this.userservice.getData().subscribe(data => { this.data = JSON.parse(data['_body'])
  console.log('Cases ', data)
  }); 
    this.show = true ; 
  }
  
    closeCube(){
    this.show=false;
    this.closed=true
  }

  showCube(){
    this.show=true;
    this.closed=false;
  }

}