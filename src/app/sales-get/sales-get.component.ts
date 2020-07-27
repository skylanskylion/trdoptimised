import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
    selector: 'app-sales-get',
    templateUrl: './sales-get.component.html',
    styleUrls: ['./sales-get.component.css']
})
export class SalesGetComponent implements OnInit {

    constructor(private sales:UserServiceService) { }

    ngOnInit() {
        console.log('Start');
        this.sales.get_rest_access().subscribe(resp => {
            console.log('Inside');
            console.log(resp);
            console.log(resp['access_token']);
            this.sales.get_dash().subscribe(resp2=>{
                console.log(resp2);
                var dashData = resp2['data'];
                var dashDataNames = [];
                dashData.forEach(dashKey => {
                        // console.log(dashKey);
                        dashDataNames.push(dashKey['doctor_name']);
                    }
                )
                var URLString = "https://ap7.salesforce.com/services/data/v43.0/query?q=SELECT+name+,+FirstName+,+LastName+,+Title+,+Email+,+MobilePhone+,+Hospital__c+,+Specialty__c+,+Name_of_the_College__c+,+Website__c+,+Contact_Source__c+,+Department+,+Status__c+,+Date_of_Birth__c+,+Personal_Email__c+,+Phone+,+Phone1__c+from+Contact+WHERE+";
                var URLString1 = "https://ap7.salesforce.com/services/data/v43.0/query?q=SELECT+name+,+FirstName+,+LastName+,+Title+,+Email+,+MobilePhone+,+Hospital__c+,+Specialty__c+,+Name_of_the_College__c+,+Website__c+,+Contact_Source__c+,+Department+,+Status__c+,+Date_of_Birth__c+,+Personal_Email__c+,+Phone+,+Phone1__c+from+Contact+WHERE+";
                var size = dashDataNames.length;
                // console.log(size);
                var iter = 0;
                dashDataNames.forEach(dashName => {
                    if((iter >= 0) && (iter < size/2)) {
                        URLString += "name+LIKE+%27%25";
                        URLString += dashName;
                        URLString += "%25%27";
                        if (iter <= (size / 2) - 1) {
                            URLString += "+OR+";
                        }
                    }
                    else {
                        URLString1 += "name+LIKE+%27%25";
                        URLString1 += dashName;
                        URLString1 += "%25%27";
                        if (iter <= size - 2) {
                            URLString1 += "+OR+";

                        }
                    }
                    iter++;
                })
                // console.log(iter);
                console.log(URLString);

                this.sales.get_sales(resp['access_token'], URLString).subscribe(resp3=>{
                    console.log(resp3);
                    var salesData = resp3['records'];
                    console.log(salesData[0]['Name']);
                    var count1 = 0;
                    dashData.forEach(dashElem => {
                        salesData.forEach(salesElem => {
                            // console.log("inside double for");
                            // console.log(dashElem['doctor_name']);
                            // console.log(salesElem['name']);
                            if (dashElem['doctor_name'] == salesElem['Name']) {
                                console.log("inside name if");
                                if ((dashElem['email'] === salesElem['Email']) || (dashElem['designation'] === salesElem['Title']) || (dashElem['hospital'] === salesElem['Hospital__c']) || (dashElem['number'] === salesElem['MobilePhone'])){
                                    count1++;
                                    console.log('Inside conds if');
                                    const data={
                                        doctor_name: salesElem['Name'],    //
                                        designation: '',   //
                                        hospital: '', //
                                        number: '', //
                                        email: '', //
                                        img_url: dashElem['img_url'], //
                                        large_img_url : dashElem['large_img_url'], //
                                        doc_personal_website: '', //
                                        doc_official_website: dashElem['doc_official_website'], //
                                        speciality: '', //
                                        college: '', //
                                        degree_yr: dashElem['degree_yr'], //
                                        designation_yr: dashElem['designation_yr'], //
                                        contact_source: '', //
                                        dept: '', //
                                        status: '', //
                                        business: dashElem['business'], //
                                        dob: '', //
                                        marriage: dashElem['marriage'], //
                                        email1: '', //
                                        number1: '', //
                                        land_line: '', //
                                        land_line1: dashElem['land_line1'], //
                                        assistant:dashElem['assistant'], //
                                        assistant_num: dashElem['assistant_num'], //
                                        assistant_num1: dashElem['assistant_num1'], //
                                        reports : dashElem['reports'], //
                                        slug: 'dr-'+ salesElem['FirstName']+'-'+salesElem['LastName']
                                    };

                                    if(!(salesElem['Title']) || (salesElem['Title'] == '')){
                                        data['designation'] = dashElem['designation'];
                                    }
                                    else{
                                        data['designation'] = salesElem['Title'];
                                    }
                                    if(!(salesElem['Hospital__c']) || (salesElem['Hospital__c'] == '')){
                                        data['hospital'] = dashElem['hospital'];
                                    }
                                    else{
                                        data['hospital'] = salesElem['Hospital__c'];
                                    }
                                    if(!(String(salesElem['MobilePhone'])) || (String(salesElem['MobilePhone']) == '')){
                                        data['number'] = dashElem['number'];
                                    }
                                    else{
                                        data['number'] = salesElem['MobilePhone'];
                                    }
                                    if(!(salesElem['Email']) || (salesElem['Email'] == '')){
                                        data['email'] = dashElem['email'];
                                    }
                                    else{
                                        data['email'] = salesElem['Email'];
                                    }
                                    if(!(salesElem['Specialty__c']) || (salesElem['Specialty__c'] == '')){
                                        data['speciality'] = dashElem['speciality'];
                                    }
                                    else{
                                        data['speciality'] = salesElem['Specialty__c'];
                                    }
                                    if(!(salesElem['Website__c']) || (salesElem['Website__c'] == '')){
                                        data['doc_personal_website'] = dashElem['doc_personal_website'];
                                    }
                                    else{
                                        data['doc_personal_website'] = salesElem['Website__c'];
                                    }
                                    if(!(salesElem['Name_of_the_College__c']) || (salesElem['Name_of_the_College__c'] == '')){
                                        data['college'] = dashElem['college'];
                                    }
                                    else{
                                        data['college'] = salesElem['Name_of_the_College__c'];
                                    }
                                    if(!(salesElem['Contact_Source__c']) || (salesElem['Contact_Source__c'] == '')){
                                        data['contact_source'] = dashElem['contact_source'];
                                    }
                                    else{
                                        data['contact_source'] = salesElem['Contact_Source__c'];
                                    }
                                    if(!(salesElem['Department']) || (salesElem['Department'] == '')){
                                        data['dept'] = dashElem['dept'];
                                    }
                                    else{
                                        data['dept'] = salesElem['Department'];
                                    }
                                    if(!(salesElem['Status__c']) || (salesElem['Status__c'] == '')){
                                        data['status'] = dashElem['status'];
                                    }
                                    else{
                                        data['status'] = salesElem['Status__c'];
                                    }
                                    if(!(salesElem['Date_of_Birth__c']) || (salesElem['Date_of_Birth__c'] == '')){
                                        data['dob'] = dashElem['dob'];
                                    }
                                    else{
                                        data['dob'] = salesElem['Date_of_Birth__c'];
                                    }
                                    if(!(salesElem['Personal_Email__c']) || (salesElem['Personal_Email__c'] == '')){
                                        data['email1'] = dashElem['email1'];
                                    }
                                    else{
                                        data['email1'] = salesElem['Personal_Email__c'];
                                    }
                                    if(!(salesElem['Phone']) || (salesElem['Phone'] == '')){
                                        data['number1'] = dashElem['number1'];
                                    }
                                    else{
                                        data['number1'] = salesElem['Phone'];
                                    }
                                    if(!(salesElem['Phone1__c']) || (salesElem['Phone1__c'] == '')){
                                        data['land_line'] = dashElem['land_line'];
                                    }
                                    else{
                                        data['land_line'] = salesElem['Phone1__c'];
                                    }
                                    // if(!(salesElem['AssistantName']) || (salesElem['AssistantName'] == '')){
                                    //     data['assistant'] = dashElem['assistant'];
                                    // }
                                    // else{
                                    //     data['assistant'] = salesElem['AssistantName'];
                                    // }
                                    // if(!(salesElem['AssistantPhone']) || (salesElem['AssistantPhone'] == '')){
                                    //     data['assistant_num'] = dashElem['assistant_num'];
                                    // }
                                    // else{
                                    //     data['assistant_num'] = salesElem['AssistantPhone'];
                                    // }

                                    console.log(data);
                                    console.log(dashElem);

                                    this.sales.post_dash(data).subscribe(resp4=>{
                                        console.log('Uploaded');
                                        console.log(resp4);
                                    });
                                }
                            }
                        })
                    })
                    console.log(count1);
                });

                console.log(URLString1);

                this.sales.get_sales(resp['access_token'], URLString1).subscribe(resp5=>{
                    console.log(resp5);
                    var salesData = resp5['records'];
                    console.log(salesData[0]['Name']);
                    var count2 = 0;
                    dashData.forEach(dashElem => {
                        salesData.forEach(salesElem => {
                            // console.log("inside double for");
                            // console.log(dashElem['doctor_name']);
                            // console.log(salesElem['name']);
                            if (dashElem['doctor_name'] == salesElem['Name']) {
                                console.log("inside name if");
                                if ((dashElem['email'] === salesElem['Email']) || (dashElem['designation'] === salesElem['Title']) || (dashElem['hospital'] === salesElem['Hospital__c']) || (dashElem['number'] === salesElem['MobilePhone'])){
                                    count2++;
                                    console.log('Inside conds if');
                                    const data={
                                        doctor_name: salesElem['Name'],    //
                                        designation: '',   //
                                        hospital: '', //
                                        number: '', //
                                        email: '', //
                                        img_url: dashElem['img_url'], //
                                        large_img_url : dashElem['large_img_url'], //
                                        doc_personal_website: '', //
                                        doc_official_website: dashElem['doc_official_website'], //
                                        speciality: '', //
                                        college: '', //
                                        degree_yr: dashElem['degree_yr'], //
                                        designation_yr: dashElem['designation_yr'], //
                                        contact_source: '', //
                                        dept: '', //
                                        status: '', //
                                        business: dashElem['business'], //
                                        dob: '', //
                                        marriage: dashElem['marriage'], //
                                        email1: '', //
                                        number1: '', //
                                        land_line: '', //
                                        land_line1: dashElem['land_line1'], //
                                        assistant:dashElem['assistant'], //
                                        assistant_num: dashElem['assistant_num'], //
                                        assistant_num1: dashElem['assistant_num1'], //
                                        reports : dashElem['reports'], //
                                        slug: 'dr-'+ salesElem['FirstName']+'-'+salesElem['LastName']
                                    };

                                    if(!(salesElem['Title']) || (salesElem['Title'] == '')){
                                        data['designation'] = dashElem['designation'];
                                    }
                                    else{
                                        data['designation'] = salesElem['Title'];
                                    }
                                    if(!(salesElem['Hospital__c']) || (salesElem['Hospital__c'] == '')){
                                        data['hospital'] = dashElem['hospital'];
                                    }
                                    else{
                                        data['hospital'] = salesElem['Hospital__c'];
                                    }
                                    if(!(String(salesElem['MobilePhone'])) || (String(salesElem['MobilePhone']) == '')){
                                        data['number'] = dashElem['number'];
                                    }
                                    else{
                                        data['number'] = salesElem['MobilePhone'];
                                    }
                                    if(!(salesElem['Email']) || (salesElem['Email'] == '')){
                                        data['email'] = dashElem['email'];
                                    }
                                    else{
                                        data['email'] = salesElem['Email'];
                                    }
                                    if(!(salesElem['Specialty__c']) || (salesElem['Specialty__c'] == '')){
                                        data['speciality'] = dashElem['speciality'];
                                    }
                                    else{
                                        data['speciality'] = salesElem['Specialty__c'];
                                    }
                                    if(!(salesElem['Website__c']) || (salesElem['Website__c'] == '')){
                                        data['doc_personal_website'] = dashElem['doc_personal_website'];
                                    }
                                    else{
                                        data['doc_personal_website'] = salesElem['Website__c'];
                                    }
                                    if(!(salesElem['Name_of_the_College__c']) || (salesElem['Name_of_the_College__c'] == '')){
                                        data['college'] = dashElem['college'];
                                    }
                                    else{
                                        data['college'] = salesElem['Name_of_the_College__c'];
                                    }
                                    if(!(salesElem['Contact_Source__c']) || (salesElem['Contact_Source__c'] == '')){
                                        data['contact_source'] = dashElem['contact_source'];
                                    }
                                    else{
                                        data['contact_source'] = salesElem['Contact_Source__c'];
                                    }
                                    if(!(salesElem['Department']) || (salesElem['Department'] == '')){
                                        data['dept'] = dashElem['dept'];
                                    }
                                    else{
                                        data['dept'] = salesElem['Department'];
                                    }
                                    if(!(salesElem['Status__c']) || (salesElem['Status__c'] == '')){
                                        data['status'] = dashElem['status'];
                                    }
                                    else{
                                        data['status'] = salesElem['Status__c'];
                                    }
                                    if(!(salesElem['Date_of_Birth__c']) || (salesElem['Date_of_Birth__c'] == '')){
                                        data['dob'] = dashElem['dob'];
                                    }
                                    else{
                                        data['dob'] = salesElem['Date_of_Birth__c'];
                                    }
                                    if(!(salesElem['Personal_Email__c']) || (salesElem['Personal_Email__c'] == '')){
                                        data['email1'] = dashElem['email1'];
                                    }
                                    else{
                                        data['email1'] = salesElem['Personal_Email__c'];
                                    }
                                    if(!(salesElem['Phone']) || (salesElem['Phone'] == '')){
                                        data['number1'] = dashElem['number1'];
                                    }
                                    else{
                                        data['number1'] = salesElem['Phone'];
                                    }
                                    if(!(salesElem['Phone1__c']) || (salesElem['Phone1__c'] == '')){
                                        data['land_line'] = dashElem['land_line'];
                                    }
                                    else{
                                        data['land_line'] = salesElem['Phone1__c'];
                                    }
                                    // if(!(salesElem['AssistantName']) || (salesElem['AssistantName'] == '')){
                                    //     data['assistant'] = dashElem['assistant'];
                                    // }
                                    // else{
                                    //     data['assistant'] = salesElem['AssistantName'];
                                    // }
                                    // if(!(salesElem['AssistantPhone']) || (salesElem['AssistantPhone'] == '')){
                                    //     data['assistant_num'] = dashElem['assistant_num'];
                                    // }
                                    // else{
                                    //     data['assistant_num'] = salesElem['AssistantPhone'];
                                    // }

                                    console.log(data);
                                    console.log(dashElem);

                                    this.sales.post_dash(data).subscribe(resp6=>{
                                        console.log('Uploaded');
                                        console.log(resp6);
                                    });
                                }
                            }
                        })
                    })
                    console.log(count2);
                });
            });
        });
        console.log('End');
    }
}
