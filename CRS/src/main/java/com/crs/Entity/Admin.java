package com.crs.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Admin {

	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Id
	private String adminemail;
	@Column
	private String adminname;
	@Column
	private String role;
	@Column
	private String password;
	
	
	

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAdminName() {
		return adminname;
	}
	public void setAdminname(String adminname) {
		this.adminname = adminname;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	public String getAdminemail() {
		return adminemail;
	}
	public void setAdminemail(String adminemail) {
		this.adminemail = adminemail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Admin(int id, String adminemail, String adminname, String role, String password, Address address) {
		super();
		this.id = id;
		this.adminemail = adminemail;
		this.adminname = adminname;
		this.role = role;
		this.password = password;
		
	}
	public Admin() {
		super();
	}
	
	
}
