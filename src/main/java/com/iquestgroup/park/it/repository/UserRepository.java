package com.iquestgroup.park.it.repository;

import com.iquestgroup.park.it.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByName(String name);
}
