package com.crs.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.crs.Entity.Admin;
import com.crs.Entity.CRS;
import com.crs.Entity.Engineer;
import com.crs.Entity.Manager;
import com.crs.Entity.User;
import com.crs.Repository.AdminRepo;
import com.crs.Repository.CRSRepo;
import com.crs.Repository.EngineerRepo;
import com.crs.Repository.ManagerRepo;
import com.crs.Repository.UserRepo;

@Service
public class CRSServiceImpl implements CRSService{

	@Autowired
	private UserRepo ur;
	
	@Autowired
	private ManagerRepo mr;
	
	@Autowired
	private EngineerRepo er;
	
	@Autowired
	private CRSRepo cr;
	
	@Autowired
	private AdminRepo ar;
	
	
	@Override
	public List<User> getAllUsers() {
		return ur.findAll();
	}

	@Override
	public User getUserById(String email) {
		return ur.findById(email).get();
	}

	@Override
	public User addUser(User u) {
		BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
		String encode = crypt.encode(u.getPassword());
		u.setPassword(encode);
		return ur.save(u);
	}

	@Override
	public void updateUser(User u, String email) {
		if(ur.findById(email).isPresent()) {
			User user= ur.findById(email).get();
			user.setUsername(u.getUsername());
			user.setRole(u.getRole());
			ur.save(user);
		}
		
		
	}
	
	public User updateAddress(User u, String email) {
		User user = null;
		if(ur.findById(email).isPresent()) {
			user = ur.findById(email).get();
			user.setPincode(u.getPincode());
			ur.save(user);
		}
		return user;
	}

	@Override
	public void deleteUser(String email) {
		ur.deleteById(email);
		
	}
	
	//***************************************************************************

	@Override
	public List<Manager> getAllManagers() {
		
		return mr.findAll();
	}

	@Override
	public Manager getManagerById(String email) {
		
		return mr.findById(email).get();
	}

	@Override
	public Manager addManager(Manager u) {
		BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
		String encode = crypt.encode(u.getPassword());
		u.setPassword(encode);
		return mr.save(u);
	}

	@Override
	public void UpdateManager(Manager u, String email) {
		if(mr.findById(email).isPresent()) {
			Manager manager= mr.findById(email).get();
			manager.setManagername(u.getManagername());
			manager.setRole(u.getRole());
			mr.save(manager);
		}
		
	}

	@Override
	public void DeleteManager(String email) {
		mr.deleteById(email); 
		
	}
	
	//***************************************************************************************

	@Override
	public List<Engineer> getAllEngineer() {
		
		return er.findAll();
	}

	@Override
	public Engineer getEngineerById(String email) {
		
		return er.findById(email).get();
	}

	@Override
	public Engineer addEngineer(Engineer u) {
		BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
		String encode = crypt.encode(u.getPassword());
		u.setPassword(encode);
		return er.save(u);
	}

	@Override
	public void UpdateEngineer(Engineer u, String email) {
		if(er.findById(email).isPresent()) {
			Engineer engineer= er.findById(email).get();
			engineer.setEngineername(u.getEngineername());
			engineer.setRole(u.getRole());
			er.save(engineer);
		}
		
	}

	@Override
	public void DeleteEngineer(String email) {
		er.deleteById(email);
		
	}

	//***************************************************************************************
	
	@Override
	public List<CRS> getALLCRS() {
		
		return cr.findAll();
	}

	@Override
	public CRS getCRSById(int id) {
		// TODO Auto-generated method stub
		return cr.findById(id).get();
	}

	@Override
	public CRS addCRS(CRS u) {
		// TODO Auto-generated method stub
		return cr.save(u);
	}

	@Override
	public void UpdateCRS(CRS u, int id) {
		// TODO Auto-generated method stub
		if(cr.findById(id).isPresent()) {
			CRS crs= cr.findById(id).get();
			crs.setStatus(u.getStatus());
			cr.save(crs);
		}
		
	}
	
	public void UpdateCRSEngineer(CRS c, int id) {
		if(cr.findById(id).isPresent()) {
			CRS crs= cr.findById(id).get();
			crs.setEngineermail(c.getEngineermail());
			cr.save(crs);
		}
	}
	
