import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-question-page-post-event',
  templateUrl: './question-page-post-event.component.html',
  styleUrls: ['./question-page-post-event.component.css']
})
export class QuestionPagePostEventComponent implements OnInit {
  kp_model: any = {};
  kp1_model: any = {};
  id_of_user: any;
  event_data: any;
  keyTakeAway:boolean=false;
  constructor(private userService: UserServiceService, private router: ActivatedRoute, private route: Router) { }
  kpFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  ngOnInit() {
    this.kp1_model.response_type = 'post-event'; 

    this.router.params.subscribe(params => {
      //   console.log('this is llovwee,',params);
      this.id_of_user = params['id'];
      //alert("Doctor id is :: "+this.id_of_user)
      //     alert("All Docs"+this.id_of_event);
      //  localStorage.setItem('Mail_slug', this.all_doc);
    });
    this.getDetailsForForm();
  }

  
  about_form() {

    const data1 = JSON.stringify(this.kp_model);

    this.userService.send_kp_form_data(data1).subscribe(
      data => {
        if (data['success']) {
          // console.log(data1);
          alert('Details Updates Successfully');
        }
      });




  }

  response_form() {


    this.kp1_model.event_details = this.id_of_user;
    console.log(JSON.stringify(this.kp1_model))
    const data1 = JSON.stringify(this.kp1_model);
    this.userService.send_kp1_form_data(data1).subscribe(
      data => {
        if (data['status'] == 200) {
          // console.log(data1);
          alert('Details Updated Successfully');
          this.route.navigate(['']);
        }
      });

  }
  getDetailsForForm() {

    this.userService.kp_event_get_id_for_form(this.id_of_user).subscribe(
      data => {
        if (data['success']) {
          this.event_data = data['data'][0];
        }
      });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  appointLetter : boolean =false;
  showAppointmentLetter(){
    this.appointLetter=true;
  }

  toggle = true;
  status = 'Enable'; 
  
  toggle1 = true;
  status1 = 'Enable'; 
  
  toggle2 = true;
  status2 = 'Enable'; 
  
  toggle3 = true;
  status3 = 'Enable'; 
  
  toggle4 = true;
  status4 = 'Enable'; 
  
  
  enableDisableRule(job) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    this.toggle1 =true;
    this.toggle2 =true;
    this.toggle3 =true;
    this.toggle4 =true;
    this.kp1_model.concept='No';
   
  
  }
  enableDisableRule1(job) {
    this.toggle1 = !this.toggle1;
    this.status1 = this.toggle1 ? 'Enable' : 'Disable';
   
    this.kp1_model.concept='No';
   
    this.toggle =true;
    this.toggle2 =true;
    this.toggle3 =true;
    this.toggle4 =true;
  }
  enableDisableRule2(job) {
    this.toggle2 = !this.toggle2;
    this.status2 = this.toggle2 ? 'Enable' : 'Disable';
    this.toggle1 =true;
    this.toggle =true;
    this.toggle3 =true;
    this.toggle4 =true;
    this.kp1_model.concept='No';
   
  
  }
  enableDisableRule3(job) {
    this.toggle3 = !this.toggle3;
    this.status3 = this.toggle3 ? 'Enable' : 'Disable';
   
    this.toggle1 =true;
    this.toggle2 =true;
    this.toggle =true;
    this.toggle4 =true;
    this.kp1_model.concept='No';
  
  }
  enableDisableRule4(job) {
    this.toggle4 = !this.toggle4;
    this.status4 = this.toggle4 ? 'Enable' : 'Disable';
    this.toggle1 =true;
    this.toggle2 =true;
    this.toggle3 =true;
    this.toggle =true;
    this.kp1_model.concept='Yes';

  }



togglep = true;
statusp = 'Enable'; 

togglep1 = true;
statusp1 = 'Enable'; 

togglep2 = true;
statusp2 = 'Enable'; 

togglep3 = true;
statusp3 = 'Enable'; 

togglep4 = true;
statusp4 = 'Enable'; 


enableDisableRulep(job) {
  this.togglep = !this.togglep;
  this.statusp = this.togglep ? 'Enable' : 'Disable';
  this.togglep1 =true;
  this.togglep2 =true;
  this.togglep3 =true;
  this.togglep4 =true;
  this.kp1_model.podCast='No';
 

}
enableDisableRulep1(job) {
  this.togglep1 = !this.togglep1;
  this.statusp1 = this.togglep1 ? 'Enable' : 'Disable';
 
  this.kp1_model.podCast='No';
 
  this.togglep =true;
  this.togglep2 =true;
  this.togglep3 =true;
  this.togglep4 =true;
}
enableDisableRulep2(job) {
  this.togglep2 = !this.togglep2;
  this.statusp2 = this.togglep2 ? 'Enable' : 'Disable';
  this.togglep1 =true;
  this.togglep =true;
  this.togglep3 =true;
  this.togglep4 =true;
  this.kp1_model.podCast='No';
 

}
enableDisableRulep3(job) {
  this.togglep3 = !this.togglep3;
  this.statusp3 = this.togglep3 ? 'Enable' : 'Disable';
 
  this.togglep1 =true;
  this.togglep2 =true;
  this.togglep =true;
  this.togglep4 =true;
  this.kp1_model.podCast='No';

}
enableDisableRulep4(job) {
  this.togglep4 = !this.togglep4;
  this.statusp4 = this.togglep4 ? 'Enable' : 'Disable';
  this.togglep1 =true;
  this.togglep2 =true;
  this.togglep3 =true;
  this.togglep =true;
  this.kp1_model.podCast='Yes';

}



toggles = true;
statuss = 'Enable'; 

toggles1 = true;
statuss1 = 'Enable'; 

toggles2 = true;
statuss2 = 'Enable'; 

toggles3 = true;
statuss3 = 'Enable'; 

toggles4 = true;
statuss4 = 'Enable'; 


enableDisableRules(job) {
  this.toggles = !this.toggles;
  this.statuss = this.toggles ? 'Enable' : 'Disable';
  this.toggles1 =true;
  this.toggles2 =true;
  this.toggles3 =true;
  this.toggles4 =true;
  this.kp1_model.podCast='No';
 

}
enableDisableRules1(job) {
  this.toggles1 = !this.toggles1;
  this.statuss1 = this.toggles1 ? 'Enable' : 'Disable';
 
  this.kp1_model.podCast='No';
 
  this.toggles =true;
  this.toggles2 =true;
  this.toggles3 =true;
  this.toggles4 =true;
}
enableDisableRules2(job) {
  this.toggles2 = !this.toggles2;
  this.statuss2 = this.toggles2 ? 'Enable' : 'Disable';
  this.toggles1 =true;
  this.toggles =true;
  this.toggles3 =true;
  this.toggles4 =true;
  this.kp1_model.podCast='No';
 

}
enableDisableRules3(job) {
  this.toggles3 = !this.toggles3;
  this.statuss3 = this.toggles3 ? 'Enable' : 'Disable';
 
  this.toggles1 =true;
  this.toggles2 =true;
  this.toggles =true;
  this.toggles4 =true;
  this.kp1_model.podCast='No';


}
enableDisableRules4(job) {
  this.toggles4 = !this.toggles4;
  this.statuss4 = this.toggles4 ? 'Enable' : 'Disable';
  this.toggles1 =true;
  this.toggles2 =true;
  this.toggles3 =true;
  this.toggles =true;
  
}



toggleb = true;
statusb = 'Enable'; 

toggleb1 = true;
statusb1 = 'Enable'; 

toggleb2 = true;
statusb2 = 'Enable'; 

toggleb3 = true;
statusb3 = 'Enable'; 

toggleb4 = true;
statusb4 = 'Enable'; 


enableDisableRuleb(job) {
  this.toggleb = !this.toggleb;
  this.statusb = this.toggleb ? 'Enable' : 'Disable';
  this.toggleb1 =true;
  this.toggleb2 =true;
  this.toggleb3 =true;
  this.toggleb4 =true;
  this.kp1_model.blog='No';

}
enableDisableRuleb1(job) {
  this.toggleb1 = !this.toggleb1;
  this.statusb1 = this.toggleb1 ? 'Enable' : 'Disable';
 
  this.kp1_model.blog='No';
 
  this.toggleb =true;
  this.toggleb2 =true;
  this.toggleb3 =true;
  this.toggleb4 =true;
}
enableDisableRuleb2(job) {
  this.toggleb2 = !this.toggleb2;
  this.statusb2 = this.toggleb2 ? 'Enable' : 'Disable';
  this.toggleb1 =true;
  this.toggleb =true;
  this.toggleb3 =true;
  this.toggleb4 =true;
  this.kp1_model.blog='No';
 

}
enableDisableRuleb3(job) {
  this.toggleb3 = !this.toggleb3;
  this.statusb3 = this.toggleb3 ? 'Enable' : 'Disable';
 
  this.toggleb1 =true;
  this.toggleb2 =true;
  this.toggleb =true;
  this.toggleb4 =true;
  this.kp1_model.blog='No';

}
enableDisableRuleb4(job) {
  this.toggleb4 = !this.toggleb4;
  this.statusb4 = this.toggleb4 ? 'Enable' : 'Disable';
  this.toggleb1 =true;
  this.toggleb2 =true;
  this.toggleb3 =true;
  this.toggleb =true;
  this.kp1_model.blog='Yes';

}

toggleevent = true;
statusevent = 'Enable'; 

toggleevent1 = true;
statusevent1 = 'Enable'; 

toggleevent2 = true;
statusevent2 = 'Enable'; 

toggleevent3 = true;
statusevent3 = 'Enable'; 

toggleevent4 = true;
statusevent4 = 'Enable'; 


enableDisableRuleEvent(job) {
  this.toggleevent = !this.toggleevent;
  this.statusevent = this.toggleevent ? 'Enable' : 'Disable';
  this.toggleevent1 =true;
  this.toggleevent2 =true;
  this.toggleevent3 =true;
  this.toggleevent4 =true;
  this.kp1_model.budget='No';
 

}
enableDisableRuleEvent1(job) {
  this.toggleevent1 = !this.toggleevent1;
  this.statusevent1 = this.toggleevent1 ? 'Enable' : 'Disable';
 
  this.kp1_model.budget='No';
 
  this.toggleevent =true;
  this.toggleevent2 =true;
  this.toggleevent3 =true;
  this.toggleevent4 =true;
}
enableDisableRuleEvent2(job) {
  this.toggleevent2 = !this.toggleevent2;
  this.statusevent2 = this.toggleevent2 ? 'Enable' : 'Disable';
  this.toggleevent1 =true;
  this.toggleevent =true;
  this.toggleevent3 =true;
  this.toggleevent4 =true;
  this.kp1_model.budget='No';
 

}
enableDisableRuleEvent3(job) {
  this.toggleevent3 = !this.toggleevent3;
  this.statusevent3 = this.toggleevent3 ? 'Enable' : 'Disable';
 
  this.toggleevent1 =true;
  this.toggleevent2 =true;
  this.toggleevent =true;
  this.toggleevent4 =true;
  this.kp1_model.budget='No';

}
enableDisableRuleEvent4(job) {
  this.toggleevent4 = !this.toggleevent4;
  this.statusevent4 = this.toggleevent4 ? 'Enable' : 'Disable';
  this.toggleevent1 =true;
  this.toggleevent2 =true;
  this.toggleevent3 =true;
  this.toggleevent =true;
  this.kp1_model.budget='Yes';

}

toggleCall = true;
statusCall = 'Enable'; 

toggleCall1 = true;
statusCall1 = 'Enable'; 

toggleCall2 = true;
statusCall2 = 'Enable'; 

toggleCall3 = true;
statusCall3 = 'Enable'; 

toggleCall4 = true;
statusCall4 = 'Enable'; 


enableDisableRuleCall(job) {
  this.toggleCall = !this.toggleCall;
  this.statusCall = this.toggleCall ? 'Enable' : 'Disable';
  this.toggleCall1 =true;
  this.toggleCall2 =true;
  this.toggleCall3 =true;
  this.toggleCall4 =true;
  this.kp1_model.investment='No';
 

}
enableDisableRuleCall1(job) {
  this.toggleCall1 = !this.toggleCall1;
  this.statusCall1 = this.toggleCall1 ? 'Enable' : 'Disable';
 
  this.kp1_model.investment='No';
 
  this.toggleCall =true;
  this.toggleCall2 =true;
  this.toggleCall3 =true;
  this.toggleCall4 =true;
}
enableDisableRuleCall2(job) {
  this.toggleCall2 = !this.toggleCall2;
  this.statusCall2 = this.toggleCall2 ? 'Enable' : 'Disable';
  this.toggleCall1 =true;
  this.toggleCall =true;
  this.toggleCall3 =true;
  this.toggleCall4 =true;
  this.kp1_model.investment='No';
 

}
enableDisableRuleCall3(job) {
  this.toggleCall3 = !this.toggleCall3;
  this.statusCall3 = this.toggleCall3 ? 'Enable' : 'Disable';
 
  this.toggleCall1 =true;
  this.toggleCall2 =true;
  this.toggleCall =true;
  this.toggleCall4 =true;
  this.kp1_model.investment='No';

}
enableDisableRuleCall4(job) {
  this.toggleCall4 = !this.toggleCall4;
  this.statusCall4 = this.toggleCall4 ? 'Enable' : 'Disable';
  this.toggleCall1 =true;
  this.toggleCall2 =true;
  this.toggleCall3 =true;
  this.toggleCall =true;
  this.kp1_model.investment='Yes';

}



toggleKey = true;
statusKey = 'Enable'; 

toggleKey1 = true;
statusKey1 = 'Enable'; 

toggleKey2 = true;
statusKey2 = 'Enable'; 

toggleKey3 = true;
statusKey3 = 'Enable'; 

toggleKey4 = true;
statusKey4 = 'Enable'; 


enableDisableRuleKey(job) {
  this.toggleKey = !this.toggleKey;
  this.statusKey = this.toggleKey ? 'Enable' : 'Disable';
  this.toggleKey1 =true;
  this.toggleKey2 =true;
  this.toggleKey3 =true;
  this.toggleKey4 =true;
  this.kp1_model.keyTakeAway='No';
 

}
enableDisableRuleKey1(job) {
  this.toggleKey1 = !this.toggleKey1;
  this.statusKey1 = this.toggleKey1 ? 'Enable' : 'Disable';
 
  this.kp1_model.toggleKey4='No';
 
  this.toggleKey =true;
  this.toggleKey2 =true;
  this.toggleKey3 =true;
  this.toggleKey4 =true;
}
enableDisableRuleKey2(job) {
  this.toggleKey2 = !this.toggleKey2;
  this.statusKey2 = this.toggleKey2 ? 'Enable' : 'Disable';
  this.toggleKey1 =true;
  this.toggleKey =true;
  this.toggleKey3 =true;
  this.toggleKey4 =true;
  this.kp1_model.keyTakeAway='No';
 

}
enableDisableRuleKey3(job) {
  this.toggleKey3 = !this.toggleKey3;
  this.statusKey3 = this.toggleKey3 ? 'Enable' : 'Disable';
 
  this.toggleKey1 =true;
  this.toggleKey2 =true;
  this.toggleKey =true;
  this.toggleKey4 =true;
  this.kp1_model.keyTakeAway='No';

}
enableDisableRuleKey4(job) {
  this.toggleKey4 = !this.toggleKey4;
  this.statusKey4 = this.toggleKey4 ? 'Enable' : 'Disable';
  this.toggleKey1 =true;
  this.toggleKey2 =true;
  this.toggleKey3 =true;
  this.toggleKey =true;
  this.kp1_model.keyTakeAway='Yes';

}
seTkeyTakeAway :boolean=false;
showKeyTakeAway(){
  this.seTkeyTakeAway=true;
}
ktNew :boolean=false;

showKeyTakeAwayNew(){
  this.ktNew=true;

}
speakerTalk:boolean=false;
showSpeakerTalk(){
  this.speakerTalk=true;
}
qot:boolean=false;

showQOT(){
this.qot=true;
}



toggleSpeakerTalk = true;
statusSpeakerTalk = 'Enable'; 

toggleSpeakerTalk1 = true;
statusSpeakerTalk1 = 'Enable'; 

toggleSpeakerTalk2 = true;
statusSpeakerTalk2 = 'Enable'; 

toggleSpeakerTalk3 = true;
statusSpeakerTalk3 = 'Enable'; 

toggleSpeakerTalk4 = true;
statusSpeakerTalk4 = 'Enable'; 


enableDisableRuleSpeakerTalk(job) {
  this.toggleSpeakerTalk = !this.toggleSpeakerTalk;
  this.statusSpeakerTalk = this.toggleSpeakerTalk ? 'Enable' : 'Disable';
  this.toggleSpeakerTalk1 =true;
  this.toggleSpeakerTalk2 =true;
  this.toggleSpeakerTalk3 =true;
  this.toggleSpeakerTalk4 =true;
  this.kp1_model.speaker_talk='No';
 

}
enableDisableRuleSpeakerTalk1(job) {
  this.toggleSpeakerTalk1 = !this.toggleSpeakerTalk1;
  this.statusSpeakerTalk1 = this.toggleSpeakerTalk1 ? 'Enable' : 'Disable';
 
  this.kp1_model.toggleSpeakerTalk4='No';
 
  this.toggleSpeakerTalk =true;
  this.toggleSpeakerTalk2 =true;
  this.toggleSpeakerTalk3 =true;
  this.toggleSpeakerTalk4 =true;
}
enableDisableRuleSpeakerTalk2(job) {
  this.toggleSpeakerTalk2 = !this.toggleSpeakerTalk2;
  this.statusSpeakerTalk2 = this.toggleSpeakerTalk2 ? 'Enable' : 'Disable';
  this.toggleSpeakerTalk1 =true;
  this.toggleSpeakerTalk =true;
  this.toggleSpeakerTalk3 =true;
  this.toggleSpeakerTalk4 =true;
  this.kp1_model.speaker_talk='No';
 

}
enableDisableRuleSpeakerTalk3(job) {
  this.toggleSpeakerTalk3 = !this.toggleSpeakerTalk3;
  this.statusSpeakerTalk3 = this.toggleSpeakerTalk3 ? 'Enable' : 'Disable';
 
  this.toggleSpeakerTalk1 =true;
  this.toggleSpeakerTalk2 =true;
  this.toggleSpeakerTalk =true;
  this.toggleSpeakerTalk4 =true;
  this.kp1_model.speaker_talk='No';

}
enableDisableRuleSpeakerTalk4(job) {
  this.toggleSpeakerTalk4 = !this.toggleSpeakerTalk4;
  this.statusSpeakerTalk4 = this.toggleSpeakerTalk4 ? 'Enable' : 'Disable';
  this.toggleSpeakerTalk1 =true;
  this.toggleSpeakerTalk2 =true;
  this.toggleSpeakerTalk3 =true;
  this.toggleSpeakerTalk =true;
  this.kp1_model.speaker_talk='Yes';

}


toggleQot = true;
statusQot = 'Enable'; 

toggleQot1 = true;
statusQot1 = 'Enable'; 

toggleQot2 = true;
statusQot2 = 'Enable'; 

toggleQot3 = true;
statusQot3 = 'Enable'; 

toggleQot4 = true;
statusQot4 = 'Enable'; 


enableDisableRuleQot(job) {
  this.toggleQot = !this.toggleQot;
  this.statusQot = this.toggleQot ? 'Enable' : 'Disable';
  this.toggleQot1 =true;
  this.toggleQot2 =true;
  this.toggleQot3 =true;
  this.toggleQot4 =true;
  this.kp1_model.question_of_the_talk='No';
 

}
enableDisableRuleQot1(job) {
  this.toggleQot1 = !this.toggleQot1;
  this.statusQot1 = this.toggleQot1 ? 'Enable' : 'Disable';
 
  this.kp1_model.question_of_the_talk='No';
 
  this.toggleQot =true;
  this.toggleQot2 =true;
  this.toggleQot3 =true;
  this.toggleQot4 =true;
}
enableDisableRuleQot2(job) {
  this.toggleQot2 = !this.toggleQot2;
  this.statusQot2 = this.toggleQot2 ? 'Enable' : 'Disable';
  this.toggleQot1 =true;
  this.toggleQot =true;
  this.toggleQot3 =true;
  this.toggleQot4 =true;
  this.kp1_model.question_of_the_talk='No';
 

}
enableDisableRuleQot3(job) {
  this.toggleQot3 = !this.toggleQot3;
  this.statusQot3 = this.toggleQot3 ? 'Enable' : 'Disable';
 
  this.toggleQot1 =true;
  this.toggleQot2 =true;
  this.toggleQot =true;
  this.toggleQot4 =true;
  this.kp1_model.question_of_the_talk='No';

}
enableDisableRuleQot4(job) {
  this.toggleQot4 = !this.toggleQot4;
  this.statusQot4 = this.toggleQot4 ? 'Enable' : 'Disable';
  this.toggleQot1 =true;
  this.toggleQot2 =true;
  this.toggleQot3 =true;
  this.toggleQot =true;
  this.kp1_model.question_of_the_talk='Yes';

}


toggleSlide = true;
statusSlide = 'Enable'; 

toggleSlide1 = true;
statusSlide1 = 'Enable'; 

toggleSlide2 = true;
statusSlide2 = 'Enable'; 

toggleSlide3 = true;
statusSlide3 = 'Enable'; 

toggleSlide4 = true;
statusSlide4 = 'Enable'; 


enableDisableRuleSlide(job) {
  this.toggleSlide = !this.toggleSlide;
  this.statusSlide = this.toggleSlide ? 'Enable' : 'Disable';
  this.toggleSlide1 =true;
  this.toggleSlide2 =true;
  this.toggleSlide3 =true;
  this.toggleSlide4 =true;
  this.kp1_model.slides='No';
 

}
enableDisableRuleSlide1(job) {
  this.toggleSlide1 = !this.toggleSlide1;
  this.statusSlide1 = this.toggleSlide1 ? 'Enable' : 'Disable';
 
  this.kp1_model.slides='No';
 
  this.toggleSlide =true;
  this.toggleSlide2 =true;
  this.toggleSlide3 =true;
  this.toggleSlide4 =true;
}
enableDisableRuleSlide2(job) {
  this.toggleSlide2 = !this.toggleSlide2;
  this.statusSlide2 = this.toggleSlide2 ? 'Enable' : 'Disable';
  this.toggleSlide1 =true;
  this.toggleSlide =true;
  this.toggleSlide3 =true;
  this.toggleSlide4 =true;
  this.kp1_model.slides='No';
 

}
enableDisableRuleSlide3(job) {
  this.toggleSlide3 = !this.toggleSlide3;
  this.statusSlide3 = this.toggleSlide3 ? 'Enable' : 'Disable';
 
  this.toggleSlide1 =true;
  this.toggleSlide2 =true;
  this.toggleSlide =true;
  this.toggleSlide4 =true;
  this.kp1_model.slides='No';

}
enableDisableRuleSlide4(job) {
  this.toggleSlide4 = !this.toggleSlide4;
  this.statusSlide4 = this.toggleSlide4 ? 'Enable' : 'Disable';
  this.toggleSlide1 =true;
  this.toggleSlide2 =true;
  this.toggleSlide3 =true;
  this.toggleSlide =true;
  this.kp1_model.slides='Yes';

}

toggleApp = true;
statusApp = 'Enable'; 

toggleApp1 = true;
statusApp1 = 'Enable'; 

toggleApp2 = true;
statusApp2 = 'Enable'; 

toggleApp3 = true;
statusApp3 = 'Enable'; 

toggleApp4 = true;
statusApp4 = 'Enable'; 


enableDisableRuleApp(job) {
  this.toggleApp = !this.toggleApp;
  this.statusApp = this.toggleApp ? 'Enable' : 'Disable';
  this.toggleApp1 =true;
  this.toggleApp2 =true;
  this.toggleApp3 =true;
  this.toggleApp4 =true;
  this.kp1_model.dedicated_app='No';
 

}
enableDisableRuleApp1(job) {
  this.toggleApp1 = !this.toggleApp1;
  this.statusApp1 = this.toggleApp1 ? 'Enable' : 'Disable';
 
  this.kp1_model.dedicated_app='No';
 
  this.toggleApp =true;
  this.toggleApp2 =true;
  this.toggleApp3 =true;
  this.toggleApp4 =true;
}
enableDisableRuleApp2(job) {
  this.toggleApp2 = !this.toggleApp2;
  this.statusApp2 = this.toggleApp2 ? 'Enable' : 'Disable';
  this.toggleApp1 =true;
  this.toggleApp =true;
  this.toggleApp3 =true;
  this.toggleApp4 =true;
  this.kp1_model.dedicated_app='No';
 

}
enableDisableRuleApp3(job) {
  this.toggleApp3 = !this.toggleApp3;
  this.statusApp3 = this.toggleApp3 ? 'Enable' : 'Disable';
 
  this.toggleApp1 =true;
  this.toggleApp2 =true;
  this.toggleApp =true;
  this.toggleApp4 =true;
  this.kp1_model.dedicated_app='No';

}
enableDisableRuleApp4(job) {
  this.toggleApp4 = !this.toggleApp4;
  this.statusApp4 = this.toggleApp4 ? 'Enable' : 'Disable';
  this.toggleApp1 =true;
  this.toggleApp2 =true;
  this.toggleApp3 =true;
  this.toggleApp =true;
  this.kp1_model.dedicated_app='Yes';

}

showBlog:boolean=false;
showBlogs(){
this.showBlog=true;
}
showSlide:boolean=false;
showSlides(){
this.showSlide=true;
}
audioRecord:boolean=false;
showAudioRecord(){
this.audioRecord=true;
}

getKeyTakeAways(){
  this.keyTakeAway=true;
}

dApp:boolean=false;
getDedicatedApp(){
  this.dApp=true;

}
}
