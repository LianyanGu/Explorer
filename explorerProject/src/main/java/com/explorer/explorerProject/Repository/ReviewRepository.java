package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, String>{
    public List<Review> findByBusinessId(String businessId);
}
