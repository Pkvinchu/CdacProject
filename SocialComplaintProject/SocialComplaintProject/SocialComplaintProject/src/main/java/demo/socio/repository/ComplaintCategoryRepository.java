package demo.socio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import demo.socio.entity.ComplaintCategoryEntity;

@Repository
public interface ComplaintCategoryRepository extends JpaRepository<ComplaintCategoryEntity, Long> {

}
