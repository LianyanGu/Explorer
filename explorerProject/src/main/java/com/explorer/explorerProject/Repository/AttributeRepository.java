package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.Attribute;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Repository
public interface AttributeRepository extends CrudRepository<Attribute, String> {
    public List<Attribute> getAttributeByBusinessId(@Param("businessId") String businessId);
}
