package com.edu.gdut.onlinemusic.Controller;

import com.edu.gdut.onlinemusic.Entity.Music;
import com.edu.gdut.onlinemusic.Entity.RecommendSong;
import com.edu.gdut.onlinemusic.Entity.Recommend_Music;
import com.edu.gdut.onlinemusic.Service.Recommend_MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Recommend_Music")
public class Recommend_MusicController {
    @Autowired
    private Recommend_MusicService service;

    @GetMapping("/findMusicByrid")
    public List<Music> findMusicByrid(String rid){
        return service.findMusicByrid(rid);
    }


}
