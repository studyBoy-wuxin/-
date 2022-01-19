package com.edu.gdut.onlinemusic.Entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class RecommendSong implements Serializable {
    private String rid;
    private String name;
    private String author;
    private String info;
    private Integer listencnt;
    private String img_url;

    public RecommendSong(){}

    public RecommendSong(String rid, String name, String author, String info, Integer listencnt, String img_url) {
        this.rid = rid;
        this.name = name;
        this.author = author;
        this.info = info;
        this.listencnt = listencnt;
        this.img_url = img_url;
    }
}
