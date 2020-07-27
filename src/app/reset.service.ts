import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(
    private http:HttpClient
  ) { }

  response:any;

  reset(obj:any){
    console.log("hello")
    return this.http.post('https://therightdoctors.com/api/beta/contribution/resetPassword?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',obj)
  }

}