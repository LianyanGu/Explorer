package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.ReviewView;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewViewRepository extends CrudRepository<ReviewView,String> {
    public List<ReviewView> findByBusinessId(String businessId);
}