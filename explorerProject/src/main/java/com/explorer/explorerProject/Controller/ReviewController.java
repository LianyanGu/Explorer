package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Entity.Review;
import com.explorer.explorerProject.Entity.ReviewView;
import com.explorer.explorerProject.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @RequestMapping(value = "/reviews/{businessId}", method = RequestMethod.GET)
    @ResponseBody
    public List<ReviewView> getReviewByBusinessId(@PathVariable("businessId") String businessId) {
        return reviewService.getReviewByBusinessId(businessId);
    }

    @RequestMapping(value = "/review", method = RequestMethod.POST)
    public void addReview(Review review) {
        reviewService.addReview(review);
    }

    @RequestMapping(value = "{userId}/reviews", method = RequestMethod.GET)
    @ResponseBody
    public List<ReviewView> getReviewsByUserId(@PathVariable("userId") String userId) {
        return reviewService.getReviewsByUserId(userId);
    }

}
