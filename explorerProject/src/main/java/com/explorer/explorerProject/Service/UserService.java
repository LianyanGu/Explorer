package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Friend;
import com.explorer.explorerProject.Entity.ReviewView;
import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Repository.FriendRepository;
import com.explorer.explorerProject.Repository.ReviewViewRepository;
import com.explorer.explorerProject.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FriendRepository friendRepository;

    public List<User> getUserByName(String userName) {
        return userRepository.findByUserName(userName);
    }

    public User getUser(String id) {
        return userRepository.getOne(id);
    }

    public List<Friend> getFriendByUserId(String userId) {
        return friendRepository.findByUserId(userId);
    }

}
