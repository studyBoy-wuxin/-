package com.edu.gdut.onlinemusic.Entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class Banner implements Serializable {
    private Integer bid;
    private String url;

    public Banner(){}

    public Banner(Integer bid, String url) {
        this.bid = bid;
        this.url = url;
    }
}
