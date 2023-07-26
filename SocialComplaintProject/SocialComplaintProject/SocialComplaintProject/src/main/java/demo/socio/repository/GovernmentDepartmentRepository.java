package demo.socio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import demo.socio.entity.GovernmentDepartmentEntity;

@Repository
public interface GovernmentDepartmentRepository extends JpaRepository<GovernmentDepartmentEntity, Long> {

}
