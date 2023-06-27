import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';

@Component({
  selector: 'app-viewtickets',
  templateUrl: './viewtickets.component.html',
  styleUrls: ['./viewtickets.component.css']
})
export class ViewticketsComponent {

  crs : any=[];
  user: any=[];
  userbyId: any=[];
  email: string="anish@123"

  constructor(private service : ServiceService, private route: Router){}

  ngOnInit(){
    this.service.getProfile().subscribe(x=>{
      this.user=x;
      console.log(this.user)
      console.log(this.user[0].useremail)
      const email=(this.user[0].useremail)
    })

    this.service.getUserCRS(this.email).subscribe(y=>{
      this.crs=y
      console.log(this.crs)
    })
  }

  deleteProduct(x:any){

  }
}
