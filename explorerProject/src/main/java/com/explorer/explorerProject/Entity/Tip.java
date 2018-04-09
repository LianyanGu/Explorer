package com.explorer.explorerProject.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity(name = "Tip")
@Table(name = "tip")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Tip {
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

    public Tip() {

    }

    public Tip(String id, String userId, String businessId, String text, Date date, int likes) {
        this.id = id;
        this.userId = userId;
        this.businessId = businessId;
        this.text = text;
        this.date = date;
        this.likes = likes;
    }
}
