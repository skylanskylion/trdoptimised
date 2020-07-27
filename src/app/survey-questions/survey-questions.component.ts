import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from "../presentation/presentation.component";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.css']
})
export class SurveyQuestionsComponent implements OnInit {
    model: any = {};
    seasons: string[] = ['yes', 'No'];
    Online_resource: string[] = ['Yes', 'No', 'Maybe'];
    preparations: string [] =['books' ,'Online'];
    genders:string [] =['Male','Female' ,'Do not wish to specify'];
    genderFormGroup: FormGroup;
    collegeFormGroup: FormGroup;
    passOutYearFormGroup:FormGroup;
    sourceOfKnowledgeFormGroup:FormGroup;
    onlineResourceFormGroup:FormGroup;
    onlineResourceWebFormGroup:FormGroup;
    presentationExamFormGroup:FormGroup;
    usefullOnlineAccessFormGroup:FormGroup;
    videoTutorialsFormGroup:FormGroup;
    domainExpertFormGroup:FormGroup;
    biggestAcadminNeedFormGroup:FormGroup;
    fulfilAcademicNeedFormGroup:FormGroup;
    aboutTrdFormGroup:FormGroup;
    emailFormGroup:FormGroup;
    dmStudentFormGroup:FormGroup;
    nameFormGroup:FormGroup;
    mobileNumberFormGroup:FormGroup;
    constructor(private service: UserServiceService, private route: ActivatedRoute, private router: Router, private meta: Meta,
                private _formBuilder: FormBuilder, private titleService: Title) { }


    matcher = new MyErrorStateMatcher();
    ngOnInit() {
        this.genderFormGroup = this._formBuilder.group({
            gender: ['', Validators.required]
        });
        /*this.collegeFormGroup = this._formBuilder.group({
            hospital_college: ['', Validators.required]
        });*/
        this.passOutYearFormGroup = this._formBuilder.group({
            pass_out_year: ['', Validators.required]
        });
        this.sourceOfKnowledgeFormGroup = this._formBuilder.group({
            source_of_knowledge: ['', Validators.required]
        });
        this.onlineResourceFormGroup = this._formBuilder.group({
            online_resource: ['', Validators.required]
        });
        this.onlineResourceWebFormGroup = this._formBuilder.group({
            online_resource_websites: ['', Validators.required]
        });
        this.presentationExamFormGroup = this._formBuilder.group({
            preparation_for_exams: ['', Validators.required],
        });
        this.usefullOnlineAccessFormGroup = this._formBuilder.group({
            useful_online_access: ['', Validators.required],
        });
        this.videoTutorialsFormGroup = this._formBuilder.group({
            video_tutorials: ['', Validators.required],
        });
        this.domainExpertFormGroup = this._formBuilder.group({
            domain_expets_lectures: ['', Validators.required],
        });
        this.biggestAcadminNeedFormGroup = this._formBuilder.group({
            biggest_academic_need: ['', Validators.required],
        });
        this.fulfilAcademicNeedFormGroup = this._formBuilder.group({
            fulfil_academic_need: ['', Validators.required],
        });
        this.aboutTrdFormGroup = this._formBuilder.group({
            about_trd: ['', Validators.required],
        });
        this.emailFormGroup = this._formBuilder.group({
            email: ['', Validators.required],
        });
        this.nameFormGroup = this._formBuilder.group({
            name: ['', Validators.required],
        });
        this.mobileNumberFormGroup = this._formBuilder.group({
            mobile_number: ['', Validators.required],
        });
        this.dmStudentFormGroup = this._formBuilder.group({
            student: ['', Validators.required],
        });
        /*this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });*/


        this.titleService.setTitle('DM Cardiology Survey | TheRightDoctors');
        this.meta.updateTag({name: 'description', content: 'Survey to identify academic needs of DM Cardiology students'});
        this.meta.updateTag({name: 'keywords', content: 'DM cardiology, TheRightDoctors, Students, Survey, Cardiology survey'});
        /*this.meta.updateTag({name: 'rel', href: this.single_article['image_url']});*/
        this.meta.updateTag({
            property: 'vr:canonical',
            content: 'https://therightdoctors.com/survey-100119'
        });
        this.meta.updateTag({property: 'og:title', content: "Mapping today's digital academic needs"});
        this.meta.updateTag({property: 'og:description', content: 'Survey to identify academic needs of DM Cardiology students'});
        this.meta.updateTag({
            property: 'og:url',
            content: 'https://therightdoctors.com/survey-100119'
        });
        this.meta.updateTag({property: 'og:image', content: 'https://storage.googleapis.com/web-assets/web-docsimage/Image.jpg'});
        this.meta.updateTag({property: 'og:image:secure_url', content: 'https://storage.googleapis.com/web-assets/web-docsimage/Image.jpg'});

        this.meta.updateTag({name: 'twitter:title', content: "Mapping today's digital academic needs"});
        this.meta.updateTag({name: 'twitter:description', content: 'Survey to identify academic needs of DM Cardiology students'});
        /*this.meta.updateTag({name: 'twitter:text:description', content: this.single_article['headline2']});*/
        this.meta.updateTag({name: 'twitter:image', content: 'https://storage.googleapis.com/web-assets/web-docsimage/Image.jpg'});
        this.meta.updateTag({
            name: 'twitter:url',
            content: 'https://therightdoctors.com/survey-100119'});
        this.meta.updateTag({name: 'twitter:text:description', content: 'Survey to identify academic needs of DM Cardiology students'});

    }

    submit_review(){
      console.log(this.model);
     this.model.hospital_college = '';
     this.service.submit_survey_details(this.model).subscribe(data => {
         console.log(data);
         if(data['success']) {
             alert('Your Survey details Submitted Successfully');
             this.router.navigate(['/']);
         }
     })
    }

}
