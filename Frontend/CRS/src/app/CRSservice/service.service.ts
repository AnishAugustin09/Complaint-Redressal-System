import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Model/user';
import { Manager } from '../Model/manager';
import { Engineer } from '../Model/engineer';
import { Admin } from '../Model/admin';
import { Com } from '../Model/com';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  baseURL: string="http://localhost:8080"

  public profile: any=[]
  public profileView = new BehaviorSubject<any>([]);

  public crs: any=[]
  public crsview= new BehaviorSubject<any>([]);

  public manager: any=[];
  public managerview=new BehaviorSubject<any>([]);

  public engineer: any=[];
  public engineerview= new BehaviorSubject<any>([]);

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseURL+"/users")
  }

  saveUsers(user: User){
    return this.http.post(this.baseURL+"/addUser",user)
  }

  getUserById(email: string):Observable<User>{
   return this.http.get<User>(this.baseURL+"/user/"+email)
  }

  getProfile(){
    return this.profileView.asObservable();
  }

  addProfile(user: any){
    this.profile.push(user)
    this.profileView.next(this.profile)
    console.log(this.profile)
  }

  emptyProfile(){
    this.profile=[]
    this.profileView.next(this.profile)
  }

  getcrs(){
    return this.crsview.asObservable()
  }

  addCrs(crss: any){
    this.crs.push(crss);
    this.crsview.next(this.crs)
    console.log(this.crs)
  }

  emptyCrs(){
    this.crs=[]
    this.crsview.next(this.crs)
  }

  getMan(){
    return this.managerview.asObservable()
  }

  addMan(mans: any){
    this.manager.push(mans);
    this.managerview.next(this.manager)
    console.log(this.manager)
  }

  emptyMan(){
    this.manager=[]
    this.managerview.next(this.manager)
  }

  getEng(){
    return this.engineerview.asObservable()
  }

  addEng(engs: any){
    this.engineer.push(engs);
    this.engineerview.next(this.engineer)
    console.log(this.engineer)
  }

  emptyEng(){
    this.engineer=[]
    this.engineerview.next(this.engineer)
  }

  
  getAllManagers():Observable<Manager[]>{
    return this.http.get<Manager[]>(this.baseURL+"/managers")
  }

  getManagerById(email: String):Observable<Manager>{
    return this.http.get<Manager>(this.baseURL+"/manager/"+email)
  }

  saveManager(manager: Manager){
    return this.http.post(this.baseURL+"/addmanager",manager)
  }


  getAllEngineer():Observable<Engineer[]>{
    return this.http.get<Engineer[]>(this.baseURL+"/engineers")
  }

  getEngineerById(email: String):Observable<Engineer>{
    return this.http.get<Engineer>(this.baseURL+"/engineer/"+email)
  }

  saveEngineer(engineer: Engineer){
    return this.http.post(this.baseURL+"/addengineer",engineer)
  }

  loginUser(user : User){
    return this.http.post(this.baseURL+"/Userlogin",user)
  }

  adminLogin(admin: Admin){
    return this.http.post(this.baseURL+"/Adminlogin",admin)
  }

  managerLogin(manager: Manager){
    return this.http.post(this.baseURL+"/Managerlogin",manager)
  }

  engineerLogin(engineer: Engineer){
    return this.http.post(this.baseURL+"/Engineerlogin",engineer)
  }

  getAllCRS():Observable<Com[]>{
    return this.http.get<Com[]>(this.baseURL+"/crss")
  }

  saveCRS(com: Com){
    return this.http.post(this.baseURL+"/addCRS", com)
  }

  getUserCRS(email: string):Observable<any[]>{
    return this.http.get<any[]>(this.baseURL+"/getcrsuser/"+email)
  }

  getCRSbyId(id: Number):Observable<any[]>{
    return this.http.get<any[]>(this.baseURL+"/crs/"+id)
  }

  updateManandEng(id: Number, com: Com){
    return this.http.put(this.baseURL+"/updateManAndEng/"+id,com)
  }

  getEngCrs(email: string):Observable<Com[]>{
    return this.http.get<Com[]>(this.baseURL+"/getcrsengineer/"+email)
  }

  updateProcess(id: Number, com: Com){
    return this.http.put(this.baseURL+"/updatecrsprocess/"+id, com)
  }

  


}
