package com.edu.gdut.onlinemusic.Dao;

import com.edu.gdut.onlinemusic.Entity.User;

public interface UserDao {

    User findUserByID(String id);

    Integer updateUser(User u);

    int register(User u);
}
