package com.edu.gdut.onlinemusic.Controller;

import com.edu.gdut.onlinemusic.Entity.Music;
import com.edu.gdut.onlinemusic.Service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Music")
public class MusicController {
    @Autowired
    private MusicService service;


    @GetMapping("/findMusicByid")
    public Music findMusicByid(String mid){
        return service.findMusicByid(mid);
    }

    @GetMapping("/findMusicByName")
    public List<Music> findMusicByName(String name){
        return service.findMusicByName(name);
    }

    @GetMapping("/findMusicByBangidList")
    public Object findMusicByBangidList(String BangidList){
        return service.findMusicByBangidList(BangidList);
    }

    @GetMapping("/updataAllMusicImg")
    public Integer updataAllMusicImg(){
        return service.updataAllMusicImg();
    }

}
