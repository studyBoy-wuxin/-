package com.edu.gdut.onlinemusic.Entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class Music implements Serializable {
    private String mid;
    private String name;
    private String artist;
    private String img_url;
    private String audio_url;
    private String songTimeMinutes;

    public Music(){}

    public Music(String mid, String name, String artist, String img_url, String audio_url, String songTimeMinutes) {
        this.mid = mid;
        this.name = name;
        this.artist = artist;
        this.img_url = img_url;
        this.audio_url = audio_url;
        this.songTimeMinutes = songTimeMinutes;
    }
}
