package com.explorer.explorerProject.Entity;

public class Review {
//    @Indexed(unique = true)
    private String review_id;
    private String user_id;

//    @Field("business_id")
    private String businessId;
    private int stars;
    private String date;
    private String text;
    private int useful;
    private int funny;
    private int cool;

}
