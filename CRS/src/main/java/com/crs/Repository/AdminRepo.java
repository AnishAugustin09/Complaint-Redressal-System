package com.crs.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crs.Entity.Admin;

public interface AdminRepo extends JpaRepository<Admin, String> {

}
