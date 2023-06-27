import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Manager } from 'src/app/Model/manager';

@Component({
  selector: 'app-managerlist',
  templateUrl: './managerlist.component.html',
  styleUrls: ['./managerlist.component.css']
})
export class ManagerlistComponent {

  manager: Manager[]
  constructor(private service: ServiceService, private route: Router){}

  ngOnInit(){
    this.service.getAllManagers().subscribe(x=>{
      this.manager=x
    })
  }

  mainMenu(){
    this.route.navigate(['adminDashboard'])
  }
}
