package com.explorer.explorerProject.Entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Date;

@Entity(name = "Review")
@Table(name = "review")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Review {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "business_Id", nullable = false)
    private Business business;

    @Id
    private String id;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "stars")
    private int stars;

    //Can change Date
    @Column(name = "date")
    private Date date;

    @Column(name = "text")
    private String text;

    @Column(name = "useful")
    private int useful;

    @Column(name = "funny")
    private int funny;

    @Column(name = "cool")
    private int cool;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getUseful() {
        return useful;
    }

    public void setUseful(int useful) {
        this.useful = useful;
    }

    public int getFunny() {
        return funny;
    }

    public void setFunny(int funny) {
        this.funny = funny;
    }

    public int getCool() {
        return cool;
    }

    public void setCool(int cool) {
        this.cool = cool;
    }

    public Review() {}

    public Review(Business business, String id, String userId, int stars, Date date, String text, int useful, int funny, int cool) {
        this.business = business;
        this.id = id;
        this.userId = userId;
        this.stars = stars;
        this.date = date;
        this.text = text;
        this.useful = useful;
        this.funny = funny;
        this.cool = cool;
    }


}
