package com.iquestgroup.park.it.controller;

import com.iquestgroup.park.it.model.User;
import com.iquestgroup.park.it.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;;
import org.springframework.web.bind.annotation.RequestMethod;
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

    @RequestMapping(value = "/requestParking", method = RequestMethod.POST)
    public ResponseEntity<?> requestParking (String userId) {
        User user = userService.getUserById(userId);
        user.setWantsParking(true);
        userService.update(user);

        return ResponseEntity.ok(user);
    }

    @RequestMapping(value = "/giveUpParking", method = RequestMethod.POST)
    public ResponseEntity<?> giveUpParking (String userId) {
        User user = userService.getUserById(userId);
        user.setWantsParking(false);
        userService.update(user);

        return ResponseEntity.ok(user);
    }

    @RequestMapping(value = "/passDay", method = RequestMethod.POST)
    public ResponseEntity<?> giveUpParking (String id, String passDayDate ) {
        User user = userService.getUserById(id);
        user.setPassDay(passDayDate);
        userService.update(user);

        return ResponseEntity.ok(user);
    }
}
