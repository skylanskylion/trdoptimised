import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-mail-ver-contribution',
  templateUrl: './mail-ver-contribution.component.html',
  styleUrls: ['./mail-ver-contribution.component.css']
})
export class MailVerContributionComponent implements OnInit {
  constructor(
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }

  verified=[]

  changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
          let csv: string = reader.result as string;
          var lst=csv.split('\n')
          this.verified=[]
          for(var index=0; index<lst.length;index++){
            console.log(lst[index])
            this.http.get('http://apilayer.net/api/check?access_key=4eea60a2a70d5b5810f194d7c2503cc8&email='+lst[index]+'&smtp=1&format=1').subscribe(
              responseData=>{
                console.log(responseData)
                if(responseData['smtp_check'] && responseData['mx_found'] && (responseData['did_you_mean']=='')){
                  this.verified.push(responseData['email'])
                }
                console.log(this.verified)
              },
              err=>{
                console.log(err)
              }
            )
          }

          // console.log(this.verified)


         }
      }
  }

}
