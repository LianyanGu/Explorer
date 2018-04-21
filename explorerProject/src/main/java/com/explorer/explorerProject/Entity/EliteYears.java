package com.explorer.explorerProject.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity(name = "EliteYears")
@Table(name = "elite_years")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class EliteYears {
    @Id
    private String id;

    @Column(name = "year")
    private String year;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonBackReference
    private User user;

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

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public EliteYears() {
    }

    public EliteYears(String year, User user) {
        this.year = year;
        this.user = user;
    }
}
