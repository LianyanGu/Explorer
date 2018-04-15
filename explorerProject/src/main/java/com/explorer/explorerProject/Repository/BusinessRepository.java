package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.Business;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BusinessRepository extends CrudRepository<Business,String> {
    public List<Business> findAll(Pageable pageable);

    public List<Business> findAll();

    public Business getOne(@Param("id") String id);

    public List<Business> findByCity(@Param("city") String city);
}
