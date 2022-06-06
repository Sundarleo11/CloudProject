import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensionDetail } from '../interface/PensionDetail';
import { PensionerDetail } from '../interface/PensionerDetail';
import { Service } from '../client-service/service';

@Component({
  selector: 'app-pensioner-by-aadhar',
  templateUrl: './pensioner-by-aadhar.component.html',
  styleUrls: ['./pensioner-by-aadhar.component.css']
})
export class PensionerByAadharComponent implements OnInit {
p:PensionerDetail
  constructor(private service:Service, private router:Router) { }

  ngOnInit() {
  }
  pensionerByAadhar(aadharNumber:number):any{
    console.log(aadharNumber);
    this.service.detailsByAadhar(aadharNumber).subscribe(data=>{
     // this.router.navigate(["/processPension"]);
     //this.result=localStorage.getItem("status")
     this.p=data
     console.log(this.p.bankName);
     console.log(this.p);
    });
  }
  home=function(){
    this.router.navigateByUrl('/home')
  };
}
