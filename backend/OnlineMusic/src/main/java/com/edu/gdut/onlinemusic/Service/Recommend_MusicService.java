package com.edu.gdut.onlinemusic.Service;

import com.edu.gdut.onlinemusic.Entity.Music;
import com.edu.gdut.onlinemusic.Entity.Recommend_Music;

import java.util.List;

public interface Recommend_MusicService {

    List<Music> findMusicByrid(String rid);
}
