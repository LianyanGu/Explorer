package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.TipView;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TipViewRepository extends CrudRepository<TipView, String> {
    public List<TipView> findTipsByBusinessId(String businessId);

}
