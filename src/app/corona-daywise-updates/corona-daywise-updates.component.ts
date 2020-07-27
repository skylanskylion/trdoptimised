import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-corona-daywise-updates',
  templateUrl: './corona-daywise-updates.component.html',
  styleUrls: ['./corona-daywise-updates.component.css']
})
export class CoronaDaywiseUpdatesComponent implements OnInit {
  // title = 'angularowlslider';
  customOptions: any = {
    loop: false,
    // loop: true,
    autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  day_wise_list: object[] =[];
  day : any ; 
  constructor(private userservice : UserServiceService) { }

  ngOnInit() {
    this.get_day_wise_updates(); 
    this.day = new Date(); 
    this.day = this.day.getDate() + 7 ;  
  }
  get_day_wise_updates(){
    this.userservice.get_day_wise_updates().subscribe(data =>{
      if(data['success']){
        console.log('DATa' , data['data'])
        let present_date = formatDate(new Date() , 'yyyy/MM/dd', 'en');
        console.log('Present Date', present_date); 
        for(let i = 0 ; i < data['data'].length ; ++i){
          if( formatDate(data['data'][i]['created_at'] ,'yyyy/MM/dd', 'en' ) == present_date)      
              this.day_wise_list.push(data['data'][i]); 
        }
      }
      this.day_wise_list.sort(function(a, b) {
        a = new Date(a['updated_at']);
        b = new Date(b['updated_at']);
        return a>b ? -1 : a<b ? 1 : 0;
    });
    console.log(this.day_wise_list)
    });
  }
  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }

    return items;
  }

}

