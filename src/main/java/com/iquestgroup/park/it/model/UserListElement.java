package com.iquestgroup.park.it.model;

import org.springframework.data.annotation.Id;

import java.util.List;

public class UserListElement {

    private String id;
    private String name;
    private Long parkingNumber;
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

    public UserListElement withParkingNumber(Long parkingNumber) {
        this.parkingNumber = parkingNumber;
        return this;
    }

    public UserListElement withLicensePlates(List<String> licensePlates) {
        this.licensePlates = licensePlates;
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

    public Long getParkingNumber() {
        return parkingNumber;
    }

    public void setParkingNumber(Long parkingNumber) {
        this.parkingNumber = parkingNumber;
    }

    public List<String> getLicensePlates() {
        return licensePlates;
    }

    public void setLicensePlates(List<String> licensePlates) {
        this.licensePlates = licensePlates;
    }

    @Override
    public String toString() {
        return "UserListElement{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", parkingNumber=" + parkingNumber +
                ", licensePlates=" + licensePlates +
                '}';
    }
}
