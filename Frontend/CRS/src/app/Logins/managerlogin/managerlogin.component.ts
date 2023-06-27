import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Manager } from 'src/app/Model/manager';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']
})
export class ManagerloginComponent {

  manager : Manager = new Manager();
  constructor(private service : ServiceService, private route: Router){}

  onSubmit(){
    this.service.managerLogin(this.manager).subscribe(x=>{
      if(x==true){
        this.service.getManagerById(this.manager.managermail).subscribe(x=>{
          this.service.addMan(x)
          this.route.navigate(['mandashboard'])
          }
        )
      }else if(x==false){
        alert('Invalid password')
      }else{
        alert('User Not Found')
      }
    })
  }
}
