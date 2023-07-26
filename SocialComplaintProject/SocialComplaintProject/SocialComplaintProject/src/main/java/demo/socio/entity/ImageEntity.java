package demo.socio.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
//import javax.validation.constraints.NotBlank;

import demo.socio.enums.ImageType;


@Entity
@Table(name = "image_information_tbl")
public class ImageEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long image_id;
	
	@Lob
	private byte[] image;
	
	private String image_type;
	
	@ManyToOne
	@JoinColumn(name = "complaint_id")
	private ComplaintInformationEntity complaintInformationEntity;
	
	
	public ImageEntity() {
		super();
	}

	public ImageEntity(long image_id, byte[] image, String image_type,
			ComplaintInformationEntity complaintInformationEntity) {
		super();
		this.image_id = image_id;
		this.image = image;
		this.image_type = image_type;
		this.complaintInformationEntity = complaintInformationEntity;
	}

	public ImageEntity(byte[] image, String image_type, ComplaintInformationEntity complaintInformationEntity) {
		super();
		this.image = image;
		this.image_type = image_type;
		this.complaintInformationEntity = complaintInformationEntity;
	}


	public long getImage_id() {
		return image_id;
	}


	public void setImage_id(long image_id) {
		this.image_id = image_id;
	}


	public byte[] getImage() {
		return image;
	}


	public void setImage(byte[] image) {
		this.image = image;
	}


	public String getImage_type() {
		return image_type;
	}


	public void setImage_type(String image_type) {
		this.image_type = image_type;
	}


	public ComplaintInformationEntity getComplaintInformationEntity() {
		return complaintInformationEntity;
	}


	public void setComplaintInformationEntity(ComplaintInformationEntity complaintInformationEntity) {
		this.complaintInformationEntity = complaintInformationEntity;
	}


	
	
}
