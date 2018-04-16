package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Attribute;
import com.explorer.explorerProject.Repository.AttributeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttributeService {
    @Autowired
    private AttributeRepository attributeRepository;

    public List<Attribute> getAttributeByBusinessId(String businessId) {
        return attributeRepository.getAttributeByBusinessId(businessId);
    }
}
