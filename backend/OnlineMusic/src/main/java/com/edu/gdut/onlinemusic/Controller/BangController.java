package com.edu.gdut.onlinemusic.Controller;

import com.edu.gdut.onlinemusic.Entity.Bang;
import com.edu.gdut.onlinemusic.Service.BangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Bang")
public class BangController {
    @Autowired
    private BangService service;

    @GetMapping("/findAllBang")
    public List<Bang> findAllBang(){
        return service.findAllBang();
    }
}
