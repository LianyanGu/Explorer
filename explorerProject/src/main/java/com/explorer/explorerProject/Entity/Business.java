package com.explorer.explorerProject.Entity;


import javax.persistence.Entity;
import java.util.List;

@Entity
public class Business {


//    @Field("business_id")
    private String businessId;

    private String name;
    private String neighborhood;
    private String address;
    private String city;
    private String state;
    private float latitude;
    private float longitude;
    private float stars;
    private int review_count;
    private int is_open;
    private List<String> categories;
    private BusinessHours hours;
    private Object attributes;
}
