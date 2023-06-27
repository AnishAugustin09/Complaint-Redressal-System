import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Manager } from 'src/app/Model/manager';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent {

  manager: Manager= new Manager();

  constructor(private service: ServiceService, private route: Router){}

  onSubmit(){
    this.service.saveManager(this.manager).subscribe()
    alert("Manger Added Successfully")
    this.route.navigate(['/managerlogin'])
  }
}
