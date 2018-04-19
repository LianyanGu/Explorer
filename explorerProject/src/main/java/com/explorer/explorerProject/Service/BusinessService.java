package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessService {

    @Autowired
    private BusinessRepository businessRepository;

    public List<Business> getAllBusiness(Pageable pageable) {

        return businessRepository.findAll(pageable);
    }

    public List<Business> getAllBusinesswoPagination() {
        return businessRepository.findAll();
    }

    public Business getBusinessById(String id) {
        return businessRepository.getOne(id);
    }

    public List<Business> getBusinessByCity(String city) {
        return businessRepository.findByCityOrderByName(city);
    }

    public List<Business> getBusinessByName(String name) {
        return businessRepository.findByNameIgnoreCaseContaining(name);
    }

    public List<Business> getBusinessesByCityAndName(String city, String name) {
        return businessRepository.findByCityAndNameIgnoreCaseContaining(city,name);
    }
}
