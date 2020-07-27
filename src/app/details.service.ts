import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor(
    private http : HttpClient,
  ) { }

  update(user:any){
    return this.http.post('https://therightdoctors.com/api/beta/contribution/update?key=7xOyNH554tY83cBN7Ktpw3s1y68ql6Eg',user)
  }

}
