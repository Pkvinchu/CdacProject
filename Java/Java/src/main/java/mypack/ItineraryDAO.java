package mypack;

import java.util.List;

public interface ItineraryDAO {
	
	List<Itinerary> getItinerary(int catmaster_id);
}
