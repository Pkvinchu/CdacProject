package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignupManagerImpl implements SignupManager
{
	@Autowired
	SignupDAO dao;
	
	@Override
	public void addCustomer(Signup p) {
		dao.addCustomer(p);
		
	}
	
	@Override
	public List<Signup> getCustomers() {
		// TODO Auto-generated method stub
		return dao.getCustomers();
	}
	
	@Override
	public List<Signup> getCustomer(String pwd) {
		// TODO Auto-generated method stub
		return dao.getCustomer(pwd);
	}
}
