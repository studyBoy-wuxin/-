package com.edu.gdut.onlinemusic.Controller;

import com.edu.gdut.onlinemusic.Entity.Music;
import com.edu.gdut.onlinemusic.Service.Love_MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Love_Music")
public class Love_MusicController {

    @Autowired
    private Love_MusicService service;

    @GetMapping("/insertLoveMusic")
    public int insertLoveMusic(String mid,String uid){
        return service.insertLoveMusic(mid,uid);
    }

    @GetMapping("/removeLoveMusic")
    public int removeLoveMusic(String mid, String uid){
        return service.removeLoveMusic(mid,uid);
    }

    @GetMapping("/findLoveMusicByUid")
    public List<Music> findLoveMusicByUid(String uid){
        return service.findLoveMusicByUid(uid);
    }

    @GetMapping("/findNumByUidAndMid")
    public Integer findNumByUidAndMid(String mid, String uid){
        return service.findNumByUidAndMid(mid,uid);
    }
}
