package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Review;
import com.explorer.explorerProject.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @RequestMapping(value = "/reviews/{businessId}",method = RequestMethod.GET)
    public List<Review> getReviewByBusinessId(@PathVariable("businessId") String businessId) {
        return reviewService.getReviewByBusinessId(businessId);
    }

}
