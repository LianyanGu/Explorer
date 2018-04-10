package com.explorer.explorerProject.Service;

import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getUserByName(String userName) {
        return userRepository.findByUserName(userName);
    }
}
