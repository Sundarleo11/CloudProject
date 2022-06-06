import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensionerDetail } from '../interface/PensionerDetail';
import { Service } from '../client-service/service';

@Component({
  selector: 'app-pensioner-details',
  templateUrl: './pensioner-details.component.html',
    styleUrls: ['./pensioner-details.component.css']
})
export class PensionerDetailsComponent implements OnInit {
 detailsList:PensionerDetail[]=[]
  constructor(private service:Service,private router:Router ) { }

  ngOnInit() {
    this.service.pensionerDetails().subscribe(data =>{
     this.detailsList=data 
     console.log(data)
    })
  }

  home=function(){
    this.router.navigateByUrl('/home')
  };

}
