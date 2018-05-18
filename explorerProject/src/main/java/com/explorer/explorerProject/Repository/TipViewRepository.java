package com.explorer.explorerProject.Repository;

import com.explorer.explorerProject.Entity.TipView;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TipViewRepository extends CrudRepository<TipView, String> {
    public List<TipView> findTipsByBusinessId(String businessId);

    public List<TipView> findTipsByUserId(String userId);
}
