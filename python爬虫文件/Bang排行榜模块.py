import json
import jsonpath
from DBUtil import get_DB
import requests
import urllib.request

headers={
        'Accept':'application/json, text/plain, */*',
        'Accept-Language':'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Connection':'keep-alive',
        'Cookie':'_ga=GA1.2.928886317.1634869496; _gid=GA1.2.1415227632.1634992892; Hm_lvt_cdb524f42f0ce19b169a8071123a4797=1634870938,1634882943,1634992892,1635002708; Hm_lpvt_cdb524f42f0ce19b169a8071123a4797=1635002708; _gat=1; kw_token=23JNTRDOOT6',
        'csrf':'23JNTRDOOT6',
        'Host':'www.kuwo.cn',
        'Referer':'http://www.kuwo.cn/rankList',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0',
    }
proxies = {
    "http": "http://%(user)s:%(pwd)s@%(proxy)s/" % {'user': "1151285096", 'pwd': "jtkzotum", 'proxy': '42.51.42.253:16817'}
}

# 只获取 官方榜 的 飙升榜等信息
def get_RankingList():
    url = 'http://www.kuwo.cn/api/www/bang/bang/bangMenu'
    params = {
        'httpsStatus': 1,
        'reqId': '9b82aa70-331e-11ec-bc57-0df64ba1a489'
    }
    headers1 = {
        'Accept': 'application/json,text/plain,*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Connection': 'keep-alive',
        'Cookie': '_ga=GA1.2.928886317.1634869496; _gid=GA1.2.1569790879.1634869496; Hm_lvt_cdb524f42f0ce19b169a8071123a4797=1634869497,1634870938,1634882943; Hm_lpvt_cdb524f42f0ce19b169a8071123a4797=1634882943; _gat=1; kw_token=IX69AI1L0F',
        'csrf': 'IX69AI1L0F',
        'Host': 'www.kuwo.cn',
        'Referer': 'http://www.kuwo.cn/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 Edg/94.0.992.50'
    }
    resp = requests.get(url=url, params=params, headers=headers1)
    content = json.loads(resp.content)
    # 返回 官方榜
    return content['data'][0]

# 将每个榜的信息存到 数据库
def save_Bang_InfoDB():
    db = get_DB()
    RankingList = get_RankingList()
    id_list = jsonpath.jsonpath(RankingList,'$.list..sourceid')
    name_list = jsonpath.jsonpath(RankingList,'$.list..name')
    img_url_list = jsonpath.jsonpath(RankingList, '$.list..pic')
    for index in range(len(id_list)):
        # 起床记得建个bang表
        sql = f'insert into bang(id,name,img_url) values("{id_list[index]}","{name_list[index]}","{img_url_list[index]}")'
        try:
            flag = db.cursor().execute(sql)
            db.commit()
            if flag>0:
                print(f'{name_list[index]} 已插入成功 =================================')
        except Exception as e:
            print('发生异常:',e)
            # 如果发生错误则回滚
            db.rollback()

# 获取到每个榜的音乐
def get_BangMusic_ByBangID(BangID):
    # RankingList = get_RankingList()['list']
    url = 'http://www.kuwo.cn/api/www/bang/bang/musicList'

    params = {
        'bangId': BangID,
        'pn': '1',
        'rn': '30',
        'httpsStatus': '1',
        'reqId': 'b525a170-32e3-11ec-9b34-992e0e57c120'
    }
    resp = requests.get(url=url, params=params, headers=headers)
    if resp.status_code==200:
        return json.loads(resp.content)
import time
def save_BangMusic_IntoDB(BangID):
    # 根据 每个榜的id 获取到 musiclist
    MusicList = get_BangMusic_ByBangID(BangID)
    mid_list = jsonpath.jsonpath(MusicList, '$.data.musicList..rid')
    name_list = jsonpath.jsonpath(MusicList, '$.data.musicList..name')
    artist_list = jsonpath.jsonpath(MusicList, '$.data.musicList..artist')
    img_url_list = jsonpath.jsonpath(MusicList, '$.data.musicList..pic')
    songTimeMinutes_list = jsonpath.jsonpath(MusicList, '$.data.musicList..songTimeMinutes')
    for index in range(int(len(mid_list)/2)):
        img_url = f'http://localhost:8888/OnlineMusic/image/{name_list[index]}.{img_url_list[index][str(img_url_list[index]).rfind(".")+1:]}'
        if get_MusicUrl_ByID(mid_list[index]) != '':
            image_filename = f'D://MusicInfo/image/{name_list[index]}.{img_url_list[index][str(img_url_list[index]).rfind(".")+1:]}'
            print(img_url_list[index])
            print(image_filename)
            urllib.request.urlretrieve(img_url_list[index], image_filename)
            time.sleep(3)

    #     db = get_DB()
    #     audio = get_MusicUrl_ByID(mid_list[index])
    #     if audio!='':
    #         audio_url = f'http://localhost:8888/OnlineMusic/audio/{name_list[index]}.{audio[audio.rfind(".")+1:]}'
    #         sql = f'insert into music(mid,name,artist,img_url,audio_url,songTimeMinutes) values("{mid_list[index]}","{name_list[index]}","{artist_list[index]}","{img_url_list[index]}","{audio_url}","{songTimeMinutes_list[index]}")'
    #         sql2 = f'insert into bang_music(bangid,mid) values("{BangID}","{mid_list[index]}")'
    #         try:
    #             audio_filename = f'D://MusicInfo/audio/{name_list[index]}.{audio[audio.rfind(".")+1:]}'
    #             urllib.request.urlretrieve(audio, audio_filename)
    #
    #             flag1 = db.cursor().execute(sql)
    #             db.commit()
    #             if flag1 > 0:
    #                 print(f'{name_list[index]} 已插入++++++++++++++')
    #         except Exception as e:
    #             print('music发生异常:',e)
    #             # 如果发生错误则回滚
    #             db.rollback()
    #         try:
    #             flag2 = db.cursor().execute(sql2)
    #             db.commit()
    #             if flag2 > 0:
    #                 print(f'bang_music , {BangID},{mid_list[index]} 已插入++++++++++++++')
    #         except Exception as e:
    #             print('bang_music 发生异常:',e)
    #             # 如果发生错误则回滚
    #             db.rollback()
    # db.close()

import random
# 获取音频信息
def get_MusicUrl_ByID(id):
    url = 'http://www.kuwo.cn/api/v1/www/music/playUrl'
    params = {
        'mid': id,
        'type': 'music',
        'httpsStatus': 1,
        'reqId': '6071dda0-3663-11ec-a685-bfb7c8c901c7'
    }
    flag = random.randint(0, 1)
    resp = requests.get(url=url, headers=headers, params=params,proxies=proxies if flag==1 else None)
    if resp.status_code == 200:
        # 字符串 转 字典 需要用eval函数
        content = json.loads(resp.content)
    else :
        content = {'data':{'url':''}}
    return content['data']["url"]

if __name__ == '__main__':
    # 插入 榜信息
    save_Bang_InfoDB()
    # 插入榜音乐的信息
    RankingList = get_RankingList()
    BangID_List = jsonpath.jsonpath(RankingList,'$.list..sourceid')
    for BangID in BangID_List:
        save_BangMusic_IntoDB(BangID)
