package demo.socio.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "complaint_category_information_tbl")
public class ComplaintCategoryEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long comaplaint_category_id;
	
	private String complaint_category_name;

	@ManyToOne
	@JoinColumn(name = "governmment_department_id")
	private GovernmentDepartmentEntity governmentDepartmentEntity;
	
//	-------------------------------------------- CONSTRUCTOR --------------------------------------------
	
	public ComplaintCategoryEntity() {
		super();
	}

	public ComplaintCategoryEntity(long comaplaint_category_id, String complaint_category_name,
			GovernmentDepartmentEntity governmentDepartmentEntity) {
		super();
		this.comaplaint_category_id = comaplaint_category_id;
		this.complaint_category_name = complaint_category_name;
		this.governmentDepartmentEntity = governmentDepartmentEntity;
	}


//	----------------------------------------- GETTERS & SETTERS -----------------------------------------

	public long getComaplaint_category_id() {
		return comaplaint_category_id;
	}

	public void setComaplaint_category_id(long comaplaint_category_id) {
		this.comaplaint_category_id = comaplaint_category_id;
	}

	public String getComplaint_category_name() {
		return complaint_category_name;
	}

	public void setComplaint_category_name(String complaint_category_name) {
		this.complaint_category_name = complaint_category_name;
	}

	public GovernmentDepartmentEntity getGovernmentDepartmentEntity() {
		return governmentDepartmentEntity;
	}

	public void setGovernmentDepartmentEntity(GovernmentDepartmentEntity governmentDepartmentEntity) {
		this.governmentDepartmentEntity = governmentDepartmentEntity;
	}

	
	
	
}
