package demo.socio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.socio.entity.ComplaintCategoryEntity;
import demo.socio.entity.GovernmentDepartmentEntity;
import demo.socio.repository.GovernmentDepartmentRepository;
import demo.socio.result.ResultDO;

@CrossOrigin
@RestController
@RequestMapping("/govdept")
public class GovernmentDepartmentController {

	@Autowired
	GovernmentDepartmentRepository repo;
	
//	@PostMapping("/insert")
//	public ResultDO insertGovDept(@RequestBody GovernmentDepartmentEntity govdept) {
//		repo.save(govdept);
//		return new ResultDO("Added Gov Dept..");
//	}
//	
	@GetMapping("/getall")
	public List<GovernmentDepartmentEntity> getDept()
	{
		return repo.findAll();
	}
	
	
//	@DeleteMapping("/delete")
//	public ResultDO deleteDepartment(@PathVariable long government_department_id)
//	{
//		repo.deleteById(government_department_id);
//		return new ResultDO("DELETED");
//	}
//	
//	@PutMapping("/update")
//	public ResultDO updateDepartment(@PathVariable long government_department_id, @PathVariable String government_department_name)
//	{
//		GovernmentDepartmentEntity govdept = repo.findById(government_department_id).get();
//		govdept.setGovernment_department_name(government_department_name);
//		repo.save(govdept);
//		
//		return new ResultDO("Government Department Updated");
//	}
	
}
