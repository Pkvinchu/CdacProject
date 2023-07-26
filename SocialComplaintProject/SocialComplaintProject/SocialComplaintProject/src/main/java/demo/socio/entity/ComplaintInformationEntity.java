package demo.socio.entity;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
//import javax.validation.constraints.NotBlank;
//import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import demo.socio.enums.ComplaintSeverity;
import demo.socio.enums.ComplaintStatus;

@Entity
@Table(name = "complaint_information_tbl") 
public class ComplaintInformationEntity {

	
	@Id
	@Column(unique = true)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long complaint_id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private UserProfileEntity UserProfileEntity;

	private String complaint_category;

	private String complaint_department;

	private String complaint_description;

	private double complaint_latitude;

	private double complaint_longitute;

	private String complaint_landmark;

	private String complaint_priority;

	private String complaint_status;

	@ManyToOne
	@JoinColumn(name = "complaint_official_assignee_id")
	private UserProfileEntity UserProfileEntityOff;

	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate complaint_received_date;

	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate complaint_resolved_date;

	@ManyToOne
	@JoinColumn(name = "complaint_worker_assignee_id")
	private UserProfileEntity UserProfileEntityWor;


	public ComplaintInformationEntity() {
		super();
	}


	public ComplaintInformationEntity(long complaint_id, demo.socio.entity.UserProfileEntity userProfileEntity,
			String complaint_category, String complaint_department, String complaint_description,
			double complaint_latitude, double complaint_longitute, String complaint_landmark, String complaint_priority,
			String complaint_status, demo.socio.entity.UserProfileEntity userProfileEntityOff,
			LocalDate complaint_received_date, LocalDate complaint_resolved_date,
			demo.socio.entity.UserProfileEntity userProfileEntityWor) {
		super();
		this.complaint_id = complaint_id;
		UserProfileEntity = userProfileEntity;
		this.complaint_category = complaint_category;
		this.complaint_department = complaint_department;
		this.complaint_description = complaint_description;
		this.complaint_latitude = complaint_latitude;
		this.complaint_longitute = complaint_longitute;
		this.complaint_landmark = complaint_landmark;
		this.complaint_priority = complaint_priority;
		this.complaint_status = complaint_status;
		UserProfileEntityOff = userProfileEntityOff;
		this.complaint_received_date = complaint_received_date;
		this.complaint_resolved_date = complaint_resolved_date;
		UserProfileEntityWor = userProfileEntityWor;
	}


	public ComplaintInformationEntity(demo.socio.entity.UserProfileEntity userProfileEntity, String complaint_category,
			String complaint_department, String complaint_description, double complaint_latitude,
			double complaint_longitute, String complaint_landmark, String complaint_priority, String complaint_status,
			demo.socio.entity.UserProfileEntity userProfileEntityOff, LocalDate complaint_received_date,
			LocalDate complaint_resolved_date, demo.socio.entity.UserProfileEntity userProfileEntityWor) {
		super();
		UserProfileEntity = userProfileEntity;
		this.complaint_category = complaint_category;
		this.complaint_department = complaint_department;
		this.complaint_description = complaint_description;
		this.complaint_latitude = complaint_latitude;
		this.complaint_longitute = complaint_longitute;
		this.complaint_landmark = complaint_landmark;
		this.complaint_priority = complaint_priority;
		this.complaint_status = complaint_status;
		UserProfileEntityOff = userProfileEntityOff;
		this.complaint_received_date = complaint_received_date;
		this.complaint_resolved_date = complaint_resolved_date;
		UserProfileEntityWor = userProfileEntityWor;
	}

//	----------------------------------------- GETTERS & SETTERS -----------------------------------------
	
	public long getComplaint_id() {
		return complaint_id;
	}


	public void setComplaint_id(long complaint_id) {
		this.complaint_id = complaint_id;
	}


	public UserProfileEntity getUserProfileEntity() {
		return UserProfileEntity;
	}


	public void setUserProfileEntity(UserProfileEntity userProfileEntity) {
		UserProfileEntity = userProfileEntity;
	}


	public String getComplaint_category() {
		return complaint_category;
	}


	public void setComplaint_category(String complaint_category) {
		this.complaint_category = complaint_category;
	}


	public String getComplaint_department() {
		return complaint_department;
	}


	public void setComplaint_department(String complaint_department) {
		this.complaint_department = complaint_department;
	}


	public String getComplaint_description() {
		return complaint_description;
	}


	public void setComplaint_description(String complaint_description) {
		this.complaint_description = complaint_description;
	}


	public double getComplaint_latitude() {
		return complaint_latitude;
	}


	public void setComplaint_latitude(double complaint_latitude) {
		this.complaint_latitude = complaint_latitude;
	}


	public double getComplaint_longitute() {
		return complaint_longitute;
	}


	public void setComplaint_longitute(double complaint_longitute) {
		this.complaint_longitute = complaint_longitute;
	}


	public String getComplaint_landmark() {
		return complaint_landmark;
	}


	public void setComplaint_landmark(String complaint_landmark) {
		this.complaint_landmark = complaint_landmark;
	}


	public String getComplaint_priority() {
		return complaint_priority;
	}


	public void setComplaint_priority(String complaint_priority) {
		this.complaint_priority = complaint_priority;
	}


	public String getComplaint_status() {
		return complaint_status;
	}


	public void setComplaint_status(String complaint_status) {
		this.complaint_status = complaint_status;
	}


	public UserProfileEntity getUserProfileEntityOff() {
		return UserProfileEntityOff;
	}


	public void setUserProfileEntityOff(UserProfileEntity userProfileEntityOff) {
		UserProfileEntityOff = userProfileEntityOff;
	}


	public LocalDate getComplaint_received_date() {
		return complaint_received_date;
	}


	public void setComplaint_received_date(LocalDate complaint_received_date) {
		this.complaint_received_date = complaint_received_date;
	}


	public LocalDate getComplaint_resolved_date() {
		return complaint_resolved_date;
	}


	public void setComplaint_resolved_date(LocalDate complaint_resolved_date) {
		this.complaint_resolved_date = complaint_resolved_date;
	}


	public UserProfileEntity getUserProfileEntityWor() {
		return UserProfileEntityWor;
	}


	public void setUserProfileEntityWor(UserProfileEntity userProfileEntityWor) {
		UserProfileEntityWor = userProfileEntityWor;
	}
	
	
	
}
