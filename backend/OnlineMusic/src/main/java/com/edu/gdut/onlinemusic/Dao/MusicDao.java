package com.edu.gdut.onlinemusic.Dao;

import com.edu.gdut.onlinemusic.Entity.Music;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MusicDao {

    Music findMusicByid(String mid);

    List<Music> findMusicByName(String name);

    Music findMusicByNameExact(@Param("name") String name,@Param("artist")String artist);

    List<Music> findMusicByMidList(List<String> MidList);

    List<Music> findMusicByMid(String mid);

    Integer updataMusicImg(@Param("img_url")String a,@Param("mid")String mid);

    List<Music> findAllMusic();

    int insertMusic(Music m);
}
