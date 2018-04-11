package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.Tip;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipRepository extends CrudRepository<Tip, String> {
    public Tip getTipById(String tipId);
}
