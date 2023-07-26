package mypack;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class Category_masterDAOImpl implements Category_masterDAO
{
	@Autowired
	HibernateTemplate template;

	@Override
	public List<Category_master> getHomepage()
	{
		List<Category_master> mylist=(List<Category_master>) template.find("from Category_master c where c.subcat_id is null");
		return mylist;
	}
	
	@Override
	public List<Category_master> getSubpage(String cat_id)
	{
		List<Category_master> temp=(List<Category_master>)template.find("from Category_master c where c.subcat_id=?",cat_id);
		return temp;
	}
	
	@Override
	public List<Category_master> getSubsector(String cat_id)
	{
		List<Category_master> temp1=(List<Category_master>)template.find("from Category_master c where c.subcat_id=?",cat_id);
		return temp1;
	}
	
	@Override
	public List<Category_master> getCostpage(int catmaster_id)
	{
		List<Category_master> temp2=(List<Category_master>)template.find("from Category_master c where c.catmaster_id=?",catmaster_id);
		return temp2;
	}
	
	@Override
	public List<Category_master> getBookpage(int catmaster_id)
	{
		List<Category_master> temp3=(List<Category_master>)template.find("from Category_master c where c.catmaster_id=?",catmaster_id);
		return temp3;
	}
	
	@Override
	public List<Category_master> getSearchpage() {
		
		List<Category_master> search=(List<Category_master>)template.find("from Category_master c where cost != 0");
		return search;
	}

	
//	@Override
//	public Category_master getCostData(int catmaster_id)
//	{
//		Category_master temp4=(Category_master)template.find("from Category_master c where c.catmaster_id=?",catmaster_id);
//		return temp4;
//	}
	
	
}
