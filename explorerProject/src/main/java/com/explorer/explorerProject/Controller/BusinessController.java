package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BusinessController {
    @Autowired
    private BusinessService businessService;

    @RequestMapping(value = "/businesses", method = RequestMethod.GET)
    public List<Business> getAllBusiness() {
        return businessService.getAllBusiness();
    }


}
