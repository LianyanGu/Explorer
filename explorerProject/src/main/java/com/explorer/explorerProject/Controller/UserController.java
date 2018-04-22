package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Friend;
import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

//    @RequestMapping(value = "/user/{userName}", method = RequestMethod.GET)
//    @ResponseBody
//    public List<User> getUsersByName(@PathVariable("userName") String userName) {
//        return userService.getUserByName(userName);
//    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    @ResponseBody
    public User getUser(@PathVariable("id") String id) {
        return userService.getUser(id);
    }

    @RequestMapping(value = "/friends/{userId}", method = RequestMethod.GET)
    @ResponseBody
    public List<Friend> getFriends(@PathVariable("userId") String userId) {
        return userService.getFriendByUserId(userId);
    }
}
