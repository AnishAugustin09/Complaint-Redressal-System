import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent {

  user : any;

  constructor(private service: ServiceService, private route: Router){}

  ngOnInit(){
    this.service.getProfile().subscribe(x=>{
      this.user=x
      console.log(this.user)

    })
  }
}
