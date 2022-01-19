package com.edu.gdut.onlinemusic.Dao;

import com.edu.gdut.onlinemusic.Entity.RecommendSong;

import java.util.List;

public interface RecommendSongDao {

    List<RecommendSong> findAllRecommendSong();
}
