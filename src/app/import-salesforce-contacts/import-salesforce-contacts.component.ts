
import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class CSVRecord {
      public  doctor_name: any;
     
      public  designation: any;
      public  hospital: any;
      public  number: any;
      public  email: any;
      public  img_url: any;
      public  large_img_url: any;
      public  doc_official_website: any;
      public  doc_personal_website: any;
      public  number1: any;
      public  email1: any;
      public  land_line1: any;
      public  land_line: any;
      public  speciality: any;
      public  city: any;
      public  country: any;
      public  dob: any;
      public  assistant: any;
      public  assistant_num: any;
      public  assistant_num1: any;
      public  reports: any;
      public  marriage: any;
      public  business: any;
      public  status: any;
      public  dept: any;
      public  contact_source: any;
      public  designation_yr: any;
      public  degree_yr: any;
      public  college: any;
      public  tags: any;
      public  import_details: any;
      public  slug:  any;
}
@Component({
  selector: 'app-import-salesforce-contacts',
  templateUrl: './import-salesforce-contacts.component.html',
  styleUrls: ['./import-salesforce-contacts.component.css']
})
export class ImportSalesforceContactsComponent implements OnInit {

  public csvRecords: any[] = [];
  patient_model: any = {};
  Existed_patient: any[] = [];

  @ViewChild('fileImportInput') fileImportInput: any; 
  constructor(public dialog: MatDialog, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
  }

  fileChangeListener($event: any): void {     
    console.log("Inside File Change Listener");
    var text = [];     
    var files = $event.srcElement.files;          

    if (this.isCSVFile(files[0])) {         
       var input = $event.target;         
       var reader = new FileReader();          
       reader.readAsText(input.files[0]);         

       reader.onload = (data) => {            
            let csvData = reader.result;            
            let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);             
            let headersRow = this.getHeaderArray(csvRecordsArray);             
            this.csvRecords = this.getDataRecordsArrayFromCSVFile(csvRecordsArray,                                    
               headersRow.length);         
              console.log(this.csvRecords);
              }               

               reader.onerror = function() {            
                   alert("Unable to read " + input.files[0]);          
               };      
      } else {          
             alert("Please import valid .csv file.");          
             //this.fileReset();      
      } 
} 

submit(){
  for(let i=0; i< this.csvRecords.length; i++){
   this.userService.update_salesforce_doctor(this.csvRecords[i]['slug'], this.csvRecords[i])
   .subscribe(data =>{
     console.log(data);
     if(data['success']){
       console.log('updated details: '+this.csvRecords[i]['doctor_name']+' '+this.csvRecords[i]['slug']);
       // this.Existed_patient.push(this.csvRecords[i]['doctor_name']+' '+this.csvRecords[i]['email']);
       // this.router.navigate(['/dashboard/patient-list']);
      }
     else{
       console.log('error');
      this.userService.doctor_details_post(this.csvRecords[i])
      .subscribe(data1 => {
          console.log('Reached near to goal');
          console.log(data1);
          if (data1['success']) {
            console.log('sucess');
            //alert('Doctor added to your Database');
           // this.router.navigate(['/dashboard/patient-list']);
          }
        },
        error => {
          console.log(error);
        });
     }
   })
  }
}

isCSVFile(file: any) {

  return file.name.endsWith(".csv");

}

getHeaderArray(csvRecordsArr: any) 
{      
   let headers = csvRecordsArr[0].split(';');      
   let headerArray = [];            

   for (let j = 0; j < headers.length; j++) {        
               headerArray.push(headers[j]);      
   }        
  return headerArray; 
}


getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) 
{     
          console.log("=====================getDataRecordsArrayFromCSVFile=================:=="+csvRecordsArray[0]);
          var dataArr = []          

          for (let i = 1; i < csvRecordsArray.length; i++) {         
               let data = csvRecordsArray[i].split(';');         
               // FOR EACH ROW IN CSV FILE IF THE NUMBER OF COLUMNS         
               // ARE SAME AS NUMBER OF HEADER COLUMNS THEN PARSE THE DATA        
               console.log("=====================data 1=================:=="+data);
               console.log("=====================data 2=================:=="+headerLength);
               
              // if (data.length == headerLength) {   
                          console.log('if');
                    var csvRecord: CSVRecord = new CSVRecord();   
                    var name=  data[0]+' '+data[1]+' '+data[2];
                    csvRecord.doctor_name = data[0]+' '+data[1]+' '+data[2];    
                  csvRecord.email = data[3];         
                  csvRecord.number = data[4];      
                 name= name.replace(/[\. ,:-]+/g, "-");
                 csvRecord.slug= name.toLowerCase();

                  csvRecord.tags = data[5];
                    csvRecord.import_details = data[6];
                    csvRecord.speciality = data[7];  
                    csvRecord.designation = data[8];
                    csvRecord.hospital = data[9];                                        
                    // csvRecord.doctor_name = data[1]+' '+data[2]+' '+data[3];
                    // csvRecord.email = data[5];         
                    // csvRecord.number = data[6];      
                    
                    dataArr.push(csvRecord); 
                    
               //}       
           }   
    return dataArr; 
} 



  // openDialog2(): void {
  //   const dialogRef = this.dialog.open(FormatComponent, {
  //     width: '420px',
  //     height: '700px',
  //     data: {}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

}
