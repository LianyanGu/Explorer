package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Review;
import com.explorer.explorerProject.Repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getReviewByBusinessId(String businessId) {
        return reviewRepository.findByBusinessId(businessId);
    }
}
