package demo.socio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import demo.socio.entity.ComplaintInformationEntity;
import demo.socio.entity.ImageEntity;
import demo.socio.entity.UserProfileEntity;

@Repository
public interface ImageRepository extends JpaRepository<ImageEntity, Long> {

	public ImageEntity findByComplaintInformationEntity(ComplaintInformationEntity complaintInfo);



	
//	@Query(value = "FROM demo.socio.entity.ImageEntity i WHERE i.ComplaintInformationEntity.UserProfileEntityWor = :user AND c.complaint_status <> :status")
//	public List<ComplaintInformationEntity> findByUserProfileEntityWor(UserProfileEntity user, String status);
}
