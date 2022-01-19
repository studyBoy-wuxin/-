package com.edu.gdut.onlinemusic.Service.Impl;

import com.edu.gdut.onlinemusic.Dao.BangDao;
import com.edu.gdut.onlinemusic.Dao.Bang_MusicDao;
import com.edu.gdut.onlinemusic.Dao.MusicDao;
import com.edu.gdut.onlinemusic.Entity.Bang;
import com.edu.gdut.onlinemusic.Entity.Music;
import com.edu.gdut.onlinemusic.Service.MusicService;
import com.edu.gdut.onlinemusic.util.RunPythonUtil;
import com.edu.gdut.onlinemusic.util.WriteFileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import redis.clients.jedis.Jedis;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MusicServiceImpl implements MusicService {
    @Autowired
    private MusicDao mDao;
    @Autowired
    private Bang_MusicDao bmDao;
    @Autowired
    private BangDao bDao;
    @Autowired
    private RunPythonUtil rpUtil;
    @Autowired
    private WriteFileUtil wfUtil;

    public Music findMusicByid(String mid){
        return mDao.findMusicByid(mid);
    }

    public List<Music> findMusicByName1(String name){
        List<Music> getMusicByName = mDao.findMusicByName(name);
        // 如果数据库中，查找的歌曲的数量少于10条，那么就调用python文件进行插入
        if(getMusicByName.size()<10){
            Jedis j = new Jedis("localhost", 6379);
            j.set("songName",name);
            rpUtil.startpy("E:\\pycharmProject\\酷我音乐\\原生代码\\kw_search.py");
            // 运行完 python程序之后，再次查找歌曲信息
            return mDao.findMusicByName(name);
        }else {
            return getMusicByName;
        }
    }

    public List<Music> findMusicByName(String name){
        List<Music> getMusicByName = mDao.findMusicByName(name);
        // 如果数据库中，查找的歌曲的数量少于10条，那么就调用python文件进行插入
        if(getMusicByName.size()<10){
            Jedis j = new Jedis("localhost", 6379);
            j.set("songName",name);
            rpUtil.startpy("E:\\pycharmProject\\酷我音乐\\原生代码\\kg_search.py");
            // 运行完 python程序之后，再次查找歌曲信息
            return mDao.findMusicByName(name);
        }else {
            return getMusicByName;
        }
    }

    public Object findMusicByBangidList(String BangidList){
        String [] result = BangidList.split(",");
        List<Object> list = new ArrayList<>();
        for(int a = 0;a<result.length;a++){
            Map<String,Object> map = new HashMap();
            // 先根据 bangid 获取到 Midlist 音乐id列表
            List<String> MidList = bmDao.findMidByBangid(result[a]);
            // 获取到榜的信息
            Bang bang = bDao.findBangByID(result[a]);
            // 再根据 Midlist 获取到 当前榜的所有 音乐信息
            List<Music> MusicList = mDao.findMusicByMidList(MidList);
            map.put("Bang",bang);
            map.put("MusicList",MusicList);
            list.add(map);
        }
        return list;
    }

    @Transactional
    public Integer updataAllMusicImg() {
        int a = 1;
        List<Music> musicList = mDao.findAllMusic();
        for (int i = 0; i < musicList.size(); i++) {
            String img_url = "http://localhost:8888/OnlineMusic/image/" + musicList.get(i).getName() + ".jpg";
            String mid = musicList.get(i).getMid();
            int b = mDao.updataMusicImg(img_url, mid);
            if(b==0){
                a=0;
            }
        }
        return a;
    }

}
