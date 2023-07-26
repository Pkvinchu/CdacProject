package demo.socio.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import demo.socio.entity.UserProfileEntity;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfileEntity, Long> {

	public UserProfileEntity findByUserUsername(String username);

	public List<UserProfileEntity> findByUserdepartment(String department);


	
}
