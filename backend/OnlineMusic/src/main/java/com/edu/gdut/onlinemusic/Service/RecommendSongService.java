package com.edu.gdut.onlinemusic.Service;

import com.edu.gdut.onlinemusic.Entity.Banner;
import com.edu.gdut.onlinemusic.Entity.RecommendSong;

import java.util.List;

public interface RecommendSongService {
    List<RecommendSong> findAllRecommendSong();
}
