package demo.socio.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

//import com.itextpdf.text.pdf.PdfStructTreeController.returnType;

import demo.socio.repository.ComplaintInformationRepository;
import demo.socio.repository.ImageRepository;
import demo.socio.repository.UserProfileRepository;

@CrossOrigin
@RestController
@RequestMapping("/complaintinfo")
public class ComplaintInformationController {

	@Autowired
	ComplaintInformationRepository complaintRepo;

	@Autowired
	UserProfileRepository userRepo;

	@Autowired
	ImageRepository imgRepo;

	@GetMapping("/getall")
	public List<ComplaintInformationEntity> getAll()
	{
		return complaintRepo.findAll();
	}

	@GetMapping("/getcount")
	public List<Long> getNumberOfComplaints()
	{
		List<Long> al = new ArrayList<Long>();
		long total = 0;
		long inProgress = 0;
		long pending = 0;
		long completed = 0;

		List<ComplaintInformationEntity> list = complaintRepo.findAll();
		total = list.size();

		try {

			for(ComplaintInformationEntity complaint : list)
			{
				if(complaint.getComplaint_status().contains("RECEIVED"))
				{
					System.out.println("RECEIVED");
					pending++;
				}
				else if(complaint.getComplaint_status().contains("IN PROGRESS"))
				{
					System.out.println("IN PROGRESS");
					inProgress++;
				}
				else if(complaint.getComplaint_status().contains("COMPLETED & CLOSED"))
				{
					System.out.println("COMPLETED");
					completed++;
				}
				else
				{
					System.out.println("Invalid Status..");
				}
			}

		} catch (NullPointerException e) {
			System.err.println(e);
		}

		al.add(total);
		al.add(pending);
		al.add(inProgress);
		al.add(completed);

		return al;
	}

	@GetMapping("/getbyid/{complaint_id}")
	public ComplaintInformationEntity getById(@PathVariable long complaint_id)
	{
		ComplaintInformationEntity complaintInfo = complaintRepo.findById(complaint_id).get();
		return complaintInfo;
	}

	@GetMapping("/getbyuserid/{worker_user_id}")
	public List<ComplaintInformationEntity> getByDept(@PathVariable long worker_user_id)
	{
		String status = "COMPLETED & CLOSED";
		Optional<UserProfileEntity> userObj = userRepo.findById(worker_user_id);
		UserProfileEntity user = userObj.get();

		List<ComplaintInformationEntity> list = complaintRepo.findByUserProfileEntityWor(user, status);
		//		List<ComplaintInformationEntity> list = complaintRepo.findByUserProfileEntityOff(user, status);
		return list;
	}


