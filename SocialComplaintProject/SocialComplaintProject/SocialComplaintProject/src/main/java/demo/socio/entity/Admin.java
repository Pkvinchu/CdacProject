package demo.socio.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;


@Entity
@Table(name = "admin_profile_tbl")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int admin_id;

	@Column(name = "admin_username")
	private String adminusername;

//	@Column(columnDefinition = "VARBINARY(100) NOT NULL")
	private String admin_password;

	@Lob
	private byte[] admin_profile_image;

//	-------------------------------------------- CONSTRUCTOR --------------------------------------------
	
	public Admin() {
		super();
	}

	public Admin(int admin_id, String admin_username, String admin_password, byte[] admin_profile_image) {
		super();
		this.admin_id = admin_id;
		this.adminusername = admin_username;
		this.admin_password = admin_password;
		this.admin_profile_image = admin_profile_image;
	}


	public Admin(String admin_username, String admin_password, byte[] admin_profile_image) {
		super();
		this.adminusername = admin_username;
		this.admin_password = admin_password;
		this.admin_profile_image = admin_profile_image;
	}

//	----------------------------------------- GETTERS & SETTERS -----------------------------------------
	
	public int getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}

	public String getAdmin_username() {
		return adminusername;
	}

	public void setAdmin_username(String admin_username) {
		this.adminusername = admin_username;
	}

	public String getAdmin_password() {
		return admin_password;
	}

	public void setAdmin_password(String admin_password) {
		this.admin_password = admin_password;
	}

	public byte[] getAdmin_profile_image() {
		return admin_profile_image;
	}

	public void setAdmin_profile_image(byte[] admin_profile_image) {
		this.admin_profile_image = admin_profile_image;
	}

}
