package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.Tip;
import com.explorer.explorerProject.Entity.TipView;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TipRepository extends CrudRepository<Tip, String> {
    public List<Tip> getTipByBusinessId(String businessId);

    public Tip getOne(@Param("id") String id);
}
