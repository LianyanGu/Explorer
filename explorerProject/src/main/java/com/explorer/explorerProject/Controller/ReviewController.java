package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Review;
import com.explorer.explorerProject.Entity.ReviewView;
import com.explorer.explorerProject.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @RequestMapping(value = "/reviews/{businessId}",method = RequestMethod.GET)
    @ResponseBody
    public List<ReviewView> getReviewByBusinessId(@PathVariable("businessId") String businessId) {
        return reviewService.getReviewByBusinessId(businessId);
    }

}
