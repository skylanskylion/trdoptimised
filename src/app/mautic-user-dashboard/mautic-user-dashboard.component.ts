import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service'
import { interval, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mautic-user-dashboard',
  templateUrl: './mautic-user-dashboard.component.html',
  styleUrls: ['./mautic-user-dashboard.component.css']
})
export class MauticUserDashboardComponent implements OnInit {
  contacts=[]
  team: any;
  constructor(
    private userservice : UserServiceService , 
    private router : ActivatedRoute 
  ) { }

  panelOpenState:boolean

  ngOnInit(): void {
     this.router.params.subscribe(params => {
      //   console.log('this is llovwee,',params);
      this.team = params['team'];
      //alert("Doctor id is :: "+this.id_of_user)
      //     alert("All Docs"+this.id_of_event);
      //  localStorage.setItem('Mail_slug', this.all_doc);
    });
    this.getContacts();
  }

  getContacts(){
    this.userservice.MauticgetContacts(this.team).subscribe(
      res=>{
        console.log(res)
        this.contacts=res['contacts']
        console.log(this.contacts)
      },
      err=>{
        console.log(err)
      }
    )
  }

  source = interval(10000);
  timerSubscription = this.source.subscribe(val => this.getContacts())

}
