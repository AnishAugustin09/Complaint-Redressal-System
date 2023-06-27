import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent {

  user : User[]

  constructor(private service: ServiceService, private route: Router){}

  ngOnInit(){
    this.service.getAllUsers().subscribe(x=>{
      this.user=x
    })
  }

  mainMenu(){
    this.route.navigate(['adminDashboard'])
  }

}
