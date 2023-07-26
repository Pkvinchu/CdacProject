package demo.socio.controller;

import java.util.List;
import java.util.Optional;

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
import demo.socio.repository.ComplaintCategoryRepository;
import demo.socio.repository.GovernmentDepartmentRepository;
import demo.socio.repository.GovernmentDepartmentRepository;
import demo.socio.result.ResultDO;

@CrossOrigin
@RestController
@RequestMapping("/complaintcategory")
public class ComplaintCategoryController {

	@Autowired
	ComplaintCategoryRepository compCateRepo;

	@Autowired
	GovernmentDepartmentRepository govDeptRepo;

	
	@PutMapping("/insert")
	public String insertCategory() {

		return "";
	}

	@PostMapping("/insert/{government_department_id}")
	public ComplaintCategoryEntity addCategory(@PathVariable(value = "government_department_id") long government_department_id,
			@RequestBody ComplaintCategoryEntity complaintCat) {

		Optional<GovernmentDepartmentEntity>  dept = govDeptRepo.findById(government_department_id);
		complaintCat.setGovernmentDepartmentEntity(dept.get());
		
		ComplaintCategoryEntity comp= compCateRepo.save(complaintCat);

		return comp;
	}


	@GetMapping("/getcomplaintcate")
	public List<ComplaintCategoryEntity> allComplaintCategory() {
		return compCateRepo.findAll();
	}
//
//	@DeleteMapping("deletecomplaint/{id}")
//	public ResultDO deleteComplaint(@PathVariable  Long id)
//	{
//		compCateRepo.deleteById(id);
//		return new ResultDO("OK");
//	}
//

}
