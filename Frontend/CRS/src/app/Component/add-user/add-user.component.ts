import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/CRSservice/service.service';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user: User= new User();
constructor(private formBuilder: FormBuilder, private http: HttpClient, private service: ServiceService, private route: Router){}

mainMenu() {
throw new Error('Method not implemented.');
}

onSubmit() {
  this.service.saveUsers(this.user).subscribe();
  console.log(this.user)
  this.route.navigate(['userLogin'])
}

 
}


