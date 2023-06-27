import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Admin } from 'src/app/Model/admin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  admin : Admin= new Admin()
  
  constructor(private service: ServiceService, private route: Router){}

  onSubmit(){
    this.service.adminLogin(this.admin).subscribe(x=>{
      if(x==true){
        this.route.navigate(['adminDashboard'])

      }else if (x==false) {
        alert('Invalid password')
      } else {
        alert('User Not Found')
      }

    })
  }
}
