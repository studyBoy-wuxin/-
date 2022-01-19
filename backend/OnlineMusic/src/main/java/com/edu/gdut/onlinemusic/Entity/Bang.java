package com.edu.gdut.onlinemusic.Entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class Bang implements Serializable {
    private String id;
    private String name;
    private String img_url;

    public Bang(){}

    public Bang(String id, String name, String img_url) {
        this.id = id;
        this.name = name;
        this.img_url = img_url;
    }
}
