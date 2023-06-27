import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { Engineer } from 'src/app/Model/engineer';

@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.css']
})
export class AddEngineerComponent {

  engineer: Engineer= new Engineer()

  constructor(private service: ServiceService, private route: Router){}

  onSubmit(){
    this.service.saveEngineer(this.engineer).subscribe();
    alert("Engineer Added Successfully")
    this.route.navigate(['engineerlogin'])
  }
}
