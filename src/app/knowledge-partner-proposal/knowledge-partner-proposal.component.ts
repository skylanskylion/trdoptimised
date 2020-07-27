import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-knowledge-partner-proposal',
  templateUrl: './knowledge-partner-proposal.component.html',
  styleUrls: ['./knowledge-partner-proposal.component.css']
})
export class KnowledgePartnerProposalComponent implements OnInit {
  event: any;
  b_url: any;
  ev: any;
  venue: any; 

  constructor(private route: ActivatedRoute, private meta: Meta,
    private _formBuilder: FormBuilder, private titleService: Title) { }

  ngOnInit() {
    
   
  }
}
