package com.explorer.explorerProject.Controller;

import com.explorer.explorerProject.Entity.Friend;
import com.explorer.explorerProject.Entity.Review;
import com.explorer.explorerProject.Entity.ReviewView;
import com.explorer.explorerProject.Entity.User;
import com.explorer.explorerProject.Service.UserService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpUtils;
import java.util.List;

@CrossOrigin("*")
@RestController
@JsonIgnoreProperties
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> getUser(@PathVariable("id") String id) {
        User user;
        try {
            user = userService.getUser(id);
//            System.out.println("no exception");
        } catch (HttpMessageNotWritableException e) {
//            System.out.println("found exception");
            return new ResponseEntity<String>(e.toString(), HttpStatus.NOT_FOUND);
        }
//        System.out.println("out");
        return new ResponseEntity<User>(user, HttpStatus.OK);
//        boolean userExist = userService.userExists(id);
//        if (userExist) {
//            User user = userService.getUser(id);
//            return new ResponseEntity<User>(user, HttpStatus.OK);
//        }
//        return new ResponseEntity<String>("Cannot Find User", HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/friends/{userId}", method = RequestMethod.GET)
    @ResponseBody
    public List<Friend> getFriends(@PathVariable("userId") String userId) {
        return userService.getFriendByUserId(userId);
    }

}
