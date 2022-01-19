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
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 Edg/95.0.1020.30',
    }
proxies = {
    'http':'http://121.42.148.121:16817'
}

# 获取推荐的内容
def get_Recommendlist():
    url = 'http://www.kuwo.cn/api/www/rcm/index/playlist'
    params={
        'loginUid': 0,
        'httpsStatus': 1,
        'reqId': '6c4b2940 - 3417 - 11ec - 986e-17cdec19da4b'
    }
    resp = requests.get(url=url,headers=headers,params=params)
    return json.loads(resp.content)

# 获取到Recommendlist的详细info列表 并返回
def get_RecommendListInfo_ByID(pid):
    url = 'http://www.kuwo.cn/api/www/playlist/playListInfo'
    params={
        'pid':pid,
        'pn':'1',
        'rn':'30',
        'httpsStatus':'1',
        'reqId':'be09b750-3418-11ec-986e-17cdec19da4b',
    }
    resp = requests.get(url=url,params=params,headers=headers)

    return json.loads(resp.content.decode('utf-8'))

# 保存所有推荐歌单的信息，并返回 id列表
def saveRecommendIntoDB():
    a = get_Recommendlist()
    recommend_id_list = jsonpath.jsonpath(a, '$.data.list..id')
    recommend_name_list = jsonpath.jsonpath(a,'$.data.list..name')
    print(recommend_name_list)
    recommend_img_list = jsonpath.jsonpath(a,'$.data.list..img')
    recommend_author_list = jsonpath.jsonpath(a, '$.data.list..userName')
    recommend_info_list = jsonpath.jsonpath(a, '$.data.list..info')
    recommend_listencnt_list = jsonpath.jsonpath(a, '$.data.list..listencnt')
    for index in range(int(len(recommend_name_list)/2)):
        db = get_DB()
        sql = f'insert into recommend(rid,name,author,img_url,info,listencnt) values("{recommend_id_list[index]}","{recommend_name_list[index]}","{recommend_author_list[index]}","{recommend_img_list[index]}","{recommend_info_list[index]}","{recommend_listencnt_list[index]}")'
        try:
            flag = db.cursor().execute(sql)
            db.commit()
            if flag>0:
                print(f'{recommend_name_list[index]}已插入++++++++++++++')
        except Exception as e:
            print('recommend 发生异常:', e)
            # 如果发生错误则回滚
            db.rollback()
    db.close()
    return recommend_id_list
import time
# 插入到recommend_music这个表
def save_RecommendMusic_ByRecommendID_IntoDB(Rid):
    # 先通过 RecommendID 获取到 当前推荐歌单 的详细信息(id，歌曲信息等)
    RecommendListInfo = get_RecommendListInfo_ByID(Rid)
    # 获取歌曲的内容
    mid_list = jsonpath.jsonpath(RecommendListInfo,'$.data.musicList..rid')
    name_list = jsonpath.jsonpath(RecommendListInfo, '$.data.musicList..name')
    artist_list = jsonpath.jsonpath(RecommendListInfo, '$.data.musicList..artist')
    img_url_list = jsonpath.jsonpath(RecommendListInfo, '$.data.musicList..pic')
    songTimeMinutes_list = jsonpath.jsonpath(RecommendListInfo, '$.data.musicList..songTimeMinutes')
    for index in range(int(len(mid_list)/2)):
        # if get_MusicUrl_ByID(mid_list[index]) != '':

        db = get_DB()
        audio = get_MusicUrl_ByID(mid_list[index])
        if audio!='':
            audio_url = f'http://localhost:8888/OnlineMusic/audio/{name_list[index]}.{audio[audio.rfind(".")+1:]}'
            img_url = f'http://localhost:8888/OnlineMusic/image/{name_list[index]}.{img_url_list[index][str(img_url_list[index]).rfind(".")+1:]}'
            # 插入音乐信息
            sql1 = f'insert into music(mid,name,artist,img_url,audio_url,songTimeMinutes) values({mid_list[index]},"{name_list[index]}","{artist_list[index]}","{img_url}","{audio_url}","{songTimeMinutes_list[index]}")'
            # 插入中间表
            sql2 = f'insert into recommend_music(mid,rid) values("{mid_list[index]}","{Rid}")'
            try:
                audio_filename = f'D://MusicInfo/audio/{name_list[index]}.{audio[audio.rfind(".")+1:]}'
                urllib.request.urlretrieve(audio, audio_filename)
                time.sleep(4)
                # 执行sql语句
                flag1=db.cursor().execute(sql1)
                db.commit()
                if flag1>0:
                    print(f'{name_list[index]}已插入...')
            except Exception as e:
                print('music发生异常:', e)
                # 如果发生错误则回滚
                db.rollback()
            try:
                image_filename = f'D://MusicInfo/image/{name_list[index]}.{img_url_list[index][str(img_url_list[index]).rfind(".") + 1:]}'
                print(img_url_list[index])
                print(image_filename)
                urllib.request.urlretrieve(img_url_list[index], image_filename)
                time.sleep(4)

                # 执行sql语句
                flag2=db.cursor().execute(sql2)
                db.commit()
                if flag2>0:
                    print(f'recommend_music {mid_list[index]},{Rid} 已插入...')
            except Exception as e:
                print('recommend_music发生异常:', e)
                # 如果发生错误则回滚
                db.rollback()
    db.close()
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
    ridlist = saveRecommendIntoDB()
    for rid in ridlist:
        # 插入 推荐歌单的信息 的同时 把 中间表 和 歌曲信息 都插入
        save_RecommendMusic_ByRecommendID_IntoDB(rid)