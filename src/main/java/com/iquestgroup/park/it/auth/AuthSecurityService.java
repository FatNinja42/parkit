package com.iquestgroup.park.it.auth;

import com.iquestgroup.park.it.model.User;
import com.iquestgroup.park.it.repository.UserRepository;
import com.iquestgroup.park.it.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class AuthSecurityService implements UserDetailsService {
    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       User user = userService.getUser(username);

        if(user == null){
            throw new UsernameNotFoundException(username);
        }else{
            UserDetails details = new AuthenticationDetails(user);
            return details;
        }
    }
}
