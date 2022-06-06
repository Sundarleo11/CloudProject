import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../interface/user';
import { map } from 'rxjs/operators';
import { ProcessPensionInput } from '../interface/ProcessPensionInput';
import { ProcessPensionResponse } from '../interface/ProcessPensionResponse';
import { PensionerInput } from '../interface/PensionerInput';
import { PensionerDetail } from '../interface/PensionerDetail';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http:HttpClient) { }

  

  authenticate(user: User)
   {
    //console.log("cool")

      return this.http.post<any>("http://localhost:8000/auth/api/authenticate", user)
   // return this.http.post<any>("http://0.0.0.0:8000/auth/api/authenticate", user)
    //return this.http.post<any>("http://auth-lb-pod3-1537775790.ap-southeast-1.elb.amazonaws.com/auth/api/v1/authenticate", user)
    .pipe(map(data =>{
      console.log(data)
      localStorage.setItem("token", data.token)
      // console.log(localStorage.getItem("token"));
    }));

  }
  pensionerDetails(){
    // console.log(localStorage.getItem("token"));
    return this.http.get<any>("http://localhost:6001/pensioner/api/getAllPensioner",{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
  //  return this.http.get<any>("http://0.0.0.0:6001/pensioner/api/getAllPensioner",{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
   // return this.http.get<any>("htt://lb-pensionerdetail-1472919262.ap-southeast-1.elb.amazonaws.com/pensioner/api/v1/getAllPensioner",{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
      //http://localhost:8200/pensioner/api/v1/getAllPensioner
  }
  processPension(pensionInput:ProcessPensionInput){
  //  return this.http.post<any>("http://0.0.0.0:5000/process/api/ProcessPension", pensionInput,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
    
    return this.http.post<any>("http://localhost:5000/process/api/ProcessPension", pensionInput,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
    //return this.http.post<any>("http://processpension-lb-2027432997.ap-southeast-1.elb.amazonaws.com/process/api/v1/ProcessPension", pensionInput,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
    .pipe(map(data =>{
     localStorage.setItem("pension", data.processPensionStatusCode)
    }));

  }
  disbursement(pension:ProcessPensionInput){
    return this.http.post<any>("http://localhost:7000/disbursement/api/disbursePension", pension,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
   //return this.http.post<any>("http://0.0.0.0:7000/disbursement/api/disbursePension", pension,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
 
   //return this.http.post<any>("http://lb-disbursement-728547974.ap-southeast-1.elb.amazonaws.com/disbursement/api/v1/disbursePension", pension,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
  .pipe(map(data =>{
     localStorage.setItem("status", data.processPensionStatusCode)
    }));

  }
  pensionDetail(pensionerInput:PensionerInput){
  //  return this.http.post<any>("http://0.0.0.0:5000/process/api/PensionDetail", pensionerInput,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
   
    return this.http.post<any>("http://localhost:5000/process/api/PensionDetail", pensionerInput,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
   // return this.http.post<any>("http://processpension-lb-2027432997.ap-southeast-1.elb.amazonaws.com/process/api/v1/PensionDetail", pensionerInput,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
  

  }
  detailsByAadhar(aadharNumber:number){
   // return this.http.get<PensionerDetail>("http://0.0.0.0:6001/pensioner/api/PensionerDetailByAadhaar/"+aadharNumber,
   // {headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})

      return this.http.get<PensionerDetail>("http://localhost:6001/pensioner/api/PensionerDetailByAadhaar/"+aadharNumber,
      {headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
    
   // return this.http.get<PensionerDetail>(" http://lb-pensionerdetail-1472919262.ap-southeast-1.elb.amazonaws.com/pensioner/api/v1/PensionerDetailByAadhaar/"+aadharNumber,{headers: new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem("token"))})
 

  }
  

}