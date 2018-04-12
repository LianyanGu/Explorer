package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Entity.Tip;
import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Service.TipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class TipController {
    @Autowired
    private TipService tipService;

    @RequestMapping(value = "/tips/{tipId}", method = RequestMethod.GET)
    @ResponseBody
    public Tip getTipById(@PathVariable("tipId") String tipId) {
        return tipService.getTipById(tipId);
    }

    @RequestMapping(value = "/tip",method = RequestMethod.POST)
    public void addTip(String text, User user, Business business) {
        tipService.addReviewForABusiness(text, user, business);
    }
}
