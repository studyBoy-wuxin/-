package com.edu.gdut.onlinemusic.Controller;

import com.edu.gdut.onlinemusic.Entity.RecommendSong;
import com.edu.gdut.onlinemusic.Service.BannerService;
import com.edu.gdut.onlinemusic.Service.RecommendSongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/RecommendSong")
public class RecommendSongController {
    @Autowired
    private RecommendSongService service;

    @GetMapping("/findAllRecommendSong")
    public List<RecommendSong> findAllRecommendSong(){
        return service.findAllRecommendSong();
    }



}
