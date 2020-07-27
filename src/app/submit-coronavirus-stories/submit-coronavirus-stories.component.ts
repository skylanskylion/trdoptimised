import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-submit-coronavirus-stories',
  templateUrl: './submit-coronavirus-stories.component.html',
  styleUrls: ['./submit-coronavirus-stories.component.css']
})
export class SubmitCoronavirusStoriesComponent implements OnInit {
  model: any = {};
  constructor(private userService: UserServiceService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
  onSubmit(){
   console.log(JSON.stringify(this.model))
   const data1 = JSON.stringify(this.model);
   this.userService.coronavirus_story(data1).subscribe(
     data => {
       if (data['status'] == 200) {
         // console.log(data1);
         alert('Details Updated Successfully');
         this.route.navigate(['']);
       }
     });
  }
  // createRange(number) {
  //   var items: number[] = [];
  //   for (var i = 1; i <= number; i++) {
  //     items.push(i);
  //   }
  //   return items;
  // }
}
