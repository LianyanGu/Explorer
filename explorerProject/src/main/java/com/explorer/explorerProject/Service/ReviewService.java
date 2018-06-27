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

    public void addReview(String businessId, String userId, int stars, String text) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        User user = userService.getUser(userId);
        reviewViewRepository.save(new ReviewView(businessId, userId, stars, date, text,
                0, 0, 0, user.userName, user.reviewCount, user.yelpingSince));
    }


    public List<ReviewView> getReviewsByUserId(String userId) {
        return reviewViewRepository.findReviewsByUserId(userId);
    }
}
