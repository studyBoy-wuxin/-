package com.edu.gdut.onlinemusic.util;


import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

@Component
public class WriteFileUtil {
    // 创建一个 和python 交互的文本，将输入框的数据写入文本
    public void write(String value){
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
        String str = value;
        //将byte数组中的所有数据全部写入
        try {
            // 写入字节流数据
            fos.write(str.getBytes());
            //关闭流
            fos.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void startpy(String location){
        try{
            //这个方法是类似隐形开启了命令执行器，输入指令执行python脚本
            Process process = Runtime.getRuntime()
                    .exec("python "+location);
            // 使当前线程等待，直到此进程对象表示的进程终止
            process.waitFor();
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
