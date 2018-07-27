package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.Friend;
import com.explorer.explorerProject.Entity.ReviewView;
import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Repository.FriendRepository;
import com.explorer.explorerProject.Repository.ReviewViewRepository;
import com.explorer.explorerProject.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FriendRepository friendRepository;

    public List<User> getUserByName(String userName) {
        return userRepository.findByUserName(userName);
    }

    public User getUser(String id) throws EntityNotFoundException {
        return userRepository.getOne(id);
    }

    public List<Friend> getFriendByUserId(String userId) {
        return friendRepository.findByUserId(userId);
    }

//    public Set<String> getAllUserId() {
//        Set<String> userIds = new HashSet<>();
//        List<User> users = userRepository.findAll();
//        for (int i = 0; i < users.size(); i++) {
//            userIds.add(users.get(i).id);
//        }
//        return userIds;
//    }

//    public boolean userExists(String userId) {
//        if (getAllUserId().contains(userId)) return true;
//        return false;
//    }

}
