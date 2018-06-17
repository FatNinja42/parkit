package com.iquestgroup.park.it.utils;

import java.text.DateFormat;
import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class DateUtils {
    public static Date fromStringSpecification(String dateSpecification) {
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
        Date date = null;
        try {
            date = df.parse(dateSpecification);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }

    public static String fromDate(Date date) {
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
        String formatedDate = "";
        if(date != null) {
            formatedDate = df.format(date);
        }
        return formatedDate;
    }
}
