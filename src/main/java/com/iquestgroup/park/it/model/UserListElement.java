package com.iquestgroup.park.it.model;

import org.springframework.data.annotation.Id;

import java.util.List;

public class UserListElement {

    private String id;
    private String name;
    private Long parkingSpot;
    private String phoneNumber;
    private List<String> licensePlates;

    public UserListElement(){
    }
    public UserListElement withId(String id){
        this.id = id;
        return this;
    }
    public UserListElement withName(String name) {
        this.name = name;
        return this;
    }

    public UserListElement withParkingNumber(Long parkingSpot) {
        this.parkingSpot = parkingSpot;
        return this;
    }

    public UserListElement withLicensePlates(List<String> licensePlates) {
        this.licensePlates = licensePlates;
        return this;
    }
    public UserListElement withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getParkingSpot() {
        return parkingSpot;
    }

    public void setParkingSpot(Long parkingSpot) {
        this.parkingSpot = parkingSpot;
    }

    public List<String> getLicensePlates() {
        return licensePlates;
    }

    public void setLicensePlates(List<String> licensePlates) {
        this.licensePlates = licensePlates;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "UserListElement{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", parkingSpot=" + parkingSpot +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", licensePlates=" + licensePlates +
                '}';
    }
}
