package com.edu.gdut.onlinemusic.Service.Impl;

import com.edu.gdut.onlinemusic.Dao.UserDao;
import com.edu.gdut.onlinemusic.Entity.User;
import com.edu.gdut.onlinemusic.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao udao;

    public Object login(User u){
        Map<String,Object> map = new HashMap();
        User getUserByID = udao.findUserByID(u.getUid());
        System.out.println(getUserByID);
        if(getUserByID==null){
            map.put("code",400);
            map.put("mes","账号不存在");
        }else{
            if(u.getUpassword().equals(getUserByID.getUpassword())){
                map.put("code",200);
                map.put("mes","登录成功");
                map.put("user",getUserByID);
            }else{
                map.put("code",502);
                map.put("mes","密码错误");
            }
        }
        return map;
    }

    @Override
    public Integer updateUser(User u) {
        return udao.updateUser(u);
    }

    public Object fileUpload(MultipartFile file, String Uid, String fileName){
        Map<String,Object> map = new HashMap();
        if (file.isEmpty()) {
            map.put("code",400);
            map.put("mes","文件为空");
        }
        String filePath = "D:\\MusicInfo\\User_Avater\\"; // 上传后的路径
        try {
            File dest = new File(filePath + fileName);
            if (!dest.getParentFile().exists()) {
                dest.getParentFile().mkdirs();
            }
            file.transferTo(dest);
            String avater_url = "http://localhost:8888/OnlineMusic/User_Avater/"+fileName;
            int result = udao.updateUser(new User(Uid,null,-1,avater_url,null));
            map.put("code",200);
            map.put("mes",result>0?"上传成功":"上传失败");
            map.put("path",avater_url);
        } catch (Exception e) {
            map.put("code",200);
            map.put("mes",e.getMessage());
            e.printStackTrace();
        }
        return map;
    }

    public String register(User u){
        String id = "311900"+(int)(Math.random()*8999+1000);
        u.setAvater_url("http://localhost:8888/OnlineMusic/User_Avater/8466221.jpg");
        u.setUid(id);
        if(udao.register(u)>0){
            return id;
        }else{
            return "-1";
        }
    }

}
