import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Manager } from 'src/app/Model/manager';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent {

  Raised:number;
  Escalated: number;
  Resolved: number;
  process: number = 20;
  color: string;

  manager: any=[]
  man: any=[];
  constructor(private service: ServiceService, private route: Router){}

  ngOnInit(){
    this.service.getAllCRS().subscribe(x=>{
      this.manager=x;
      console.log(this.manager)
      this.Raised=this.manager.length;
      console.log(this.manager[0].status)
      
      this.service.getMan().subscribe(x=>{
        this.man=x
        console.log(this.man)
      })
    })

    
  }
}
