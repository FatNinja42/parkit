package com.iquestgroup.park.it.service;

import com.iquestgroup.park.it.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserListCronService {

    @Autowired
    UserService userService;

    @Scheduled(cron = "0 0 0 1/1 * *")
    public void resetPassday() {
        List<User> userList = userService.findAll();
        userList.forEach(u -> u.setPassDay(null));
        userList.forEach(u -> userService.update(u));
    }
}
