package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Entity.Review;
import com.explorer.explorerProject.Entity.ReviewView;
import com.explorer.explorerProject.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @RequestMapping(value = "{userId}/reviews", method = RequestMethod.GET)
    @ResponseBody
    public List<ReviewView> getReviewsByUserId(@PathVariable("userId") String userId) {
        return reviewService.getReviewsByUserId(userId);
    }

    @RequestMapping(value = "/addReview", method = RequestMethod.POST)
    public ResponseEntity<?> addReview(@RequestBody Review review) {
        System.out.println("backend get review star:" + review.getStars());
        reviewService.addReview(review);
        return new ResponseEntity<String>("Review Added", HttpStatus.OK);
    }

    @RequestMapping(value = "/review", method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<?> updateReview(ReviewView reviewView) {
        reviewService.updateReview(reviewView);
        return new ResponseEntity<String>("Updated review", HttpStatus.OK);
    }


}
