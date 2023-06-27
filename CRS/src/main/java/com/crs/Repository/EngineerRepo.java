package com.crs.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crs.Entity.Engineer;

public interface EngineerRepo extends JpaRepository<Engineer, String>{

}
