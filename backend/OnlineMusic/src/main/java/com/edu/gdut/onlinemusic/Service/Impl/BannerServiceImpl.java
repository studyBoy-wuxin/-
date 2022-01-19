package com.edu.gdut.onlinemusic.Service.Impl;

import com.edu.gdut.onlinemusic.Entity.Banner;
import com.edu.gdut.onlinemusic.Dao.BannerDao;
import com.edu.gdut.onlinemusic.Service.BannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BannerServiceImpl implements BannerService {
    @Autowired
    private BannerDao bDao;

    public List<Banner> findAllBanner(){
        return bDao.findAllBanner();
    }
}
