package com.edu.gdut.onlinemusic.Controller;

import com.edu.gdut.onlinemusic.Entity.Banner;
import com.edu.gdut.onlinemusic.Service.BannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Banner")
public class BannerController {
    @Autowired
    private BannerService service;

    @GetMapping("/findAllBanner")
    public List<Banner> findAllBanner(){
        return service.findAllBanner();
    }

}
