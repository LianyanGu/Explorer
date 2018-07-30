package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Entity.Tip;
import com.explorer.explorerProject.Entity.TipView;
import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Service.TipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class TipController {
    @Autowired
    private TipService tipService;

    @RequestMapping(value = "/tips/{businessId}", method = RequestMethod.GET)
    @ResponseBody
    public List<TipView> getTipById(@PathVariable("businessId") String businessId) {

        return tipService.getTipByBusinessId(businessId);
    }

    @RequestMapping(value = "/addTip", method = RequestMethod.POST)
    public ResponseEntity<?> addTip(@RequestBody Tip tip) {
        tipService.addTip(tip);
        return new ResponseEntity<String>("Tip Added", HttpStatus.OK);

    }

    @RequestMapping(value = "{userId}/tips", method = RequestMethod.GET)
    @ResponseBody
    public List<TipView> getReviewsByUserId(@PathVariable("userId") String userId) {
        return tipService.getTipsByUserId(userId);
    }

}
