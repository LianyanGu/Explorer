package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.ReviewView;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewViewRepository extends CrudRepository<ReviewView,String> {
    public List<ReviewView> findReviewsByBusinessId(String businessId);
    public List<ReviewView> findReviewsByUserId(String userId);
    public ReviewView getOne(@Param("id") String id);
}
