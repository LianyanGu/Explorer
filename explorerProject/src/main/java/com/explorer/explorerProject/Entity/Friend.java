package com.explorer.explorerProject.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "Friend")
@Table(name = "friend")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Friend {
    @Id
    private String id;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "friend_id")
    private String friendId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getfriendId() {
        return friendId;
    }

    public void setfriendId(String friendId) {
        this.friendId = friendId;
    }

    public Friend() {
    }

    public Friend(String userId, String friendId) {
        this.userId = userId;
        this.friendId = friendId;
    }
}
