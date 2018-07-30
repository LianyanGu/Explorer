package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.ReviewView;
import com.explorer.explorerProject.Entity.Tip;
import com.explorer.explorerProject.Entity.TipView;
import com.explorer.explorerProject.Repository.TipRepository;
import com.explorer.explorerProject.Repository.TipViewRepository;
import com.explorer.explorerProject.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipService {
    @Autowired
    private TipRepository tipRepository;

    @Autowired
    private TipViewRepository tipViewRepository;

    @Autowired
    private UserRepository userRepository;

    public void addTip(Tip tip) {
        tipRepository.save(tip);
    }

    public List<TipView> getTipByBusinessId(String businessId) {

        return tipViewRepository.findTipsByBusinessId(businessId);
    }

    public List<TipView> getTipsByUserId(String userId) {

        return tipViewRepository.findTipsByUserId(userId);
    }

    public void updateTip(Tip tip) {
        Tip oldTip = tipRepository.getOne(tip.getId());
        oldTip.setLikes(tip.getLikes());
        tipRepository.save(oldTip);
    }
}
