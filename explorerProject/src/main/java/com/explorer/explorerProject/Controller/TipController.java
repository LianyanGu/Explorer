package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Entity.Tip;
import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Service.TipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class TipController {
    @Autowired
    private TipService tipService;

    @RequestMapping(value = "/tips/{businessId}", method = RequestMethod.GET)
    @ResponseBody
    public List<Tip> getTipById(@PathVariable("businessId") String businessId) {

        return tipService.getTipByBusinessId(businessId);
    }

    @RequestMapping(value = "/tip", method = RequestMethod.POST)
    public void addTip(String text, String businessId, User user) {

        tipService.addTip(text, businessId, user);
    }
}
