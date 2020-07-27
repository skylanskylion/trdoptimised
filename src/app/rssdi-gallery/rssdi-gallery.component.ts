import { Component, OnInit } from '@angular/core';
import {CatagoryServiceService} from "../catagory-service.service";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-rssdi-gallery',
  templateUrl: './rssdi-gallery.component.html',
  styleUrls: ['./rssdi-gallery.component.css']
})
export class RssdiGalleryComponent implements OnInit {

    yoga: any;
    str: any;
    conv: object[] = [];


    constructor(private CatagoryService: CatagoryServiceService, private titleService: Title, private meta: Meta) {
    }

    ngOnInit() {
        this.titleService.setTitle('Wockhardt RSSDI tv Ahmedabad | The Last Word | TheRighDoctors');
        this.meta.updateTag({name: 'description', content:  'TheRightDoctors.com will be setting up a High Definition Multi Cam TV studio and record Key Take Aways.' +
                ' Your wisdom will be transmitted globally across multiple digital and social media channels including Facebook, Whatsapp, Twitter and Youtube.'});
        this.meta.updateTag({name: 'keywords', content: 'wockhardt rssdi tv, therightdoctors, stemi india 2018, emcure aicog tv 2018, bhubaneswar, wcce jaipur 2017, csicon kolkata 2017, wccicc mumbai 2017,' +
                ' csicon kochi 2017, wccpci mount abu 2018, c3 florida 2018, apvic new delhi 2016, csinic hyderabad 2016, revolution talk, ihj, csi cardiac prevent new delhi 2015 wcchd mumbai, ias hyderaba 2014  ' +
                'TheRightDoctors '
        });
        this.the_last_word();
    }

    createRange(number) {
        var items: number[] = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    }

    the_last_word() {
        console.log('get catagory calling');
        this.CatagoryService.rssdi_the_last_word().subscribe(
            data => {

                for (var i = 0; i < data['data'].length; i++) {
                        this.conv.push(data['data'][i]);
                        console.log(this.conv);
                        console.log('Yes I am in');
                }
                console.log('I CANT SEE DATA HERE in single componenet : ', this.conv);
            }
        );
    }


}
