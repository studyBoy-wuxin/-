package com.edu.gdut.onlinemusic.Entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class Love_Music implements Serializable {
    private Integer id;
    private String mid;
    private String uid;

    public Love_Music(){}

    public Love_Music(Integer id, String mid, String uid) {
        this.id = id;
        this.mid = mid;
        this.uid = uid;
    }
}
