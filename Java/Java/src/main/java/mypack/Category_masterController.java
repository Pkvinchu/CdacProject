package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController  
@CrossOrigin("http://localhost:3000")
public class Category_masterController
{
	@Autowired
	Category_masterManager manager;
	
	@GetMapping(value = "crud/homepage",headers = "Accept=application/json")  
	 public String showHomepage()
	 {
		  return new Gson().toJson(manager.getHomepage());
	 }
	
	@GetMapping(value = "crud/subpage/{cat_id}", headers = "Accept=application/json")  
	 public String showSubpage(@PathVariable String cat_id)
	 {
		return new Gson().toJson(manager.getSubpage(cat_id));
	 }
	
	@GetMapping(value = "crud/subsector/{cat_id}", headers = "Accept=application/json")  
	 public String showSubsector(@PathVariable String cat_id)
	 {
		return new Gson().toJson(manager.getSubsector(cat_id));
	 }
	
	@GetMapping(value = "crud/costpage/{catmaster_id}", headers = "Accept=application/json")  
	 public String showCostpage(@PathVariable int catmaster_id)
	 {
		return new Gson().toJson(manager.getCostpage(catmaster_id));
	 }
	
	@GetMapping(value = "crud/bookpage/{catmaster_id}", headers = "Accept=application/json")  
	 public String showBookpage(@PathVariable int catmaster_id)
	 {
		return new Gson().toJson(manager.getBookpage(catmaster_id));
	 }
	
	@GetMapping(value = "crud/searchpage", headers = "Accept=application/json")  
	 public String showCostpage()
	 {
		return new Gson().toJson(manager.getSearchpage());
	 }

	
//	@GetMapping(value = "crud/booking/{catmaster_id}", headers = "Accept=application/json")  
//	 public String showCostData(@PathVariable int catmaster_id)
//	 {
//		return new Gson().toJson(manager.getCostData(catmaster_id));
//	 }
	
	
}
