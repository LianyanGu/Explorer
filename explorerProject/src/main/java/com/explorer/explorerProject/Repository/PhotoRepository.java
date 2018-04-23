package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.Photo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhotoRepository extends CrudRepository<Photo, String> {
    public List<Photo> findPhotosByBusinessId(@Param("businessId") String businessId);
}
