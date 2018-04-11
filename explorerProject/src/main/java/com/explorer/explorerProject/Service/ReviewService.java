package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Review;
import com.explorer.explorerProject.Entity.ReviewView;
import com.explorer.explorerProject.Repository.ReviewRepository;
import com.explorer.explorerProject.Repository.ReviewViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewViewRepository reviewViewRepository;

    public List<ReviewView> getReviewByBusinessId(String businessId) {
        return reviewViewRepository.findByBusinessId(businessId);
    }
}
