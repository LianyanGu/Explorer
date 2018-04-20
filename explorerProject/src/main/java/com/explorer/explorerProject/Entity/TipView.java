package com.explorer.explorerProject.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Immutable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "tipview")
@Immutable
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class TipView {
    @Id
    private String id;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "business_id")
    private String businessId;

    @Column(name = "text")
    private String text;

    @Column(name = "date")
    private Date date;

    @Column(name = "likes")
    private int likes;

    @Column(name = "name")
    private String userName;

    @Column(name = "review_count")
    private int reviewCount;

    @Column(name = "yelping_since")
    public Date yelpingSince;

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

    public String getBusinessId() {
        return businessId;
    }

    public void setBusinessId(String businessId) {
        this.businessId = businessId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
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

    public TipView() {
    }

    public TipView(String userId, String businessId, String text, Date date, int likes, String userName,
                   int reviewCount, Date yelpingSince) {
        this.userId = userId;
        this.businessId = businessId;
        this.text = text;
        this.date = date;
        this.likes = likes;
        this.userName = userName;
        this.reviewCount = reviewCount;
        this.yelpingSince = yelpingSince;
    }
}
