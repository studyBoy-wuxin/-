package com.edu.gdut.onlinemusic.Controller;

import com.edu.gdut.onlinemusic.Entity.User;
import com.edu.gdut.onlinemusic.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/User")
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping("/login")
    public Object login(User u){
        return service.login(u);
    }

    @PostMapping("/updateUser")
    public Integer updateUser(User u){
        return service.updateUser(u);
    }

    @PostMapping("/fileUpload")
    public Object fileUpload(MultipartFile file,String Uid,String fileName){
        return service.fileUpload(file,Uid,fileName);
    }

    @PostMapping("/register")
    public String register(User u){
        System.out.println(u);
        return service.register(u);
    }
}
