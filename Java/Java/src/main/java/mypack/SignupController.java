package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController  
@CrossOrigin("http://localhost:3000")
public class SignupController 
{
	@Autowired
	SignupManager manager;
	
	@PostMapping(value = "crud/add", headers = "Accept=application/json")  
	 public void addCus(@RequestBody Signup signup)
	 {
		manager.addCustomer(signup);
	 }
	
	@GetMapping(value = "crud/signup",headers = "Accept=application/json")  
	 public String showCustomers()
	 {
		  return new Gson().toJson(manager.getCustomers());
	 }
	
	@GetMapping(value = "crud/search/{pwd}", headers = "Accept=application/json")  
	 public List<Signup> getCus(@PathVariable String pwd)
	 {
		List<Signup> p=manager.getCustomer(pwd);
		return p;
	 }
}
