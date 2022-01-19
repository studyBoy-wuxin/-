package com.edu.gdut.onlinemusic.Service;

import com.edu.gdut.onlinemusic.Entity.User;
import org.springframework.web.multipart.MultipartFile;

public interface UserService {

    Object login(User u);

    Integer updateUser(User u);

    Object fileUpload(MultipartFile file, String Uid, String fileName);

    String register(User u);
}
