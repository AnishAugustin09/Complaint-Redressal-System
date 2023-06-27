import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './Component/add-user/add-user.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { HeaderComponent } from './Component/header/header.component';
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
import { UserslistComponent } from './Component/userslist/userslist.component';
import { ManagerlistComponent } from './Component/managerlist/managerlist.component';
import { AddManagerComponent } from './Component/add-manager/add-manager.component';
import { AddEngineerComponent } from './Component/add-engineer/add-engineer.component';
import { EngineerlistComponent } from './Component/engineerlist/engineerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ProfileComponent,
    HeaderComponent,
    UserloginComponent,
    AdminloginComponent,
    ManagerloginComponent,
    EngineerloginComponent,
    HomeComponent,
    UserMainComponent,
    ViewticketsComponent,
    ManagerDashboardComponent,
    AssignticketsComponent,
    EngineerDashboardComponent,
    AdmindashboardComponent,
    UserslistComponent,
    ManagerlistComponent,
    AddManagerComponent,
    AddEngineerComponent,
    EngineerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
