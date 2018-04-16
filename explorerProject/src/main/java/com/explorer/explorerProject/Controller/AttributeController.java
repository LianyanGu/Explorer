package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Attribute;
import com.explorer.explorerProject.Service.AttributeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class AttributeController {
    @Autowired
    private AttributeService attributeService;


    @RequestMapping(value = "attribute/{businessId}", method = RequestMethod.GET)
    @ResponseBody
    public List<Attribute> getAttributesByBusinessId(@PathVariable("businessId") String businessId) {
        return attributeService.getAttributeByBusinessId(businessId);
    }
}
