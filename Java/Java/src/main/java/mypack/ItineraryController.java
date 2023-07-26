package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:3000")
public class ItineraryController {
	
	@Autowired
	ItineraryManager manager;
	
	@GetMapping(value = "crud/itinerary/{catmaster_id}", headers = "Accept=application/json")  
	 public String getItinerary(@PathVariable int catmaster_id)
	 {
		return new Gson().toJson(manager.getItinerary(catmaster_id));
	 }
}
