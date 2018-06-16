package com.iquestgroup.park.it.converters;

import com.iquestgroup.park.it.dto.UserDTO;
import com.iquestgroup.park.it.model.User;
import com.iquestgroup.park.it.utils.DateUtils;

public class UserConverter {
    public static User convertFromDto(UserDTO source) {
        User user = new User(source.getName(), source.getPassword());
        user.setEmploymentDate(DateUtils.fromDate(source.getEmploymentDate()));
        user.setLicensePlates(source.getLicensePlates());
        user.setId(source.getId());
        user.setWantsParking(source.isWantsParking());
        user.setParkingSpot(source.getParkingSpot());
        user.setPhoneNumber(source.getPhoneNumber());
        user.setPassDay(DateUtils.fromDate(source.getPassDay()));
        return user;
    }

    public static UserDTO convertToDto(User source) {
        UserDTO user = new UserDTO(source.getName(), source.getPassword());
        user.setEmploymentDate(DateUtils.fromStringSpecification(source.getEmploymentDate()));
        user.setLicensePlates(source.getLicensePlates());
        user.setId(source.getId());
        user.setPassDay(DateUtils.fromStringSpecification(source.getPassDay()));
        user.setWantsParking(source.isWantsParking());
        user.setParkingSpot(source.getParkingSpot());
        user.setPhoneNumber(source.getPhoneNumber());
        return user;
    }

}
