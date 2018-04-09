package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BusinessRepository extends JpaRepository<Business,String> {
    public List<Business> findAll();
}
