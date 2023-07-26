package demo.socio.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import demo.socio.customexception.ResourceNotFoundException;
import demo.socio.entity.Admin;
import demo.socio.entity.UserProfileEntity;
import demo.socio.repository.UserProfileRepository;
import demo.socio.result.ResultDO;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserProfileController {

	@Autowired
	UserProfileRepository userRepo;


	@GetMapping("/get")
	public List<UserProfileEntity> getUser()
	{
		return userRepo.findAll();
	}

	@GetMapping("/getbyid/{user_id}")
	public UserProfileEntity getById(@PathVariable long user_id) 
	{
		UserProfileEntity user = userRepo.findById(user_id).get();
		return user;
	}
	
	
	@GetMapping("/getbyusername/{username}/{password}")
	public UserProfileEntity getByUsername(@PathVariable String username, @PathVariable String password)
	{
		UserProfileEntity user = userRepo.findByUserUsername(username);
		
		if(user != null && user.getUser_password().equals(password))
		{			
			return user;
		}
		else
			return null;
	}

/*	@GetMapping("/getbyusername/{username}")
	public UserProfileEntity getByUsername(@PathVariable String username)
	{
		UserProfileEntity user = userRepo.findByUserUsername(username);
		return user;
	} */
	
	@GetMapping("/getbydepartment/{department}")
	public List<UserProfileEntity> getByDepartment(@PathVariable String department)
	{
		List<UserProfileEntity> list = userRepo.findByUserdepartment(department);
		return list;
	}


	@PostMapping("/insert/{user_aadhar_number}/{user_first_name}/{user_middle_name}/{user_last_name}/{userUsername}/"
			+ "{user_password}/{user_contact_number}/{user_email}/{user_role}/{user_address_city}/{user_address_state}/"
			+ "{user_pincode}/{user_department}")
	public ResultDO insertUser(@RequestBody MultipartFile myFile, 
			@PathVariable long user_aadhar_number ,
			@PathVariable String user_first_name ,
			@PathVariable String user_middle_name ,
			@PathVariable String user_last_name ,
			@PathVariable String userUsername ,
			@PathVariable String user_password ,
			@PathVariable long user_contact_number ,
			@PathVariable String user_email ,
			@PathVariable String user_role ,
			@PathVariable String user_address_city ,
			@PathVariable String user_address_state ,
			@PathVariable int user_pincode,
			@PathVariable String user_department) 
	{


		UserProfileEntity user = new UserProfileEntity();
		user.setUser_aadhar_number( user_aadhar_number );
		user.setUser_first_name( user_first_name );
		user.setUser_middle_name( user_middle_name );
		user.setUser_last_name( user_last_name );
		try {
			user.setUser_profile_image( myFile.getBytes() );
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace(); 
		}
		user.setUserUsername( userUsername );
		user.setUser_password( user_password );
		user.setUser_contact_number( user_contact_number );
		user.setUser_email( user_email );
		user.setUser_role( user_role );
		user.setUser_address_city( user_address_city );
		user.setUser_address_state( user_address_state );
		user.setUser_pincode( user_pincode );
		user.setUserdepartment(user_department);

		userRepo.save(user);

		return new ResultDO("OK");
	}

	@PutMapping("/insert/{id}")
	public ResponseEntity<UserProfileEntity> updateUser(@PathVariable Long id, @RequestBody UserProfileEntity userDetails){
		UserProfileEntity user = userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));

		user.setUser_aadhar_number(userDetails.getUser_aadhar_number()  );
		user.setUser_first_name( userDetails.getUser_first_name() );
		user.setUser_middle_name( userDetails.getUser_middle_name() );
		user.setUser_last_name( userDetails.getUser_last_name() );
		user.setUserUsername(userDetails.getUserUsername());
		user.setUser_password( userDetails.getUser_password() );
		user.setUser_contact_number( userDetails.getUser_contact_number() );
		user.setUser_email( userDetails.getUser_email() );
		user.setUser_pincode( userDetails.getUser_pincode());
		user.setUser_address_city(userDetails.getUser_address_city());
		user.setUser_address_state(userDetails.getUser_address_state());
		user.setUser_role(userDetails.getUser_role());

		UserProfileEntity updatedUser = userRepo.save(user);

		return ResponseEntity.ok(updatedUser);
	}

//	@DeleteMapping("/deletebyid/{id}")
//	public String deleteUser(@PathVariable long id)
//	{
//		userRepo.deleteById(id);
//		return "OK";
//	}


	@GetMapping("/getpassword/{username}")
	public String forgetPasswordByUsername(@PathVariable String username)
	{
		UserProfileEntity user = userRepo.findByUserUsername(username);

		return user.getUser_password();
	}

}