	@PostMapping("/insert")
	public String insertComplaint(@RequestBody MultipartFile myFile,

			@PathVariable long user_id,
			@PathVariable String  complaint_category ,
			@PathVariable String complaint_department ,
			@PathVariable String complaint_description ,
			@PathVariable double complaint_latitude ,
			@PathVariable double complaint_longitude ,
			@PathVariable String complaint_landmark ,
			@PathVariable String complaint_priority ,
			@PathVariable long complaint_official_assignee_id 
			)
	{
		String complaintStatus = "RECEIVED";
		String imageType = "COMPLAINT";
		LocalDate complaintReceivedDate = LocalDate.now();
		byte[] complaintImage = null;
		try {
			complaintImage = myFile.getBytes();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		Optional<UserProfileEntity> userObj = userRepo.findById(user_id);
		UserProfileEntity user = userObj.get();

		List<UserProfileEntity> official = new ArrayList<>();
		List<UserProfileEntity> officials = userRepo.findByUserdepartment(complaint_department);

		for (UserProfileEntity userProfileEntity : officials) {

			if(userProfileEntity.getUser_role().equals("OFFICIAL"))
			{
				official.add(userProfileEntity);
			}
		}

		ComplaintInformationEntity complaintInfo = new ComplaintInformationEntity();

		complaintInfo.setUserProfileEntity(user);
		complaintInfo.setComplaint_category( complaint_category );
		complaintInfo.setComplaint_department( complaint_department );
		complaintInfo.setComplaint_description( complaint_description );
		complaintInfo.setComplaint_latitude( complaint_latitude );
		complaintInfo.setComplaint_longitute( complaint_longitude );
		complaintInfo.setComplaint_landmark( complaint_landmark );
		complaintInfo.setComplaint_priority( complaint_priority );
		complaintInfo.setComplaint_status(complaintStatus);
		complaintInfo.setUserProfileEntityOff( official.get(0) );
		complaintInfo.setComplaint_received_date( complaintReceivedDate );

		ComplaintInformationEntity savedComplaint = complaintRepo.save(complaintInfo);

		ImageEntity imageObj = new ImageEntity(complaintImage, imageType, savedComplaint);

		imgRepo.save(imageObj);

		return "OK";

	}

	//	--------------------------------------------------------------------- Trial Adding Complaint With Limited Parameters -----------------------------

	@PostMapping("/add/{userUsername}/{complaint_category}/{complaint_department}/{complaint_description}/{complaint_latitude}/{complaint_longitude}/{complaint_landmark}/{complaint_priority}")
	public String insertComp(@RequestBody MultipartFile myFile,
			@PathVariable long userUsername,
			@PathVariable String  complaint_category ,
			@PathVariable String complaint_department ,
			@PathVariable String complaint_description ,
			@PathVariable double complaint_latitude ,
			@PathVariable double complaint_longitude ,
			@PathVariable String complaint_landmark ,
			@PathVariable String complaint_priority 
			)
	{
		String complaintStatus = "RECEIVED";
		LocalDate date = LocalDate.now();
		String imageType = "COMPLAINT";
		byte[] complaintImage = null;
		try {
			complaintImage = myFile.getBytes();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}


		UserProfileEntity user = userRepo.findById(userUsername).get();
		System.out.println(user.getUser_id());
		List<UserProfileEntity> official = new ArrayList<>();
		List<UserProfileEntity> officials = userRepo.findByUserdepartment(complaint_department);

		for (UserProfileEntity userProfileEntity : officials) {

			if(userProfileEntity.getUser_role().equals("OFFICIAL"))
			{
				official.add(userProfileEntity);
			}
		}

		ComplaintInformationEntity complaintInfo = new ComplaintInformationEntity();

		complaintInfo.setUserProfileEntity(user);
		complaintInfo.setComplaint_category( complaint_category );
		complaintInfo.setComplaint_department( complaint_department );
		complaintInfo.setComplaint_description( complaint_description );
		complaintInfo.setComplaint_latitude( complaint_latitude );
		complaintInfo.setComplaint_longitute( complaint_longitude );
		complaintInfo.setComplaint_landmark( complaint_landmark );
		complaintInfo.setComplaint_priority( complaint_priority );
		complaintInfo.setUserProfileEntityOff( official.get(0) );
		complaintInfo.setComplaint_received_date(date);
		complaintInfo.setComplaint_status(complaintStatus);

		if(user.getUserUsername() != null && official != null) {

			ComplaintInformationEntity savedComplaint = complaintRepo.save(complaintInfo);

			ImageEntity imageObj = new ImageEntity(complaintImage, imageType, savedComplaint);

			imgRepo.save(imageObj);

			return "OK";
		}

		return "NOT OK";

	}
	
//	


	//	------------------------------- Assign worker ------------------------------ 
	@PutMapping("/assignworker/{user_worker_id}/{complaint_id}")
	public String assignWorker(@PathVariable long user_worker_id, @PathVariable long complaint_id)
	{
		String complaintStatus = "IN PROGRESS";
		
		Optional<UserProfileEntity> workerObj = userRepo.findById(user_worker_id);
		UserProfileEntity worker = workerObj.get();

		ComplaintInformationEntity complaintInfo = complaintRepo.findById(complaint_id).get();
		complaintInfo.setUserProfileEntityWor(worker);
		complaintInfo.setComplaint_status(complaintStatus);

		complaintRepo.save(complaintInfo);

		return "OK";
	}


	//	------------------------------- Set Status of Complaint ------------------------------

	@PutMapping("/setstatus/{complaint_id}/{complaint_status}")
	public String setStatus(@PathVariable long complaint_id, @PathVariable String complaint_status)
	{
		ComplaintInformationEntity complaintInfo = complaintRepo.findById(complaint_id).get();
		complaintInfo.setComplaint_status(complaint_status);

		complaintRepo.save(complaintInfo);

		return "OK";
	}


	//	------------------------------- Issue Resolved and Closed ------------------------------

	@PutMapping("/closecomplaint/{complaint_id}")
	public String complaintResolved(@RequestBody MultipartFile myFile , @PathVariable long complaint_id)
	{
		byte[] resolvedImage = null;
		String imageType = "RESOLVED";
		String complaintStatus = "COMPLETED & CLOSED";
		LocalDate complaintResolvedDate = LocalDate.now();

		try {
			resolvedImage = myFile.getBytes();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		ComplaintInformationEntity complaintInfo = complaintRepo.findById(complaint_id).get();
		complaintInfo.setComplaint_status(complaintStatus);
		complaintInfo.setComplaint_resolved_date(complaintResolvedDate);

		ComplaintInformationEntity savedComplaint = complaintRepo.save(complaintInfo);

		ImageEntity imageObj = new ImageEntity(resolvedImage, imageType, savedComplaint);

		imgRepo.save(imageObj);

		return "OK";
	}


}
