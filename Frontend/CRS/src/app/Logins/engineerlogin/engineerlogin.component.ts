import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Engineer } from 'src/app/Model/engineer';

@Component({
  selector: 'app-engineerlogin',
  templateUrl: './engineerlogin.component.html',
  styleUrls: ['./engineerlogin.component.css']
})
export class EngineerloginComponent {

  engineer: Engineer = new Engineer()

  constructor(private service: ServiceService, private route: Router){}

  onSubmit(){
    this.service.engineerLogin(this.engineer).subscribe(x=>{
      if(x==true){
        this.service.getEngineerById(this.engineer.engineermail).subscribe(x=>{
          this.service.addEng(x)
          this.route.navigate(['engineerDashboard'])
        })
      }else if(x==false){
        alert('Invalid Password')
      }else{
        alert('User Not Found')
      }
    })
  }
}
