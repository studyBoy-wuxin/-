package com.edu.gdut.onlinemusic.Service;

import com.edu.gdut.onlinemusic.Entity.Music;

import java.util.List;

public interface MusicService {

    Music findMusicByid(String mid);

    List<Music> findMusicByName(String name);

    Object findMusicByBangidList(String BangidList);

    Integer updataAllMusicImg();
}
