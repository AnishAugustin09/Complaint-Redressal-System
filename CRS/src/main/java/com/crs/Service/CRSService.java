package com.crs.Service;

import java.util.List;

import com.crs.Entity.Admin;
import com.crs.Entity.CRS;
import com.crs.Entity.Engineer;
import com.crs.Entity.Manager;
import com.crs.Entity.User;

public interface CRSService {

	//----------------- User Methods---------------
	
	public List<User> getAllUsers();
	public User getUserById(String email);
	public User addUser(User u);
	public void updateUser(User u, String email);
	public void deleteUser(String email);
	
	//------------------ Manager Methods -----------
	
	public List<Manager> getAllManagers();
	public Manager getManagerById(String email);
	public Manager addManager(Manager u);
	public void UpdateManager(Manager u, String email);
	public void DeleteManager(String email);
	
	//------------------ Engineer Methods -----------
	
		public List<Engineer> getAllEngineer();
		public Engineer getEngineerById(String email);
		public Engineer addEngineer(Engineer u);
		public void UpdateEngineer(Engineer u, String email);
		public void DeleteEngineer(String email);
		
	//------------------ CRS Methods ----------------
		
		public List<CRS> getALLCRS();
		public CRS getCRSById(int id);
		public CRS addCRS(CRS u);
		public void UpdateCRS(CRS u, int id);
		public void deleteCRS(int id);
	
		//------------------ Admin Methods ----------------
		
				
				public Admin getAdminById(String email);
				public Admin addAdmin(Admin u);
				public void updateadmin(Admin u, String email);
				public void deleteAdmin(String email);
			
}
