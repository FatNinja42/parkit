package com.iquestgroup.park.it.model;

import java.util.Date;

public class VacantionItem {
    private Date startDate;
    private Date endDate;

    public VacantionItem(Date startDate, Date endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        return "VacantionItem{" +
                "startDate=" + startDate +
                ", endDate=" + endDate +
                '}';
    }
}
