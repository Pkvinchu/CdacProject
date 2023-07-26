package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class SignupDAOImpl implements SignupDAO
{
	@Autowired
	HibernateTemplate template;
	
	@Override
	public void addCustomer(Signup p) {
		template.save(p);
	}
	
	@Override
	public List<Signup> getCustomers()
	{
		List<Signup>mylist=(List<Signup>) template.find("from Signup p");
		return mylist;
	}
	
	@Override
	public List<Signup> getCustomer(String pwd)
	{
		List<Signup> temp=(List<Signup>)template.find("from Signup p where p.pwd=?",pwd);
		return temp;
	}
}
