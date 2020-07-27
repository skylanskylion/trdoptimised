import { Component, OnInit } from '@angular/core';
import {AdService} from "../dynamic/ad.service";
import {Http, Response} from "@angular/http";
import {UserServiceService} from "../user-service.service";
import { DatePipe } from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'

@Component({
  selector: 'app-auto-engagement-triggers',
  templateUrl: './auto-engagement-triggers.component.html',
  styleUrls: ['./auto-engagement-triggers.component.css'],
  providers: [DatePipe]
})
export class AutoEngagementTriggersComponent implements OnInit {
  addForm: FormGroup;
  rows: FormArray;
  itemForm: FormGroup;
   start_date: any;
   end_date: any;
   period: string;
   condition: string;
   period_options: any;
   conditions: any;
   article_url: string;
   allarticles: any;
   sms_template: any;
   from_name: any;
   slugs: any;
   time: any;
   original: any;
   i: any = 0;
   c_day: any;
   days: any;
   show: any;
   action: any;
all_doc : any;
   sel_value: any;
   sel_p: any;


   //c
   invoiceForm: FormGroup;
  quizForm: FormGroup;

  constructor(private adService: AdService, private http: Http, private service: UserServiceService, private datePipe: DatePipe,private fb: FormBuilder,private router: ActivatedRoute) {
    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);
   }

  ngOnInit() {
    this.router.params.subscribe(params => {
   //   console.log('this is llovwee,',params);
      this.all_doc = params['all'];
      alert("All Docs"+this.all_doc);
      console.log("All Docs"+this.all_doc);
    //  localStorage.setItem('Mail_slug', this.all_doc);
    });
    this.sel_p = false;
    //this.add_it = document.getElementById("add_it").innerHTML;
    this.action=['Yes','No'];
    this.period_options=["daily","weekly","monthly"];
    this.conditions=["no conditions","first day","product","subscribe"];
    this.article_url = 'https://therightdoctors.com/api/beta/article/new/home/assets/test?day=Friday&key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg';
    this.show = [];
    console.log('set articles calling');
    this.http.get(this.article_url)
        .map((res: Response) => res.json()).subscribe(data => {
          this.allarticles = data['data'];
          console.log(this.allarticles);
        })
        this.slugs = ["torrent-rssdi-tv-dr-ak-gupta-blog"];
        this.get_slugs();
        this.period = '* * * * *';
        this.days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        this.addForm.get("items_value").setValue("yes");
    
            this.addForm.addControl('rows', this.rows);
            // this.addForm.addControl('subconditions_list', this.rows);

            this.onAddRow();

            this.invoiceForm = this.fb.group({
              chapter: this.fb.array([]),
            });
          // this.addNewRow();

      }

       initContract() {
    return this.fb.group({
      chapter_title: '',
      course_id: '',
      lecture: this.fb.array([])
    });
  }

  get chapter(): FormArray {
    return this.invoiceForm.get('chapter') as FormArray;
  }

  deleteRow(index: number) {
    const control = <FormArray>this.invoiceForm.controls['chapter'];
    control.removeAt(index);
  }


  addNewRowdf() {
    const control = <FormArray>this.invoiceForm.controls['chapter'];
    const newchapter = this.initContract();
    control.push(newchapter);
  }

      onAddRow() {
       // const control = <FormArray>this.addForm.controls['subconditions_list'];
        this.rows.push(this.createItemFormGroup());
        this.show.push(false);
        this.i = this.i+1;
      }

      AddYesSubCondition(){
        const control = <FormArray>this.addForm.controls['subconditions_list'];
        const newrow = this.initContractQM();
        control.push(newrow);
      }

      // onAddRow1() {
      //   this.rows.push(this.createItemFormGroup1());
      // }

      onRemoveRow(rowIndex:number){
        this.rows.removeAt(rowIndex);
      }

      function (value) {
        console.log('function');
        console.log(value);

        this.sel_p = true;
        // this.countrycode = value;
        // //this.temp = value;
        // this.patient_model.country_code = value;
        // console.log('I am in function');
        // console.log(this.countrycode);
      }

      createItemFormGroup(): FormGroup {
        return this.fb.group({
          selectedCondition: null,
          period: null,
          c_day: null,
          c_time: null,
          action:null,
          YES: null,
          NO: null,
          subconditions_list: this.fb.array([]),
        });
      }

      get subconditions_list(): FormArray {
        return this.addForm.get('subconditions_list') as FormArray;
      }

      initContractQM() {
        return this.fb.group({
          selectedCondition: null,
          period: null,
          c_day: null,
          c_time: null,
          action:null,
          YES: null,
          NO: null,
          subconditions_list: this.fb.array([]),
        });
      }

      // createItemFormGroup1(): FormGroup {
      //   return this.fb.group({
      //     selectedAction: null,
      //   });
      // }

    

  scheduled(){
    var currentDate = new Date();
    var date = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    console.log(date);
    if(this.start_date <= date && this.end_date >= date){
      console.log("filter");
      if(this.condition==this.conditions[0]){
        this.send_email();
      }
      else if (this.condition == this.conditions[1]) {
        this.send_email();
      }
      else if(this.condition == this.conditions[2]){
        this.send_email();
      }
      else{
        this.send_email();
      }

    }

  }

  send_email() {
    // var em_list = this.email.replace( /\n/g,',').split(",");
    // em_list = {...em_list};
    let result = ["xyz"];
     let f_d = {
        data: result, 
        sms: this.sms_template, 
        from_me: this.from_name
      }
    console.log(f_d);
    if(this.c_day == null){
      this.c_day = 'undefined';
    }
    this.service.send_email_test(this.slugs,this.period,this.time,this.start_date,this.end_date,this.c_day).subscribe(
      data => {
        console.log(data);
      }
    )
    console.log("hello");
  }

  Onsubmit(){
    console.log([this.start_date,this.end_date,this.period,this.condition,this.time,this.c_day]);
    //this.send_email();
    this.scheduled();
    // this.service.update_ae_database(this.start_date,this.end_date,this.period,this.condition,this.time,this.c_day).subscribe(
    //   data => {
    //     console.log(data)
    //   }
    // )
  }

  AddYesAction(){
    this.show[this.i-1] = true;
    console.log(this.show);
  }

 get_slugs() {
    // var em_list = this.email.replace( /\n/g,',').split(",");
    // em_list = {...em_list};
    this.service.get_slugs().subscribe(
      data => {
       this.slugs = JSON.parse(data['_body'])['data'];
       console.log("slugs",this.slugs);
      }
    )
    console.log("hi");
  }





}