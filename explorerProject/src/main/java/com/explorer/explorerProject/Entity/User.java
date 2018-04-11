package com.explorer.explorerProject.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "User")
@Table(name = "user")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class User {

    @Id
    public String id;

    @Column(name = "name")
    public String userName;

    @Column(name = "review_count")
    public int reviewCount;

    @Column(name = "yelping_since")
    public Date yelpingSince;

    @Column(name = "useful")
    public int useful;

    @Column(name = "funny")
    public int funny;

    @Column(name = "cool")
    public int cool;

    @Column(name = "fans")
    public int fans;

    @Column(name = "average_stars")
    public Float averageStars;

    @Column(name = "compliment_hot")
    public int complimentHot;

    @Column(name = "compliment_more")
    public int complimentMore;

    @Column(name = "compliment_profile")
    public int complimentProfile;

    @Column(name = "compliment_note")
    public int complimentNote;

    @Column(name = "compliment_plain")
    public int complimentPlain;

    @Column(name = "compliment_cool")
    public int complimentCool;

    @Column(name = "compliment_funny")
    public int complimentFunny;

    @Column(name = "compliment_writer")
    public int complimentWriter;

    @Column(name = "compliment_photos")
    public int complimentPhotos;

    @Column(name = "compliment_cute")
    public int complimentCute;

    @Column(name = "compliment_list")
    public int complimentList;

    @OneToMany(cascade = CascadeType.ALL,
                fetch = FetchType.LAZY,
                mappedBy = "user")
    @JsonManagedReference
    private Set<Tip> tips = new HashSet<>();


    public Set<Tip> getTips() {
        return tips;
    }

    public void setTips(Set<Tip> tips) {
        this.tips = tips;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public int getFans() {
        return fans;
    }

    public void setFans(int fans) {
        this.fans = fans;
    }

    public Float getAverageStars() {
        return averageStars;
    }

    public void setAverageStars(Float averageStars) {
        this.averageStars = averageStars;
    }

    public int getComplimentHot() {
        return complimentHot;
    }

    public void setComplimentHot(int complimentHot) {
        this.complimentHot = complimentHot;
    }

    public int getComplimentMore() {
        return complimentMore;
    }

    public void setComplimentMore(int complimentMore) {
        this.complimentMore = complimentMore;
    }

    public int getComplimentProfile() {
        return complimentProfile;
    }

    public void setComplimentProfile(int complimentProfile) {
        this.complimentProfile = complimentProfile;
    }

    public int getComplimentNote() {
        return complimentNote;
    }

    public void setComplimentNote(int complimentNote) {
        this.complimentNote = complimentNote;
    }

    public int getComplimentPlain() {
        return complimentPlain;
    }

    public void setComplimentPlain(int complimentPlain) {
        this.complimentPlain = complimentPlain;
    }

    public int getComplimentCool() {
        return complimentCool;
    }

    public void setComplimentCool(int complimentCool) {
        this.complimentCool = complimentCool;
    }

    public int getComplimentFunny() {
        return complimentFunny;
    }

    public void setComplimentFunny(int complimentFunny) {
        this.complimentFunny = complimentFunny;
    }

    public int getComplimentWriter() {
        return complimentWriter;
    }

    public void setComplimentWriter(int complimentWriter) {
        this.complimentWriter = complimentWriter;
    }

    public int getComplimentPhotos() {
        return complimentPhotos;
    }

    public void setComplimentPhotos(int complimentPhotos) {
        this.complimentPhotos = complimentPhotos;
    }

    public int getComplimentCute() {
        return complimentCute;
    }

    public void setComplimentCute(int complimentCute) {
        this.complimentCute = complimentCute;
    }

    public int getComplimentList() {
        return complimentList;
    }

    public void setComplimentList(int complimentList) {
        this.complimentList = complimentList;
    }


    public User(){}

    public User(String id, String userName, int reviewCount, Date yelpingSince, int useful, int funny, int cool, int fans, Float averageStars, int complimentHot, int complimentMore, int complimentProfile, int complimentNote, int complimentPlain, int complimentCool, int complimentFunny, int complimentWriter, int complimentPhotos, int complimentCute, int complimentList, Set<Tip> tips) {
        this.id = id;
        this.userName = userName;
        this.reviewCount = reviewCount;
        this.yelpingSince = yelpingSince;
        this.useful = useful;
        this.funny = funny;
        this.cool = cool;
        this.fans = fans;
        this.averageStars = averageStars;
        this.complimentHot = complimentHot;
        this.complimentMore = complimentMore;
        this.complimentProfile = complimentProfile;
        this.complimentNote = complimentNote;
        this.complimentPlain = complimentPlain;
        this.complimentCool = complimentCool;
        this.complimentFunny = complimentFunny;
        this.complimentWriter = complimentWriter;
        this.complimentPhotos = complimentPhotos;
        this.complimentCute = complimentCute;
        this.complimentList = complimentList;
        this.tips = tips;
    }
}
