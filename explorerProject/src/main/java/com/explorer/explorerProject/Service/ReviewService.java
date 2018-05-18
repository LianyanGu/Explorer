package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Entity.Review;
import com.explorer.explorerProject.Entity.ReviewView;
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

    public List<ReviewView> getReviewByBusinessId(String businessId) {
        return reviewViewRepository.findReviewsByBusinessId(businessId);
    }

//    public void addReview(String businessId, int stars, String text) {
//        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        Date date = new Date();
//        reviewRepository.save(new Review(businessId, stars, date, text, 0, 0, 0));
//    }

    public void addReview(Review review) {
        reviewRepository.save(review);
    }

    public List<ReviewView> getReviewsByUserId(String userId) {
        return reviewViewRepository.findReviewsByUserId(userId);
    }
}
