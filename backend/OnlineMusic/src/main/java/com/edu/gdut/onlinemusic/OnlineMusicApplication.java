package com.edu.gdut.onlinemusic;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@SpringBootApplication
@MapperScan("com.edu.gdut.onlinemusic.Dao")
public class OnlineMusicApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnlineMusicApplication.class, args);
    }

}
