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
public class CRS {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Column
	private String Complaint;
	@Column
	private String Status;
	@Column
	private String useremail;
	@Column
	private String managermail;
	@Column
	private String engineermail;
	@Column
	private String processUpdate;
	
	
	
	
	public String getProcessUpdate() {
		return processUpdate;
	}
	public void setProcessUpdate(String processUpdate) {
		this.processUpdate = processUpdate;
	}
	public CRS(int id, String complaint, String status, User user, Manager manager, Engineer engineer) {
		super();
		this.id = id;
		Complaint = complaint;
		Status = status;
		
	}
	public CRS() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getComplaint() {
		return Complaint;
	}
	public void setComplaint(String complaint) {
		Complaint = complaint;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	public String getUseremail() {
		return useremail;
	}
	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}
	public String getManagermail() {
		return managermail;
	}
	public void setManagermail(String managermail) {
		this.managermail = managermail;
	}
	public String getEngineermail() {
		return engineermail;
	}
	public void setEngineermail(String engineermail) {
		this.engineermail = engineermail;
	}
	
	
	
	
}
