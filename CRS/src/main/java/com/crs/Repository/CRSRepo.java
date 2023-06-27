package com.crs.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.crs.Entity.CRS;

@Repository
public interface CRSRepo extends JpaRepository<CRS, Integer>{
	
	@Query(value="select * from crs where useremail=?1",nativeQuery=true)
	public List<CRS> findUserEmail(String email);
	
	@Query(value="select * from crs where managermail=?1",nativeQuery=true)
	public List<CRS> findManagerEmail(String email);
	
	@Query(value="select * from crs where engineermail=?1",nativeQuery=true)
	public List<CRS> findEnginnerEmail(String email);

}
