package com.explorer.explorerProject.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Date;

@Entity(name = "Tip")
@Table(name = "tip")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Tip {
    @Id
    private String id;

    @Column(name = "text")
    private String text;

    @Column(name = "date")
    private Date date;

    @Column(name = "likes")
    private int likes;

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "business_Id", nullable = false)
    @JsonBackReference
    private Business business;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    public Tip(String id, String text, Date date, int likes, User user, Business business) {
        this.id = id;
        this.text = text;
        this.date = date;
        this.likes = likes;
        this.user = user;
        this.business = business;
    }
}
