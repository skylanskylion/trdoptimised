import { Component, OnInit , } from '@angular/core';
import {LoginService} from '../login.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-subscription-newsletters',
  templateUrl: './subscription-newsletters.component.html',
  styleUrls: ['./subscription-newsletters.component.css']
})
export class SubscriptionNewslettersComponent implements OnInit {

  newsletters : any = [
    {
      'headline' : 'COVID-19 ', 
      'description': 'Your Guide to the latest updates on the COVID-19 pandemic.' , 
      'subscribe' : false
    }, 
    {
      'headline' : 'Morning Round', 
      'description': 'Start your morning rounds with quick snapshots on headline from leading publications across the world.' , 
      'subscribe' : false
    },  {
      'headline' : 'Mid After Update ', 
      'description': 'Get Post lunch brief on what\'s happening in the world of medical science. ' , 
      'subscribe' : false
    }, 
    {
      'headline' : 'Evening Rounds', 
      'description': 'Wrap your day with the overview of the headline across leading medical speciality.' , 
      'subscribe' : false
    },  {
      'headline' : 'Live Updates', 
      'description': 'All the live updates as they are breaking.' , 
      'subscribe' : false
    }
    
  ]
  user : any ; 
  count : number = 0 ; 
  selected_newsletters : any = []; 
  constructor(private loginService : LoginService , private router : Router ,private userService:UserServiceService,) { }
  ngOnInit() {
    this.user=this.loginService.getUser();
    console.log('USER :: ' , this.user); 
    if(this.user.name == null){
      alert('Please Log In ')
      this.router.navigate(['/subscription-login'])
    }
  }
  
  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
  change(number){
    this.newsletters[number]['subscribe'] = true ; 
    if(this.newsletters[number]['subscribe']){
      this.selected_newsletters.push(this.newsletters[number]['headline'])
    }
  }

  save(){
    alert("Successfully Saved !"); 
    this.userService.save_newsletters(this.selected_newsletters); 
    this.router.navigate(['/'])
  }


}
