package demo.socio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import demo.socio.entity.ComplaintInformationEntity;
import demo.socio.entity.UserProfileEntity;

@Repository
public interface ComplaintInformationRepository extends JpaRepository<ComplaintInformationEntity, Long> {

//	public List<ComplaintInformationEntity> findByUserProfileEntityWor();

	@Query(value = "FROM demo.socio.entity.ComplaintInformationEntity c WHERE c.UserProfileEntityOff = :user AND c.complaint_status <> :status")
	public List<ComplaintInformationEntity> findByUserProfileEntityOff(UserProfileEntity user, String status);

	@Query(value = "FROM demo.socio.entity.ComplaintInformationEntity c WHERE c.UserProfileEntityWor = :user AND c.complaint_status <> :status")
	public List<ComplaintInformationEntity> findByUserProfileEntityWor(UserProfileEntity user, String status);
	
	
//	@Query(value = "from study.jparest.entity.ProductEntity p where p.cost > :cost")	// :cost --> is a placeholder
//	public List<ProductEntity> findGreaterThanCost(@Param("cost") double cost);

}
