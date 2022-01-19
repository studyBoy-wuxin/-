package com.edu.gdut.onlinemusic.Service;

import com.edu.gdut.onlinemusic.Entity.Music;

import java.util.List;

public interface Love_MusicService {
    int insertLoveMusic(String mid, String uid);

    int removeLoveMusic(String mid, String uid);

    List<Music> findLoveMusicByUid(String uid);

    Integer findNumByUidAndMid(String mid, String uid);
}
