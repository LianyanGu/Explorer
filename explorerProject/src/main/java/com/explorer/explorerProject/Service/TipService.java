package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Business;
import com.explorer.explorerProject.Entity.Tip;
import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Repository.TipRepository;
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

    public void addTip(String text, User user, Business business) {
        if (StringUtils.isEmpty(text)) {
            return;
        }
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
//        System.out.println(dateFormat.format(date));

        tipRepository.save(new Tip(text, date,0, user, business));
    }

    public List<Tip> getTipByBusinessId(String businessId) {
        return tipRepository.getTipByBusinessId(businessId);
    }
}


//    String id, String text, Date date, int likes, User user, Business business
//   How to deal with the id here? Not include it in the db?