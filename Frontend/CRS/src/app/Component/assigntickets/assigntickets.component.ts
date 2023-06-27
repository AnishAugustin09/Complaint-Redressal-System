import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Com } from 'src/app/Model/com';

@Component({
  selector: 'app-assigntickets',
  templateUrl: './assigntickets.component.html',
  styleUrls: ['./assigntickets.component.css']
})
export class AssignticketsComponent {

  compl: any=[];
  man:any=[];
  engineers: any=[];
  engineer:any;
  com: Com= new Com();
  currentstatus: string="Assigned"
  constructor(private serivce : ServiceService, private route:Router,private activateRoute: ActivatedRoute){}

  ngOnInit(){
    const id = this.activateRoute.snapshot.paramMap.get("id")!
    
    this.serivce.getCRSbyId(Number(id)).subscribe(x=>{ 
      this.compl=x;
      console.log(this.compl)

      this.serivce.getMan().subscribe(x=>{
        this.man=x
        console.log(this.man)
      })

    })

    this.serivce.getAllEngineer().subscribe(x=>{
      this.engineers=x
      console.log(this.engineers)
    })
  }

  assignEngineer(email: string){
    this.serivce.getEngineerById(email).subscribe(x=>{
      this.engineer=x
      console.log(this.engineer)
    })
  }

  onSubmit(){
    this.com.managermail=this.man[0].managermail
    this.com.status=this.currentstatus
    console.log(this.man[0].managermail)
    const id = this.activateRoute.snapshot.paramMap.get("id")!
    console.log(id)
    this.serivce.updateManandEng(Number(id),this.com).subscribe(x=>{
      console.log(this.com)
      alert("Assigned Successfully")
    })
    this.route.navigate(['mandashboard'])
  }
}
