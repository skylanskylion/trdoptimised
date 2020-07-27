import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service'

@Component({
  selector: 'app-covidstats',
  templateUrl: './covidstats.component.html',
  styleUrls: ['./covidstats.component.css']
})
export class CovidstatsComponent implements OnInit {
  title = 'heatMap';
  response:any;
  selectedState:string;
  constructor(
    private userservice : UserServiceService 
  ){}

  ngOnInit(){
    this.stateData();
  }

  states=["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Tamil Nadu", "Telengana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"]

  stateData(){
    this.userservice.stateData().subscribe(
      responseData=>{
        console.log("Hello" ,JSON.parse(responseData['_body']))
        this.response=JSON.parse(responseData['_body']);
        var maxS='';
        var maxC=0;
        for(var state in this.response){
          console.log(state)
          if(this.response[state].cases>maxC){
            maxS=state;
            maxC=+this.response[state].cases;
            console.log('CC', maxC)
          }
        }

        for(var state in this.response){
          console.log(this.response[state]);
          if(state!='total'){
            var percentage=(this.response[state].cases)*100/maxC

            if(this.response[state].cases==0){
              this.response[state].shade=this.colors['6'];
            }else if(percentage<10){
              this.response[state].shade=this.colors['5'];
            }else if(percentage<28){
              this.response[state].shade=this.colors['7'];
            }else if(percentage<0){
              this.response[state].shade=this.colors['4'];
            }else if(percentage<50){
              this.response[state].shade=this.colors['3'];
            }else if(percentage<70){
              this.response[state].shade=this.colors['2'];
            }else if(percentage<=100){
              this.response[state].shade=this.colors['1'];
            }
          }
        }

      },
      err=>{
        console.log(err);
      }
    )
  }

  colors={
    '1':'#00008B',
    '2':'#0000CD',
    '3':'#0000FF',
    '4':'#6495ED',
    '5':'#E0FFFF',
    '6':'#FFFFFF',
    '7':'#87CEEB'
  }

  click(value:string){
    console.log("clicked")
    this.selectedState=value
  }

}

