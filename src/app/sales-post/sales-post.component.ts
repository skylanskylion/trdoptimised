import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserServiceService } from '../user-service.service';

@Component({
    selector: 'app-sales-post',
    templateUrl: './sales-post.component.html',
    styleUrls: ['./sales-post.component.css']
})
export class SalesPostComponent implements OnInit {

    slug: any;

    constructor(private route:ActivatedRoute,private sales:UserServiceService) { }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.slug = params['slug'];
        });

        console.log('Start');
        this.sales.get_access().subscribe(resp => {
            console.log('Inside');
            console.log(resp);
            console.log(resp['access_token']);
            this.sales.get_slug(this.slug).subscribe(resp3=>{
                console.log(resp3);
                var dash_data = resp3['data'];

                var name = dash_data['doctor_name'];
                var firstname = '';
                if(name.substring(0,3)=='Dr. ') {
                    firstname = name.substring(4);
                }
                else{
                    if(name.substring(0,3)=='Dr.') {
                        firstname = name.substring(3);
                    }
                    else {
                        firstname = name;
                    }
                }

                const data={
                    FirstName:firstname,
                    Title:dash_data['designation'],
                    Hospital__c:dash_data['hospital'],
                    MobilePhone:dash_data['number'],
                    Email:dash_data['email'],
                    Specialty__c:dash_data['speciality'],
                };
                console.log(data);

                this.sales.post_sales(resp['access_token'],data).subscribe(resp2=>{
                    console.log(resp2);
                });

            });

        });

        console.log('End');
    }

}
