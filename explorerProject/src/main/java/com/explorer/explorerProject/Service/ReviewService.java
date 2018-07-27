package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Entity.Review;
import com.explorer.explorerProject.Entity.ReviewView;
import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Repository.ReviewRepository;
import com.explorer.explorerProject.Repository.ReviewViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewViewRepository reviewViewRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserService userService;

    public List<ReviewView> getReviewByBusinessId(String businessId) {
        return reviewViewRepository.findReviewsByBusinessId(businessId);
    }

    public void addReview(Review review) {
        reviewRepository.save(review);
    }

    public List<ReviewView> getReviewsByUserId(String userId) {
        return reviewViewRepository.findReviewsByUserId(userId);
    }

    public void updateReview(ReviewView reviewView) {
        ReviewView oldReviewView = reviewViewRepository.getOne(reviewView.getId());
        oldReviewView.setUseful(reviewView.getUseful());
        reviewView.setFunny(reviewView.getFunny());
        reviewView.setCool(reviewView.getCool());
        reviewViewRepository.save(oldReviewView);
    }
}
