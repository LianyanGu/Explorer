package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Entity.Photo;
import com.explorer.explorerProject.Service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class BusinessController {
    @Autowired
    private BusinessService businessService;

    @RequestMapping(value = "/businesses/pages", params = "page", method = RequestMethod.GET)
    @ResponseBody
    public List<Business> getAllBusiness(@RequestParam("page") int page, @PageableDefault(value = 10, page = 0) Pageable pageable) {
        return businessService.getAllBusiness(pageable);
    }

    @RequestMapping(value = "business/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Business getBusinessById(@PathVariable("id") String id) {
        return businessService.getBusinessById(id);
    }

    @RequestMapping(value = "businesses/city/{city}", method = RequestMethod.GET)
    @ResponseBody
    public List<Business> getBusinessByCity(@PathVariable("city") String city) {
        return businessService.getBusinessByCity(city);
    }

    @RequestMapping(value = "businesses/{name}", method = RequestMethod.GET)
    @ResponseBody
    public List<Business> getBusinessByName(@PathVariable("name") String name) {
        return businessService.getBusinessByName(name);
    }

    @RequestMapping(value = "businesses/city/{city}/{name}", method = RequestMethod.GET)
    @ResponseBody
    public List<Business> getBusinessByCityAndName(@PathVariable("city") String city, @PathVariable("name") String name) {
        return businessService.getBusinessesByCityAndName(city,name);
    }

    @RequestMapping(value = "photos/{businessId}", method = RequestMethod.GET)
    @ResponseBody
    public List<Photo> getPhotosByBusinessId(@PathVariable("businessId") String businessId) {
        return businessService.findPhotosByBusinessId(businessId);
    }


}
