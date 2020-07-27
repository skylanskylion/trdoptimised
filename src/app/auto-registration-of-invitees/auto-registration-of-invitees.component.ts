import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class CSVRecord {
  public username: any;
  public email: any;
  public password: any;
  public mobile: any;
  public country_code: any;
  public confirmpassword: any;
  public speciality1: any;
  public website_id: any;
  public hospital: any;
  public photo1: any;
}
					


@Component({
  selector: 'app-auto-registration-of-invitees',
  templateUrl: './auto-registration-of-invitees.component.html',
  styleUrls: ['./auto-registration-of-invitees.component.css']
})
export class AutoRegistrationOfInviteesComponent implements OnInit {
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
   this.userService.mail_checking(this.csvRecords[i]['email'])
   .subscribe(data =>{
     console.log(data);
     if(data['success']){
        this.Existed_patient.push(this.csvRecords[i]['name']+' '+this.csvRecords[i]['email']);
       // this.router.navigate(['/dashboard/patient-list']);
      }
     else{
      this.userService.AddNewUserIfNotExists(this.csvRecords[i])
      .subscribe(data1 => {
          console.log('Reached near to goal');
          console.log(data1);
          if (data1['success']) {
            alert('Doctor added to your Database');
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
                    csvRecord.username = data[0];    
                    csvRecord.email = data[1];         
                    csvRecord.password = data[2];      
                    csvRecord.mobile = data[3];      
                    csvRecord.country_code = data[4];  
                    csvRecord.confirmpassword = data[5];
                    csvRecord.speciality1 = data[6];
                    csvRecord.website_id = data[7];
                    csvRecord.hospital = data[8];
                    csvRecord.photo1 = data[9];
                    dataArr.push(csvRecord); 
                    
               //}       
           }   
    return dataArr; 
} 



  openDialog2(): void {
    const dialogRef = this.dialog.open(FormatComponent, {
      width: '420px',
      height: '700px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


export class FormatComponent implements OnInit {

  dateOfBirth = new FormControl('', [
    Validators.required
  ]);
  medicalHistory = new FormControl('', [
    Validators.required
  ]);
  @ViewChild(NgForm) f: NgForm;


  matcher = new MyErrorStateMatcher();


  patient_model: any = {};
  Existed_patient: any[] = [];

  @ViewChild('fileImportInput') fileImportInput: any;
  constructor(public dialog: MatDialog, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {

  }




}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class ImportAutoRegistration implements OnInit {

  dateOfBirth = new FormControl('', [
    Validators.required
  ]);
  medicalHistory = new FormControl('', [
    Validators.required
  ]);
  @ViewChild(NgForm) f: NgForm;
  

  matcher = new MyErrorStateMatcher();

  public csvRecords: any[] = [];
  patient_model: any = {};
  Existed_patient: any[] = [];

  @ViewChild('fileImportInput') fileImportInput: any;
  constructor (public dialog: MatDialog, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    
  }



  openDialog2(): void {
    const dialogRef = this.dialog.open(FormatComponent, {
      width: '420px',
      height: '700px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

}