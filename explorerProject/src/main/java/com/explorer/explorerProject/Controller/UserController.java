package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/user/{userName}", method = RequestMethod.GET)
    public List<User> getUsersByName(@PathVariable("userName") String userName) {
        return userService.getUserByName(userName);
    }
}
