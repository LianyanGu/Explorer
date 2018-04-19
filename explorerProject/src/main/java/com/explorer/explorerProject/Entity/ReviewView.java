package com.explorer.explorerProject.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "reviewview")
@Immutable
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class ReviewView {
    @Id
    private String id;

    @Column(name = "business_id")
    private String businessId;

    @Column(name = "user_id")
    private String userId;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

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

    @Column(name = "name")
    public String userName;

    @Column(name = "review_count")
    public int reviewCount;

    @Column(name = "yelping_since")
    public Date yelpingSince;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "business_id", nullable = false)
//    @JsonBackReference
//    private Business business;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getReviewCount() {
        return reviewCount;
    }

    public void setReviewCount(int reviewCount) {
        this.reviewCount = reviewCount;
    }

    public Date getYelpingSince() {
        return yelpingSince;
    }

    public void setYelpingSince(Date yelpingSince) {
        this.yelpingSince = yelpingSince;
    }

    private ReviewView() {

    }

    public ReviewView(String businessId, String userId, int stars, Date date, String text,
                      int useful, int funny, int cool, String userName, int reviewCount,
                      Date yelpingSince) {
        this.businessId = businessId;
        this.userId = userId;
        this.stars = stars;
        this.date = date;
        this.text = text;
        this.useful = useful;
        this.funny = funny;
        this.cool = cool;
        this.userName = userName;
        this.reviewCount = reviewCount;
        this.yelpingSince = yelpingSince;
    }
}
