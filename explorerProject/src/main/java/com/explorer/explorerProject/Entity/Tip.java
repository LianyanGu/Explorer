package com.explorer.explorerProject.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity(name = "Tip")
@Table(name = "tip")
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
}
