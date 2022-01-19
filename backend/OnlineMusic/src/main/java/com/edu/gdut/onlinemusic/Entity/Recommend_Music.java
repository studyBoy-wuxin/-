package com.edu.gdut.onlinemusic.Entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class Recommend_Music implements Serializable {
    private String rmid;
    private String mid;
    private String rid;

    public Recommend_Music(){}

    public Recommend_Music(String rmid, String mid, String rid) {
        this.rmid = rmid;
        this.mid = mid;
        this.rid = rid;
    }
}
