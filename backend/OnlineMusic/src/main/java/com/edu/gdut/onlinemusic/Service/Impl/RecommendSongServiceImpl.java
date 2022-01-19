package com.edu.gdut.onlinemusic.Service.Impl;

import com.edu.gdut.onlinemusic.Dao.RecommendSongDao;
import com.edu.gdut.onlinemusic.Entity.Banner;
import com.edu.gdut.onlinemusic.Dao.BannerDao;
import com.edu.gdut.onlinemusic.Entity.RecommendSong;
import com.edu.gdut.onlinemusic.Service.RecommendSongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendSongServiceImpl implements RecommendSongService {
    @Autowired
    private RecommendSongDao rsDao;

    public List<RecommendSong> findAllRecommendSong(){
        return rsDao.findAllRecommendSong();
    }
}
