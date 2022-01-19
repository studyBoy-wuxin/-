package com.edu.gdut.onlinemusic.Dao;

import com.edu.gdut.onlinemusic.Entity.Recommend_Music;

import java.util.List;

public interface Recommend_MusicDao {
    List<String> findMidByrid(String rid);
}
