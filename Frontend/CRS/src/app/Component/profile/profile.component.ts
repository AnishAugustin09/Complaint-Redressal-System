import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: any=[];
  constructor(private serivce: ServiceService, private route: Router){}

  ngOnInit(){
    this.serivce.getProfile().subscribe(x=>{
      console.log(x)
      this.user=x;
    })

    
  }

  logout(){

    this.serivce.emptyProfile();
    this.route.navigate(['userLogin'])

   

  }

}
