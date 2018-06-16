package com.iquestgroup.park.it.repository;

import com.iquestgroup.park.it.dto.UserDTO;
import com.iquestgroup.park.it.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserDTO, String> {
    UserDTO findByName(String name);
}
