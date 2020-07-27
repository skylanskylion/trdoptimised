import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service'

@Component({
  selector: 'app-aoc-mumbai-polls-winners',
  templateUrl: './aoc-mumbai-polls-winners.component.html',
  styleUrls: ['./aoc-mumbai-polls-winners.component.css']
})
export class AocMumbaiPollsWinnersComponent implements OnInit {

  question : any;
  winnerList : any;
  answer : any;
    constructor(private user: UserServiceService) { }
  
    ngOnInit() {
      this.user.poll_quiz_questions().subscribe(data =>{
        if(data['success']){
          this.winnerList= data['data'];
          this.question=data['data'][0]['question'];
          this.answer=data['data'][0]['option'];
          console.log("Data-----"+JSON.stringify(data['data']));
        }
  
  
      } )
    }
  
  }
  