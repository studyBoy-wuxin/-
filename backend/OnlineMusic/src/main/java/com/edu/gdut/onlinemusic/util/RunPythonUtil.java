package com.edu.gdut.onlinemusic.util;

import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class RunPythonUtil {

    public void startpy(String location){
        try{
            //这个方法是类似隐形开启了命令执行器，输入指令执行python脚本
            Process process = Runtime.getRuntime()
                    .exec("python "+location);
            // 使当前线程等待，直到此进程对象表示的进程终止
            process.waitFor(6, TimeUnit.SECONDS);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
