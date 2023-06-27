import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  constructor(private service:ServiceService, private route: Router){}

  logout(){
    alert("Successfully logged out")
    this.route.navigate(['adminlog'])
  }
}
