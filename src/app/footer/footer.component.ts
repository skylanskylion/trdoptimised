import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  sumodel: any = {};

  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
  }

  email_sub() {
    console.log(this.sumodel);
    console.log('hii');
    //this.email= JSON.stringify(this.sumodel);
    // console.log('mail',this.email);
    /*this.userService.subscribe(this.sumodel)
      .subscribe(
        data => {
          if (data['success']) {
            console.log(data);
            alert('your Subscription successfully completed');
            console.log('return data' + data);
            //console.log('return id' + data['id']);
          }
        },
        error => {
          console.log(error);
        });*/
  }

}
