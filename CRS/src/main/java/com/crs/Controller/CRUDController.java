package com.crs.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crs.Entity.Admin;
import com.crs.Entity.CRS;
import com.crs.Entity.Engineer;
import com.crs.Entity.Manager;
import com.crs.Entity.User;
import com.crs.Service.CRSServiceImpl;

@RestController
@CrossOrigin("http://localhost:4200/")
public class CRUDController {

	@Autowired
	private CRSServiceImpl service;
	
	@GetMapping("/users")
	public List<User> getAll(){
		return service.getAllUsers();
	}
	
	@GetMapping("/user/{email}")
	public User getById(@PathVariable String email) {
		return service.getUserById(email);
	}
	
	@PostMapping("/addUser")
	public User addUser(@RequestBody User u) {
		return service.addUser(u);
	}
	
	@PutMapping("/updateuser/{email}")
	public void updateUser(@RequestBody User u,@PathVariable String email) {
		service.updateUser(u, email);
	}
	
	@DeleteMapping("/deleteuser/{email}")
	public void deleteUser(@PathVariable String email) {
		service.deleteUser(email);
	}
	
	@PutMapping("/updateuserAddress/{email}")
	public User updateAddress(@RequestBody User u,@PathVariable String email) {
		return service.updateAddress(u, email);
	}
	
	//***************************************************************************************
	
	@GetMapping("/managers")
	public List<Manager> getAllManagers(){
		return service.getAllManagers();
	}
	
	@GetMapping("/manager/{email}")
	public Manager getManagerById(@PathVariable String email) {
		return service.getManagerById(email);
	}
	
	@PostMapping("/addmanager")
	public Manager addmanager(@RequestBody Manager m) {
		return service.addManager(m);
	}
	
	@DeleteMapping("/deletemanager/{email}")
	public void deletemanager(@PathVariable String email) {
		service.DeleteManager(email);
	}
	
	//***************************************************************************************
	
		@GetMapping("/engineers")
		public List<Engineer> getAllEngineers(){
			return service.getAllEngineer();
		}
		
		@GetMapping("/engineer/{email}")
		public Engineer getEngineerById(@PathVariable String email) {
			return service.getEngineerById(email);
		}
		
		@PostMapping("/addengineer")
		public Engineer addEngineer(@RequestBody Engineer m) {
			return service.addEngineer(m);
		}
		
		@DeleteMapping("/deleteengineer/{email}")
		public void deleteEngineer(@PathVariable String email) {
			service.DeleteEngineer(email);
		}
		
		//***************************************************************************************
		
		
		@GetMapping("/crss")
		public List<CRS> getAllCRS(){
			return service.getALLCRS();
		}
		
		@GetMapping("/crs/{id}")
		public CRS getById(@PathVariable int id) {
			return service.getCRSById(id);
		}
		
		
		@PostMapping("/addCRS")
		public CRS addCRS(@RequestBody CRS c) {
			return service.addCRS(c);
		}
		
		@PutMapping("/updatecrsstatus/{id}")
		public void updateCRSstatus(@RequestBody CRS c,@PathVariable int id) {
			service.UpdateCRS(c, id);
		}
		
		@PutMapping("/updatecrsenginner/{id}")
		public void updateCRSEngineer(@RequestBody CRS s,@PathVariable int id) {
			service.UpdateCRSEngineer(s, id);
		}
		
		@PutMapping("/updatecrsmanager/{id}")
		public void updateCrsManager(@RequestBody CRS s,@PathVariable int id) {
			service.updatecrsManager(s, id);
		}
		
		@PutMapping("/updatecrsUser/{id}")
		public void updatecrsUser(@RequestBody CRS s,@PathVariable int id) {
			service.UpdatecrsUser(s, id);
		}
		
		@PutMapping("/updateManAndEng/{id}")
		public void updateManagerandEngineer(@RequestBody CRS s,@PathVariable int id){
			service.updateManagerandEngineerCrs(s, id);
		}
		
		@PutMapping("/updatecrsprocess/{id}")
		public void updateProcess(@RequestBody CRS s,@PathVariable int id) {
			 service.updateProcess(s, id);
		}
		
		@DeleteMapping("/deletecrs/{id}")
		public void deleteCrs(@PathVariable int id) {
			service.deleteCRS(id);
		}
		
		//***************************************************************************************
		
		@PostMapping("/Userlogin")
		public String loginUser(@RequestBody User u) {
			return service.userLogin(u);
		}
		
		@PostMapping("/Adminlogin")
		public String loginUser(@RequestBody Admin u) {
			return service.adminLogin(u);
		}
		
		@PostMapping("/Managerlogin")
		public String loginUser(@RequestBody Manager u) {
			return service.managerLogin(u);
		}
		
		@PostMapping("/Engineerlogin")
		public String loginUser(@RequestBody Engineer u) {
			return service.engineerLogin(u);
		}
		
		//***************************************************************************************
		
		@GetMapping("/admins")
		public List<Admin> getallAdmin(){
			
			return service.getallAdmin();
		}
		
		@PostMapping("/addAdmin")
		public Admin addAdmin(@RequestBody Admin a) {
			return service.addAdmin(a);
		}
		
		@GetMapping("/admin/{email}")
		public Admin getAdminById(@PathVariable String email) {
			return service.getAdminById(email);
		}
		
		@PutMapping("/updateadmin/{email}")
		public void updateAdmin(@RequestBody Admin a, @PathVariable String email) {
			service.updateadmin(a, email);
		}
		
		@DeleteMapping("/deleteAdmin/{email}")
		public void deleteAdmin(@PathVariable String email) {
			service.deleteAdmin(email);
		}
		
		//***************************************************************************************
		
		@GetMapping("/getcrsuser/{email}")
		public List<CRS> getUserEmail(@PathVariable String email){
			return service.finduserEmail(email);
		}
		
		@GetMapping("/getcrsmanager/{email}")
		public List<CRS> getManagerEmail(@PathVariable String email){
			return service.findmanagerEmail(email);
		}
		
		@GetMapping("/getcrsengineer/{email}")
		public List<CRS> getEngineerEmail(@PathVariable String email){
			return service.findengineerEmail(email);
		}
		
		
}
