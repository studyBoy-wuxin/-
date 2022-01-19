package com.edu.gdut.onlinemusic.Entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class User implements Serializable {
    // 用作登录的账号
    private String Uid;
    private String Uname;
    // 1:男 0:女
    private int sex;
    private String avater_url;
    private String Upassword;

    public User(){}

    public User(String uid, String uname, int sex, String avater_url, String upassword) {
        Uid = uid;
        Uname = uname;
        this.sex = sex;
        this.avater_url = avater_url;
        Upassword = upassword;
    }
}
