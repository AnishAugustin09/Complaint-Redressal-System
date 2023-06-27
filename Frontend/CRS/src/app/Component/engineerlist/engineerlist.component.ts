import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Engineer } from 'src/app/Model/engineer';

@Component({
  selector: 'app-engineerlist',
  templateUrl: './engineerlist.component.html',
  styleUrls: ['./engineerlist.component.css']
})
export class EngineerlistComponent {

  engineer: Engineer[]

  constructor(private service: ServiceService, private route: Router){}

  ngOnInit(){
    this.service.getAllEngineer().subscribe(x=>{
      this.engineer=x;
    })
  }

  mainMenu(){
    this.route.navigate(['adminDashboard'])
  }
}
