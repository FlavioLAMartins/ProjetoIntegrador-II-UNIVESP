package com.univesp.librosys.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.univesp.librosys.Model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{
    
}
