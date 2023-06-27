import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Component/add-user/add-user.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { UserloginComponent } from './Logins/userlogin/userlogin.component';
import { AdminloginComponent } from './Logins/adminlogin/adminlogin.component';
import { ManagerloginComponent } from './Logins/managerlogin/managerlogin.component';
import { EngineerloginComponent } from './Logins/engineerlogin/engineerlogin.component';
import { HomeComponent } from './Component/home/home.component';
import { UserMainComponent } from './Component/user-main/user-main.component';
import { ViewticketsComponent } from './Component/viewtickets/viewtickets.component';
import { ManagerDashboardComponent } from './Component/manager-dashboard/manager-dashboard.component';
import { AssignticketsComponent } from './Component/assigntickets/assigntickets.component';
import { EngineerDashboardComponent } from './Component/engineer-dashboard/engineer-dashboard.component';
import { AdmindashboardComponent } from './Component/admindashboard/admindashboard.component';
import { AddManagerComponent } from './Component/add-manager/add-manager.component';
import { AddEngineerComponent } from './Component/add-engineer/add-engineer.component';
import { ManagerlistComponent } from './Component/managerlist/managerlist.component';
import { EngineerlistComponent } from './Component/engineerlist/engineerlist.component';
import { UserslistComponent } from './Component/userslist/userslist.component';

const routes: Routes = [
  {path:"addCustomer",component:AddUserComponent},
  {path:"profile",component:ProfileComponent},
  {path:"userLogin",component:UserloginComponent},
  {path:"managerlogin",component:ManagerloginComponent},
  {path:"engineerlogin",component:EngineerloginComponent},
  {path:"Home",component:HomeComponent},
  {path:"usermain",component:UserMainComponent},
  {path:"adminlog",component:AdminloginComponent},
  {path:"viewtickets",component:ViewticketsComponent},
  {path:"mandashboard",component:ManagerDashboardComponent},
  {path:"assigntickets/:id",component:AssignticketsComponent},
  {path:"engineerDashboard",component:EngineerDashboardComponent},
  {path:"adminDashboard",component:AdmindashboardComponent},
  {path:"addManager",component:AddManagerComponent},
  {path:"addEngineer",component:AddEngineerComponent},
  {path:"managerList",component:ManagerlistComponent},
  {path:"engineerlist",component:EngineerlistComponent},
  {path:"userlist",component:UserslistComponent},
  {path:"**",component:AdminloginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
