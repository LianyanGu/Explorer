package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.Review;
import com.explorer.explorerProject.Entity.ReviewView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, String>{
}
