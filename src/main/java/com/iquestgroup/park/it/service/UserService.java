package com.iquestgroup.park.it.service;

import com.iquestgroup.park.it.model.User;
import com.iquestgroup.park.it.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
    public void deleteAll() {
        repository.deleteAll();
    }

    public User addUser(User user) {
        return repository.insert(user);
    }

    public User getUser(String name) {
        return repository.findByName(name);
    }

    public List<User> findAll() {
        return repository.findAll();
    }
}
