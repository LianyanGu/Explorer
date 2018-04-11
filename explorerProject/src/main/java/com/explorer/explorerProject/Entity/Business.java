package com.explorer.explorerProject.Entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "business")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Business {

    @Id
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "neighborhood")
    private String neighborhood;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "postal_code")
    private String postalCode;

    @Column(name = "latitude")
    private Float latitude;

    @Column(name = "longitude")
    private Float longitude;

    @Column(name = "stars")
    private Float stars;

    @Column(name = "review_count")
    private int reviewCount;

    @Column(name = "is_open")
    private int isOpen;


    public Set<Tip> getTips() {
        return tips;
    }

    public void setTips(Set<Tip> tips) {
        this.tips = tips;
    }

    @OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "business")
    @JsonManagedReference
    private Set<Tip> tips = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL,
                fetch = FetchType.LAZY,
                mappedBy = "business")
    @JsonManagedReference
    private Set<ReviewView> reviewViews = new HashSet<>();

    public Set<ReviewView> getReviewViews() {
        return reviewViews;
    }

    public void setReviewViews(Set<ReviewView> reviewViews) {
        this.reviewViews = reviewViews;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

    public Float getStars() {
        return stars;
    }

    public void setStars(Float stars) {
        this.stars = stars;
    }

    public int getReviewCount() {
        return reviewCount;
    }

    public void setReviewCount(int reviewCount) {
        this.reviewCount = reviewCount;
    }

    public int getIsOpen() {
        return isOpen;
    }

    public void setIsOpen(int isOpen) {
        this.isOpen = isOpen;
    }

    public Business() {

    }

    public Business(String id, String name, String neighborhood, String address, String city, String state, String postalCode, Float latitude, Float longitude, Float stars, int reviewCount, int isOpen, Set<Tip> tips, Set<ReviewView> reviewViews) {
        this.id = id;
        this.name = name;
        this.neighborhood = neighborhood;
        this.address = address;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.latitude = latitude;
        this.longitude = longitude;
        this.stars = stars;
        this.reviewCount = reviewCount;
        this.isOpen = isOpen;
        this.tips = tips;
        this.reviewViews = reviewViews;
    }
}
