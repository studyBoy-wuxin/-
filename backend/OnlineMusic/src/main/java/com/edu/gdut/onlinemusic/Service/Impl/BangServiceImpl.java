package com.edu.gdut.onlinemusic.Service.Impl;

import com.edu.gdut.onlinemusic.Dao.BangDao;
import com.edu.gdut.onlinemusic.Entity.Bang;
import com.edu.gdut.onlinemusic.Service.BangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BangServiceImpl implements BangService {
    @Autowired
    private BangDao bangdao;

    public List<Bang> findAllBang(){
        return bangdao.findAllBang();
    }
}
