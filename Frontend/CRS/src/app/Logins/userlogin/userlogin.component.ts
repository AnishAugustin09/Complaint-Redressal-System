import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  user : User = new User();

  
  
  constructor(private service: ServiceService, private route: Router){}

  onSubmit(){
    this.service.loginUser(this.user).subscribe(x=>{
      console.log(x)
      if(x==true){
        this.service.getUserById(this.user.useremail).subscribe(x=>{
        this.service.addProfile(x)
        console.log(x)
        this.route.navigate(['usermain'])
        })
      }else if (x==false) {
        alert('Invalid Password')
      } else {
        alert('User Not Found')
      }

    })
  }
}
