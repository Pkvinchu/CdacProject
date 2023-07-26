package demo.socio.controller;

import java.io.IOException;
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
import org.springframework.web.multipart.MultipartFile;

import demo.socio.entity.ComplaintInformationEntity;
import demo.socio.entity.ImageEntity;
import demo.socio.entity.UserProfileEntity;
import demo.socio.repository.ComplaintInformationRepository;
import demo.socio.repository.ImageRepository;
import demo.socio.repository.UserProfileRepository;
import demo.socio.result.ResultDO;

@CrossOrigin
@RestController
@RequestMapping("/image")
public class ImageController {

	@Autowired
	ImageRepository imageRepo;
	
	@Autowired
	UserProfileRepository userRepo;

	@Autowired
	ComplaintInformationRepository complaintRepo;

//	@PostMapping("/insert")
//	public ResultDO insertImages(byte[] image ,String image_type, ComplaintInformationEntity complaintInfo)
//	{
//		
//		ImageEntity imageEntity = new ImageEntity();
//		
//		imageEntity.setImage(image);
//		imageEntity.setImage_type(image_type);
//		imageEntity.setComplaintInformationEntity(complaintInfo);
//
//		repo.save(imageEntity);
//
//		return new ResultDO("OK");
//	}
	


	@GetMapping("/getall")
	public List<ImageEntity> getImages()
	{
		List<ImageEntity> list = imageRepo.findAll();
		return list;
	}

	@GetMapping("/getbycomplaint/{complaint_id}")
	public ImageEntity getByComplaint(@PathVariable long complaint_id)
	{
		ComplaintInformationEntity complaintInfo = complaintRepo.findById(complaint_id).get();
		
		ImageEntity imageEntity = imageRepo.findByComplaintInformationEntity(complaintInfo);
		return imageEntity;
	}
	
	
//	@GetMapping("/getbyuserid/{worker_user_id}")
//	public List<ImageEntity> getByDept(@PathVariable long worker_user_id)
//	{
//		String status = "COMPLETED & CLOSED";
//		UserProfileEntity user = userRepo.findById(worker_user_id).get();
		
//		List<ComplaintInformationEntity> compList = complaintRepo.findByUserProfileEntityWor(user, status);
		
//		List<ImageEntity> list = imageRepo.findByComplaintInformationEntity(user, status);
//		List<ComplaintInformationEntity> list = complaintRepo.findByUserProfileEntityOff(user, status);
//		return list;
//	}
	
	public String trialFunction(long id)
	{
		UserProfileEntity user = userRepo.findById(id).get();
		
		
		
		return "OK";
	}
	
	
	
	@GetMapping("/getbyid/{image_id}")
	public ImageEntity getByID(@PathVariable long image_id)
	{
		Optional<ImageEntity> opt = imageRepo.findById(image_id);
		return opt.get();
	}

	@DeleteMapping("/delete/{image_id}")
	public ResultDO deleteImage(@PathVariable long image_id)
	{
		imageRepo.deleteById(image_id);
		return new ResultDO("OK");
	}

}
