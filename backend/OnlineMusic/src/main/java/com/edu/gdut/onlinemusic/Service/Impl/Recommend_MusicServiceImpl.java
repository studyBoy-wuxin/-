package com.edu.gdut.onlinemusic.Service.Impl;

import com.edu.gdut.onlinemusic.Dao.MusicDao;
import com.edu.gdut.onlinemusic.Dao.Recommend_MusicDao;
import com.edu.gdut.onlinemusic.Entity.Music;
import com.edu.gdut.onlinemusic.Entity.Recommend_Music;
import com.edu.gdut.onlinemusic.Service.Recommend_MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class Recommend_MusicServiceImpl implements Recommend_MusicService {
    @Autowired
    private Recommend_MusicDao rmdao;
    @Autowired
    private MusicDao mdao;

    public List<Music> findMusicByrid(String rid){
        Map<String,Object> map = new HashMap();
        // 先根据 rid(推荐歌单) 获取到 midlist
        List<String> MidList = rmdao.findMidByrid(rid);
        // 根据 MidList 获取到所有的歌曲
        List<Music> musicList = mdao.findMusicByMidList(MidList);

        return musicList;
    }
}