	public void updatecrsManager(CRS c, int id) {
		if(cr.findById(id).isPresent()) {
			CRS crs= cr.findById(id).get();
			crs.setManagermail(c.getManagermail());
			cr.save(crs);
		}
	}

	public void UpdatecrsUser(CRS c, int id) {
		if(cr.findById(id).isPresent()) {
			CRS crs= cr.findById(id).get();
			crs.setUseremail(c.getUseremail());
			cr.save(crs);
		}
	}
	
	public void updateManagerandEngineerCrs(CRS c, int id) {
		if(cr.findById(id).isPresent()) {
			CRS crs= cr.findById(id).get();
			crs.setManagermail(c.getManagermail());
			crs.setEngineermail(c.getEngineermail());
			crs.setStatus(c.getStatus());
			cr.save(crs);
		}
	}
	
	public void updateProcess(CRS c, int id) {
		if(cr.findById(id).isPresent()) {
			CRS crs= cr.findById(id).get();
			crs.setProcessUpdate(c.getProcessUpdate());
			crs.setStatus(c.getStatus());
			cr.save(crs);
		}
	}
	
	@Override
	public void deleteCRS(int id) {
		cr.deleteById(id);
		
	}
	
	//***************************************************************************
	
	public String userLogin(User u) {
		BCryptPasswordEncoder crypt= new BCryptPasswordEncoder(); 
		String status ="";
		
		if(ur.findById(u.getUseremail()).isPresent()) {
			User user = ur.findById(u.getUseremail()).get();
			if((u.getUseremail().equals(user.getUseremail())) &&crypt.matches(u.getPassword(), user.getPassword())){
				
				status="true";
			}else
				status="false";
		}
		return status;
	}
	
	public String managerLogin(Manager u) {
		BCryptPasswordEncoder crypt= new BCryptPasswordEncoder(); 
		String status ="";
		
		if(mr.findById(u.getManagermail()).isPresent()) {
			Manager manager = mr.findById(u.getManagermail()).get();
			if((u.getManagermail().equals(manager.getManagermail())) &&crypt.matches(u.getPassword(), manager.getPassword())){
				
				status="true";
			}else
				status="false";
		}
		return status;
	}
	
	public String engineerLogin(Engineer u) {
		BCryptPasswordEncoder crypt= new BCryptPasswordEncoder(); 
		String status ="";
		
		if(er.findById(u.getEngineermail()).isPresent()) {
			Engineer engineer = er.findById(u.getEngineermail()).get();
			if((u.getEngineermail().equals(engineer.getEngineermail())) &&crypt.matches(u.getPassword(), engineer.getPassword())){
				
				status="true";
			}else
				status="false";
		}
		return status;
	}
	
	public String adminLogin(Admin u) {
		BCryptPasswordEncoder crypt= new BCryptPasswordEncoder(); 
		String status ="";
		
		if(ar.findById(u.getAdminemail()).isPresent()) {
			Admin admin = ar.findById(u.getAdminemail()).get();
			if((u.getAdminemail().equals(admin.getAdminemail())) &&crypt.matches(u.getPassword(), admin.getPassword())){
				
				status="true";
			}else
				status="false";
		}
		return status;
	}
	
	//***************************************************************************

	public List<Admin> getallAdmin(){
		return ar.findAll();
	}
	
	@Override
	public Admin getAdminById(String email) {
		// TODO Auto-generated method stub
		return ar.findById(email).get();
	}

	@Override
	public Admin addAdmin(Admin u) {
		BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
		String encode = crypt.encode(u.getPassword());
		u.setPassword(encode);
		return ar.save(u);
	}

	@Override
	public void updateadmin(Admin u, String email) {
		
		if(ar.findById(email).isPresent()) {
			Admin admin = ar.findById(email).get();
			admin.setAdminname(u.getAdminemail());
			admin.setRole(u.getRole());
			ar.save(admin);
		}
		
	}

	@Override
	public void deleteAdmin(String email) {
		
		ar.deleteById(email);
	}
	
	//***************************************************************************
	
	public List<CRS> finduserEmail(String email){

		return cr.findUserEmail(email);
	}
	
	public List<CRS> findmanagerEmail(String email){

		return cr.findManagerEmail(email);
	}
	
	public List<CRS> findengineerEmail(String email){

		return cr.findEnginnerEmail(email);
	}
	
	
	
	
	

}
