import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styles: []
})
export class SpecialsComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.titleService.setTitle('Specials | TheRighDoctors');
      this.meta.updateTag({name: 'description', content:  'TheRightDoctors.com will be setting up a High Definition Multi Cam TV studio and record Interviews, ' +
              'Panel Discussions, Debates and Key Take Aways'});
      this.meta.updateTag({name: 'keywords', content: 'therightdoctors, stemi india 2018, emcure aicog tv 2018, bhubaneswar, wcce jaipur 2017, csicon kolkata 2017, wccicc mumbai 2017,' +
              ' csicon kochi 2017, wccpci mount abu 2018, c3 florida 2018, apvic new delhi 2016, csinic hyderabad 2016, revolution talk, ihj, csi cardiac prevent new delhi 2015 wcchd mumbai, ias hyderaba 2014  ' +
              'TheRightDoctors '
      });
  }

}
