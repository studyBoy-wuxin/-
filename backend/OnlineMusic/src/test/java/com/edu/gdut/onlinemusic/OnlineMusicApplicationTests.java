package com.edu.gdut.onlinemusic;

import com.edu.gdut.onlinemusic.Dao.MusicDao;
import com.edu.gdut.onlinemusic.Dao.UserDao;
import com.edu.gdut.onlinemusic.Entity.Music;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import redis.clients.jedis.Jedis;

import java.io.*;
import java.util.List;

@SpringBootTest
class OnlineMusicApplicationTests {
    @Autowired
    private MusicDao dao;

    @Test
    void contextLoads() {
        //1. 文件夹的路径  文件名
        String directory = "E:\\";
        String filename = "test.txt";

        //2.  创建文件夹对象     创建文件对象
        File file = new File(directory);
        //如果文件夹不存在  就创建一个空的文件夹
        if (!file.exists()) {
            file.mkdirs();
        }
        File file2 = new File(directory, filename);
        //如果文件不存在  就创建一个空的文件
        if (!file2.exists()) {
            try {
                file2.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        //3.写入数据
        //创建文件字节输出流
        FileOutputStream fos = null;
        try {
            fos = new FileOutputStream(directory + "\\" + filename);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        //开始写
        String str = "五月天";
        byte[] bytes = str.getBytes();
        //将byte数组中的所有数据全部写入
        try {
            fos.write(bytes);
            //关闭流
            fos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        String result = "";
        try {
            //这个方法是类似隐形开启了命令执行器，输入指令执行python脚本
            Process process = Runtime.getRuntime()
                    .exec("python E:\\pycharmProject\\酷我音乐\\原生代码\\1.py");
            //这种方式获取返回值的方式是需要用python打印输出，然后java去获取命令行的输出，在java返回
            InputStreamReader ir = new InputStreamReader(process.getInputStream(),"GBK");
            LineNumberReader input = new LineNumberReader(ir);
            result = input.readLine();//中文的话这里可能会有乱码，可以尝试转一下不过问题不大
//            result = new String(result.getBytes("iso8859-1"),"utf-8");
            input.close();
            ir.close();
            List<Music> musicByName = dao.findMusicByName(str);
            System.out.println(musicByName);
            int re = process.waitFor();
            System.out.println(result);
        } catch (IOException | InterruptedException e) {
            System.out.println("调用python脚本并读取结果时出错：" + e.getMessage());
        }


    }

    @Test
    void text() throws Exception{
        Jedis j = new Jedis("localhost", 6379);
        j.set("songName","薛之谦");
        //这个方法是类似隐形开启了命令执行器，输入指令执行python脚本
        Process process = Runtime.getRuntime()
                .exec("python E:\\pycharmProject\\酷我音乐\\原生代码\\aaa.py");
        // 使当前线程等待，直到此进程对象表示的进程终止
        process.waitFor();
    }

}
