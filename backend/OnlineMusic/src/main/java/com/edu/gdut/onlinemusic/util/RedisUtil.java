package com.edu.gdut.onlinemusic.util;

import redis.clients.jedis.Jedis;

public class RedisUtil {

    public Jedis getJedis(){
        return new Jedis("localhost",6379);
    }

}
