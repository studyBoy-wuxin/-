package com.edu.gdut.onlinemusic.Service.Impl;

import com.edu.gdut.onlinemusic.Dao.Love_MusicDao;
import com.edu.gdut.onlinemusic.Dao.MusicDao;
import com.edu.gdut.onlinemusic.Entity.Music;
import com.edu.gdut.onlinemusic.Service.Love_MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class Love_MusicServiceImpl implements Love_MusicService {
    @Autowired
    private Love_MusicDao lmDao;
    @Autowired
    private MusicDao mDao;

    public int insertLoveMusic(String mid, String uid){
        return lmDao.insertLoveMusic(mid,uid);
    }

    public int removeLoveMusic(String mid, String uid){
        return lmDao.removeLoveMusic(mid,uid);
    }

    public List<Music> findLoveMusicByUid(String uid){
        Map<String,Object> map = new HashMap();
        // 首先 通过传递过来的 uid 找到对应收藏的MidList
        List<String> MidList = lmDao.findMidListByuid(uid);
        if(MidList.size()==0){
            return new ArrayList();
        }else{
            // 根据MidList 找到对应的歌曲信息
            List<Music> musicByMidList = mDao.findMusicByMidList(MidList);
            System.out.println(musicByMidList);
            return musicByMidList;
        }
    }

    public Integer findNumByUidAndMid(String mid, String uid){
        return lmDao.findNumByUidAndMid(mid,uid);
    }
}
