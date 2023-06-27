import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Com } from 'src/app/Model/com';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  com: Com =new Com();
  
  user: any;
 

  constructor(private service: ServiceService, private route: Router){}

  ngOnInit(){
    this.service.getProfile().subscribe(x=>{
      this.user=x
      console.log(this.user[0].useremail)
    
    })
  }

  onSubmit(){
    this.com.useremail=this.user[0].useremail
    this.service.saveCRS(this.com).subscribe();
    alert('Complaint Raised')
    console.log(this.com)
    this.service.addCrs(this.com)
    this.route.navigate(['viewtickets'])
    
  }
  
}
