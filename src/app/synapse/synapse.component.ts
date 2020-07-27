import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-synapse',
  templateUrl: './synapse.component.html',
  styles: []
})
export class SynapseComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('The Last Word | TheRighDoctors');
  }

}
