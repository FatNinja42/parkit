package com.iquestgroup.park.it.controller;

import com.iquestgroup.park.it.model.User;
import com.iquestgroup.park.it.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/user")
    public ResponseEntity<?> getUsers() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUser(name);
       return ResponseEntity.ok(user);
    }
}