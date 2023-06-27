import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Com } from 'src/app/Model/com';

@Component({
  selector: 'app-engineer-dashboard',
  templateUrl: './engineer-dashboard.component.html',
  styleUrls: ['./engineer-dashboard.component.css']
})
export class EngineerDashboardComponent {

  files: any=[]
  com: Com = new Com();
  eng: any;
  
  
  constructor(private service: ServiceService, private route: Router){}

  ngOnInit(){
    this.service.getEng().subscribe(x=>{
      this.eng=x
      console.log(this.eng)

      this.service.getEngCrs(this.eng[0].engineermail).subscribe(y=>{
        this.files=y
        console.log(this.files)
      })
    })
  }

  onSubmit(){
    console.log(this.files[0].id)
    this.service.updateProcess(this.files[0].id, this.com).subscribe(x=>console.log(x))
    alert("updated Successfully")
    
  }
}
