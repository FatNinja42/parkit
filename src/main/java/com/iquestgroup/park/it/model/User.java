package com.iquestgroup.park.it.model;

import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;

public class User {
    @Id
    private String id;

    private String name;
    private String password;
    private Date employmentDate;
    private boolean wantsParking;
    private Long parkingSpot;
    private Date passDay;
    private List<String> licensePlates;

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPasssword() {
        return password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getEmploymentDate() {
        return employmentDate;
    }

    public void setEmploymentDate(Date employmentDate) {
        this.employmentDate = employmentDate;
    }

    public boolean isWantsParking() {
        return wantsParking;
    }

    public void setWantsParking(boolean wantsParking) {
        this.wantsParking = wantsParking;
    }

    public Long getParkingSpot() {
        return parkingSpot;
    }

    public void setParkingSpot(Long parkingSpot) {
        this.parkingSpot = parkingSpot;
    }

    public Date getPassDay() {
        return passDay;
    }

    public void setPassDay(Date passDay) {
        this.passDay = passDay;
    }

    public List<String> getLicensePlates() {
        return licensePlates;
    }

    public void setLicensePlates(List<String> licensePlates) {
        this.licensePlates = licensePlates;
    }
}