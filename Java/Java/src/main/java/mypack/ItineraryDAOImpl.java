package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public class ItineraryDAOImpl implements ItineraryDAO {

	@Autowired
	HibernateTemplate template;
	
	@Override
	public List<Itinerary> getItinerary(int catmaster_id) {
		
		List<Itinerary> mylist = (List<Itinerary>)template.find("from Itinerary i where i.catmaster_id =?",catmaster_id);
		return mylist;
	}
	
	
}
