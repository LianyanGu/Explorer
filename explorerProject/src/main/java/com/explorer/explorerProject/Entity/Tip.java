package com.explorer.explorerProject.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity(name = "Tip")
@Table(name = "tip")
public class Tip {
    @Id
    private String id;

    private String user_id;
    private String business_id;
    private String text;
    private Date date;
    private int likes;
}
