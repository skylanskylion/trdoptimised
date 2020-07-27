import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {
  model: any ={};

  constructor(private route: ActivatedRoute, private service: UserServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(param =>{
      this.update_details(param['slug']);
    })
  }

  update_details(slug){
    this.model.status = 'unsubscribe';
    this.service.update_unsubscribe(slug, JSON.stringify(this.model)).subscribe(data =>{
      if(data['success']){
        alert('success');
      }
    })
  }

}
