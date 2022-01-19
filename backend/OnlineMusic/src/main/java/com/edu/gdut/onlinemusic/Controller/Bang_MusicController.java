package com.edu.gdut.onlinemusic.Controller;

import com.edu.gdut.onlinemusic.Entity.Bang_Music;
import com.edu.gdut.onlinemusic.Service.Bang_MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/Bang_Music")
public class Bang_MusicController {
    @Autowired
    private Bang_MusicService service;


}
