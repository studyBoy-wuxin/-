package com.edu.gdut.onlinemusic.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class StaticResourse implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/audio/**")
                .addResourceLocations("file:D://MusicInfo//audio//");
        registry.addResourceHandler("/image/**")
                .addResourceLocations("file:D://MusicInfo//image//");
        registry.addResourceHandler("/User_Avater/**")
                .addResourceLocations("file:D://MusicInfo//User_Avater//");
    }
}

