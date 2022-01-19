package com.edu.gdut.onlinemusic.Service.Impl;

import com.edu.gdut.onlinemusic.Dao.Bang_MusicDao;
import com.edu.gdut.onlinemusic.Entity.Bang_Music;
import com.edu.gdut.onlinemusic.Service.Bang_MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Bang_MusicServiceImpl implements Bang_MusicService {
    @Autowired
    private Bang_MusicDao bmDao;



}
