package com.explorer.explorerProject.Entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity(name = "Review")
@Table(name = "review")
public class Review {
    @Id
    private String id;

    @Column(name = "business_id")
    private String businessId;

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

}
