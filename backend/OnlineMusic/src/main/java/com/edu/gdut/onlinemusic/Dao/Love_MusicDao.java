package com.edu.gdut.onlinemusic.Dao;

import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface Love_MusicDao {
    List<String> findMidListByuid(String uid);

    int insertLoveMusic(@Param("mid") String mid,@Param("uid") String uid);

    int removeLoveMusic(@Param("mid") String mid,@Param("uid") String uid);

    int findNumByUidAndMid(@Param("mid") String mid,@Param("uid") String uid);
}
