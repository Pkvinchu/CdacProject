package demo.socio.controller;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import antlr.StringUtils;
import demo.socio.entity.Admin;
import demo.socio.entity.UserProfileEntity;
import demo.socio.repository.AdminRepository;
import demo.socio.repository.UserProfileRepository;
import demo.socio.result.ResultDO;



@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	AdminRepository repo;
	
	@Autowired
	UserProfileRepository userRepo;

//	@PostMapping("/insert/{admin_username}/{admin_password}")
//	public ResultDO addAdmin(@RequestBody  MultipartFile myFile,  
//			@PathVariable String admin_username, @PathVariable String admin_password) {
//
//		Admin admin;
//		try {
//			admin = new Admin(admin_username, admin_password, myFile.getBytes() );
//			repo.save(admin); 
//		} catch (IOException e1) {
//			// TODO Auto-generated catch block
//			e1.printStackTrace();
//		}
//		return new ResultDO("OK");
//	}
	
	
	@GetMapping("/getbyname/{username}/{password}")
	public Admin getByUsername(@PathVariable String username, @PathVariable String password)
	{
		Admin admin = repo.findByAdminusername(username);
		System.out.println(admin.getAdmin_username() + " " + admin.getAdmin_password());
		System.out.println(username + " " + password);

		if(admin != null && admin.getAdmin_password().equals(password))
		{
			System.out.println("HI");			
			return admin;
		}
		else
			return null;
	}

//	@GetMapping("/get")
//	public List<Admin> get()
//	{
//		List<Admin> list = repo.findAll();
//		return list;
//	}
//
//	@GetMapping("/getbyid/{id}")
//	public Admin getById(@PathVariable int id)
//	{
//		Optional<Admin> opt = repo.findById(id);
//		return opt.get();
//	}
//
//	@GetMapping("/getbyname/{username}")
//	public Admin getByUsername(@PathVariable String username)
//	{
//		Admin admin = repo.findByAdminusername(username);
//		if(admin != null)
//			return admin;
//		else
//			return null;
//	}
//
//	@PutMapping("/getbyid/{id}")
//	public ResultDO updateAdmin(@RequestBody  MultipartFile myFile, @PathVariable int admin_id,
//			@PathVariable String admin_username, @PathVariable String admin_password)
//	{
//		Optional<Admin> opt = repo.findById(admin_id);
//		Admin admin = opt.get();
//		admin.setAdmin_username(admin_username);
//		admin.setAdmin_password(admin_password);
//		try {
//			admin.setAdmin_profile_image(myFile.getBytes());
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//		repo.save(admin);
//		return new ResultDO("OK");
//	}
//
//	@DeleteMapping("/delete/{id}")
//	public ResultDO delete(@PathVariable int id)
//	{
//		repo.deleteById(id);
//		return new ResultDO("OK");
//	}
	
//	Worker Management
	
	@GetMapping("/getvendors")
	public List<UserProfileEntity> getAllVendor()
	{
		List<UserProfileEntity> vendor=new ArrayList<>();
		
		List<UserProfileEntity>vendors=userRepo.findAll();
		
		for (UserProfileEntity userProfileEntity : vendors) {
			if(userProfileEntity.getUser_role().equals("WORKER"))
			{
				vendor.add(userProfileEntity);
			}
		}
		return vendor;
	}

	@DeleteMapping("/deleteuser/{id}")
	public String deleteUser(@PathVariable long id)
	{
		userRepo.deleteById(id);
		return "OK";
	}

	@GetMapping("/getpassword/{username}")
	public String forgetPasswordByUsername(@PathVariable String username)
	{
		Admin admin = repo.findByAdminusername(username);
		
		return admin.getAdmin_password();
	}

}
