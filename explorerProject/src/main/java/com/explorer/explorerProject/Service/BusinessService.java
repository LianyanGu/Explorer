package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessService {

    @Autowired
    private BusinessRepository businessRepository;

    public List<Business> getAllBusiness() {
       return businessRepository.findAll();
    }

    public Business getBusinessById(String id) {
        return businessRepository.getOne(id);
    }

}
