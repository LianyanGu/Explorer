package com.explorer.explorerProject.Entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity(name = "Review")
@Table(name = "review")
public class Review {
    @Id
    private String id;

    private String business_id;
    private String user_id;

    private int stars;

    //Can change Date
    private Date date;

    private String text;
    private int useful;
    private int funny;
    private int cool;

}
