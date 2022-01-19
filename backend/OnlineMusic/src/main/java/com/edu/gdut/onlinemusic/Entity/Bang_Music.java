package com.edu.gdut.onlinemusic.Entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class Bang_Music implements Serializable {
    private Integer id;
    private String bangid;
    private String mid;

    public Bang_Music(){}

    public Bang_Music(Integer id, String bangid, String mid) {
        this.id = id;
        this.bangid = bangid;
        this.mid = mid;
    }
}
