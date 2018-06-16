package com.iquestgroup.park.it.service;

import com.iquestgroup.park.it.converters.UserConverter;
import com.iquestgroup.park.it.dto.UserDTO;
import com.iquestgroup.park.it.model.User;
import com.iquestgroup.park.it.model.UserListElement;
import com.iquestgroup.park.it.model.VacantionItem;
import com.iquestgroup.park.it.repository.UserRepository;
import com.iquestgroup.park.it.utils.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {

    private UserRepository repository;
    private BCryptPasswordEncoder encoder;

    @Autowired
    public UserService(UserRepository repository, BCryptPasswordEncoder encoder) {
        this.repository = repository;
        this.encoder = encoder;
    }
    public void deleteAll() {
        repository.deleteAll();
    }

    public UserDTO addUser(User user) {
        UserDTO userDTO = UserConverter.convertToDto(user);
        return repository.insert(userDTO);
    }

    public User getUser(String name) {
        UserDTO userDTO = repository.findByName(name);
        return UserConverter.convertFromDto(userDTO);
    }

    public User getUserById(String id) {
        Optional userDTO = repository.findById(id);
        return UserConverter.convertFromDto((UserDTO) userDTO.get());
    }

    public List<User> findAll() {
        List<User> users = new ArrayList<>();
        List<UserDTO> userDTO =  repository.findAll();
        userDTO.forEach(u -> users.add(UserConverter.convertFromDto(u)));
        return users;
    }

    public List<UserListElement> getSimplifiedUserList() {
        List<User> users = new ArrayList<>();
        List<UserDTO> userDTO =  repository.findAll();
        sortUserDtos(userDTO);
        userDTO.forEach(u -> users.add(UserConverter.convertFromDto(u)));
        List<UserListElement> simplifiedUserList = new ArrayList<>();
        users.forEach(u -> simplifiedUserList.add(
                new UserListElement()
                .withId(u.getId())
                .withLicensePlates(u.getLicensePlates())
                .withName(u.getName())
                .withParkingNumber(u.getParkingSpot())
                .withPhoneNumber(u.getPhoneNumber())

        ));
        return simplifiedUserList;
    }

    public void addRandomUsers() {
        List<String> usernameAndPasswords = new ArrayList<>();
        List<Date> employments = new ArrayList<>();
        List<VacantionItem> vacantions = new ArrayList<>();
        Collections.addAll( usernameAndPasswords, "admin",
                "john", "mary", "adam", "gabi", "lily", "darius", "david", "vale", "susan", "dora");
        Collections.addAll(employments, DateUtils.fromStringSpecification("22/02/2000"),
                DateUtils.fromStringSpecification("22/02/2004"),
                DateUtils.fromStringSpecification("23/02/2004"),
                DateUtils.fromStringSpecification("22/05/2009"),
                DateUtils.fromStringSpecification("02/06/2001"),
                DateUtils.fromStringSpecification("22/02/2014"),
                DateUtils.fromStringSpecification("22/02/2016"),
                DateUtils.fromStringSpecification("22/02/2017"),
                DateUtils.fromStringSpecification("22/02/2018"),
                DateUtils.fromStringSpecification("22/03/2018"),
                DateUtils.fromStringSpecification("22/02/2014"));

        Collections.addAll(vacantions,
                createVacantionItem("02/06/2004", "04/06/2018"),
                createVacantionItem("02/06/2004", "04/06/2018"),
                createVacantionItem("02/04/2004", "04/05/2018"),
                createVacantionItem("30/06/2004", "30/07/2018"),
                createVacantionItem("02/06/2004", "03/07/2018"),
                createVacantionItem("02/06/2004", "04/06/2018"),
                createVacantionItem("02/06/2004", "04/06/2018"),
                createVacantionItem("02/06/2004", "04/06/2018"),
                createVacantionItem("02/06/2004", "04/06/2018"),
                createVacantionItem("02/06/2004", "04/06/2018"),
                createVacantionItem("02/06/2004", "04/06/2018")
        );

        for(int i = 0; i<11 ;i++) {
            UserDTO userDTO = new UserDTO(usernameAndPasswords.get(i), encoder.encode(usernameAndPasswords.get(i)));
            userDTO.setEmploymentDate(employments.get(i));
            userDTO.setVacantionItems(Collections.singletonList(vacantions.get(i)));
            userDTO.setParkingSpot(i + 1L);
            userDTO.setPhoneNumber("0733 000 00" + i%10);
            userDTO.setPassDay(Calendar.getInstance().getTime());
            userDTO.setWantsParking(i % 2 == 0);
            userDTO.setLicensePlates(Arrays.asList("CJ 0" +i +" ASD", "B "+i+"0 QWE"));
            repository.insert(userDTO);
        }

    }

    private VacantionItem createVacantionItem(String startDate, String endDate) {
        return new VacantionItem(DateUtils.fromStringSpecification(startDate),
                DateUtils.fromStringSpecification(endDate));
    }

    private void sortUserDtos(List<UserDTO> userDTOS){
        userDTOS.sort((o1, o2) -> {
            if(o1.getEmploymentDate() == null || o2.getEmploymentDate() == null) {
                return 0;
            } else {
                return o1.getEmploymentDate().compareTo(o2.getEmploymentDate());
            }
        });
    }

    public void update(User user) {
        repository.save(UserConverter.convertToDto(user));
    }
}
