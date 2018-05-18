package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Entity.Tip;
import com.explorer.explorerProject.Entity.TipView;
import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Repository.TipRepository;
import com.explorer.explorerProject.Repository.TipViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Service
public class TipService {
    @Autowired
    private TipRepository tipRepository;

    @Autowired
    private TipViewRepository tipViewRepository;

    public void addTip(String text, String businessId, User user) {
        if (StringUtils.isEmpty(text)) {
            return;
        }
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();

        tipRepository.save(new Tip(text, date, 0, businessId, user));
    }

    public List<TipView> getTipByBusinessId(String businessId) {

        return tipViewRepository.findTipsByBusinessId(businessId);
    }

    public List<TipView> getTipsByUserId(String userId) {
        return tipViewRepository.findTipsByUserId(userId);
    }

}
