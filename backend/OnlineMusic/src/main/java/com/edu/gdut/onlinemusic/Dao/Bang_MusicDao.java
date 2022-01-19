package com.edu.gdut.onlinemusic.Dao;

import com.edu.gdut.onlinemusic.Entity.Bang_Music;

import java.util.List;

public interface Bang_MusicDao {
    List<String> findMidByBangidList(List<String> bangid);

    List<String> findMidByBangid(String bangid);
}
