package com.iquestgroup.park.it.converters;

import com.iquestgroup.park.it.dto.UserDTO;
import com.iquestgroup.park.it.model.User;

public class UserConverter {
    public static User convertFromDto(UserDTO source) {
        User user = new User(source.getName(), source.getPassword());
        user.setEmploymentDate(source.getEmploymentDate());
        user.setLicensePlates(source.getLicensePlates());
        user.setId(source.getId());
        user.setPassDay(source.getPassDay());
        user.setWantsParking(source.isWantsParking());
        user.setParkingSpot(source.getParkingSpot());

        return user;
    }

    public static UserDTO convertToDto(User source) {
        UserDTO user = new UserDTO(source.getName(), source.getPassword());
        user.setEmploymentDate(source.getEmploymentDate());
        user.setLicensePlates(source.getLicensePlates());
        user.setId(source.getId());
        user.setPassDay(source.getPassDay());
        user.setWantsParking(source.isWantsParking());
        user.setParkingSpot(source.getParkingSpot());
        return user;
    }

}
