package com.crs.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crs.Entity.Manager;
@Repository
public interface ManagerRepo extends JpaRepository<Manager, String>{

}
