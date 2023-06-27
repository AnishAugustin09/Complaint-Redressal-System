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
public class Manager {


	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Id
	private String managermail;
	@Column
	private String managername;
	@Column
	private String role;
	@Column
	private String password;
	@Column
	private String city;
	@Column
	private String district;
	@Column
	private String State;
	@Column
	private String pincode;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getManagermail() {
		return managermail;
	}
	public void setManagermail(String managermail) {
		this.managermail = managermail;
	}
	public String getManagername() {
		return managername;
	}
	public void setManagername(String managername) {
		this.managername = managername;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getState() {
		return State;
	}
	public void setState(String state) {
		State = state;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public Manager(int id, String managermail, String managername, String role, String password) {
		super();
		this.id = id;
		this.managermail = managermail;
		this.managername = managername;
		this.role = role;
		this.password = password;
		
	}
	public Manager() {
		super();
	}
	
	
}
