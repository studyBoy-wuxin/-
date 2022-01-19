package com.edu.gdut.onlinemusic.Dao;

import com.edu.gdut.onlinemusic.Entity.Bang;

import java.util.List;

public interface BangDao {

    List<Bang> findAllBang();

    Bang findBangByID(String BangID);
}
