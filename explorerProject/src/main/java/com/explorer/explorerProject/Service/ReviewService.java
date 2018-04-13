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
        return reviewViewRepository.findByBusinessId(businessId);
    }

    public void addReview(int stars, String text, Business business) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        reviewRepository.save(new Review(stars, date, text, 0, 0, 0, business));
    }
}
