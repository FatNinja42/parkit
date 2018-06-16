package com.iquestgroup.park.it.model;

import org.springframework.data.annotation.Id;

public class User {
    @Id
    private String id;

    private String name;
    private String password;
    private String employmentDate;
    private boolean wantsParking;
    private String parkingSpot;

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

    public String getEmploymentDate() {
        return employmentDate;
    }

    public void setEmploymentDate(String employmentDate) {
        this.employmentDate = employmentDate;
    }

    public boolean isWantsParking() {
        return wantsParking;
    }

    public void setWantsParking(boolean wantsParking) {
        this.wantsParking = wantsParking;
    }

    public String getParkingSpot() {
        return parkingSpot;
    }

    public void setParkingSpot(String parkingSpot) {
        this.parkingSpot = parkingSpot;
    }
}
