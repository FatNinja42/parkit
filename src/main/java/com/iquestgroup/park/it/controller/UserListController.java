package com.iquestgroup.park.it.controller;

import com.iquestgroup.park.it.model.User;
import com.iquestgroup.park.it.model.UserListElement;
import com.iquestgroup.park.it.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserListController {
    @Autowired
    private UserService userService;

    @RequestMapping("/userList")
    public ResponseEntity<?> getUsers() {
        List<UserListElement> users = userService.getSimplifiedUserList();
        return ResponseEntity.ok(users);
    }

}
