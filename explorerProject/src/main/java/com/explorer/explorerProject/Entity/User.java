package com.explorer.explorerProject.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class User {
    public String user_id;
    public String name;
    public String yelping_since;
    public List<String> friends;
    public List<Integer> elite;
    public int review_count;
    public int useful;
    public int funny;
    public int cool;
    public int fans;
    public int compliment_hot;
    public int compliment_more;
    public int compliment_profile;
    public int compliment_note;
    public int compliment_plain;
    public int compliment_cool;
    public int compliment_funny;
    public int compliment_writer;
    public int compliment_photos;
    public int compliment_cute;
    public int compliment_list;
    public float average_stars;

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getYelping_since() {
        return yelping_since;
    }

    public void setYelping_since(String yelping_since) {
        this.yelping_since = yelping_since;
    }

    public List<String> getFriends() {
        return friends;
    }

    public void setFriends(List<String> friends) {
        this.friends = friends;
    }

    public List<Integer> getElite() {
        return elite;
    }

    public void setElite(List<Integer> elite) {
        this.elite = elite;
    }

    public int getReview_count() {
        return review_count;
    }

    public void setReview_count(int review_count) {
        this.review_count = review_count;
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

    public int getCompliment_hot() {
        return compliment_hot;
    }

    public void setCompliment_hot(int compliment_hot) {
        this.compliment_hot = compliment_hot;
    }

    public int getCompliment_more() {
        return compliment_more;
    }

    public void setCompliment_more(int compliment_more) {
        this.compliment_more = compliment_more;
    }

    public int getCompliment_profile() {
        return compliment_profile;
    }

    public void setCompliment_profile(int compliment_profile) {
        this.compliment_profile = compliment_profile;
    }

    public int getCompliment_note() {
        return compliment_note;
    }

    public void setCompliment_note(int compliment_note) {
        this.compliment_note = compliment_note;
    }

    public int getCompliment_plain() {
        return compliment_plain;
    }

    public void setCompliment_plain(int compliment_plain) {
        this.compliment_plain = compliment_plain;
    }

    public int getCompliment_cool() {
        return compliment_cool;
    }

    public void setCompliment_cool(int compliment_cool) {
        this.compliment_cool = compliment_cool;
    }

    public int getCompliment_funny() {
        return compliment_funny;
    }

    public void setCompliment_funny(int compliment_funny) {
        this.compliment_funny = compliment_funny;
    }

    public int getCompliment_writer() {
        return compliment_writer;
    }

    public void setCompliment_writer(int compliment_writer) {
        this.compliment_writer = compliment_writer;
    }

    public int getCompliment_photos() {
        return compliment_photos;
    }

    public void setCompliment_photos(int compliment_photos) {
        this.compliment_photos = compliment_photos;
    }

    public int getCompliment_cute() {
        return compliment_cute;
    }

    public void setCompliment_cute(int compliment_cute) {
        this.compliment_cute = compliment_cute;
    }

    public int getCompliment_list() {
        return compliment_list;
    }

    public void setCompliment_list(int compliment_list) {
        this.compliment_list = compliment_list;
    }

    public float getAverage_stars() {
        return average_stars;
    }

    public void setAverage_stars(float average_stars) {
        this.average_stars = average_stars;
    }
}
