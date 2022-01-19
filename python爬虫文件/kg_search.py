import redis
import requests
import time
import json
import math
from DBUtil import get_DB

headers = {
'accept':'*/*',
'accept-language':'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
'cookie':'kg_mid=53ddbf4ff10aabf287b6477a8c4de576; kg_dfid=3ey4yV3TNdly0PjELX32FMhY; kg_mid_temp=53ddbf4ff10aabf287b6477a8c4de576; Hm_lvt_aedee6983d4cfc62f509129360d6bb3d=1636854257,1637063470; Hm_lpvt_aedee6983d4cfc62f509129360d6bb3d=1637063551',
'referer':'https://www.kugou.com/',
'sec-ch-ua':'"Microsoft Edge";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
'sec-ch-ua-mobile':'?0',
'sec-ch-ua-platform':'"Windows"',
'sec-fetch-dest':'script',
'sec-fetch-mode':'no-cors',
'sec-fetch-site':'same-site',
'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.53',
}

def ChangeTimeFormat(time):
    time = int(str(time)[0:-3])
    m = str(math.floor(time/60))
    s = str(time-int(m)*60)
    ml = len(m)
    sl = len(s)
    songTime = f'{m if ml>1 else "0"+m}:{s if sl>1 else "0"+s}'
    return songTime

def handleFormat(data):
    data = str(data)
    return data[data.index('{'):data.rindex('}')+1]

def get_SearchSongInfo(key):
    TimeStamp = str(time.time())
    TimeStamp = TimeStamp[0:TimeStamp.index('.')]
    url = 'https://searchrecommend.kugou.com/get/complex'
    params = {
        'callback': 'jQuery1124004720780862367224_1637063550527',
        'word': key,
        '_': TimeStamp
    }
    resp = requests.get(url=url,headers=headers,params=params)
    with open('aaa.json','w',encoding='utf-8') as f:
        f.write(resp.text)
    text = handleFormat(resp.text)
    songList = eval(text)['data']['song']
    return songList

def get_Audio(hash,album_id):
    TimeStamp = str(time.time())
    TimeStamp = TimeStamp[0:TimeStamp.index('.')]
    url = 'https://wwwapi.kugou.com/yy/index.php'
    params = {
        'r':'play/getdata',
        'callback':'jQuery19107665780227916725_1636860053011',
        'hash':hash,
        'dfid':'3ey4yV3TNdly0PjELX32FMhY',
        'appid':'1014',
        'mid':'53ddbf4ff10aabf287b6477a8c4de576',
        'platid':'4',
        'album_id':album_id,
        '_':TimeStamp,
    }
    resp = requests.get(url=url,headers=headers,params=params)
    content = handleFormat(resp.text).replace('true','True')
    # with open('../Audio.json', 'w', encoding='utf-8') as f:
    #     f.write(json.dumps(eval(content)))
    return eval(content)

if __name__ == '__main__':
    r = redis.StrictRedis(host='localhost', port=6379)
    songKey = r.get('songName').decode('utf-8')
    print(songKey)
    songList = get_SearchSongInfo(songKey)

    db = get_DB()
    for item in songList:
        try:
            AudioObj = get_Audio(item["hash"], item["AlbumID"])
            sid = AudioObj["data"]['album_id']
            sname = AudioObj["data"]['song_name']
            singer = AudioObj["data"]['author_name']
            # 把路径中的 \\ 正斜杠全部去掉
            surl = AudioObj["data"]['play_url'].replace('\\', '')
            stime = ChangeTimeFormat(AudioObj["data"]['timelength'])
            simg = AudioObj["data"]['img'].replace('\\', '')

            if surl!='':
                sql = f'insert into music(mid,name,artist,img_url,audio_url,songTimeMinutes) values("{sid}","{sname}","{singer}","{simg}","{surl}","{stime}")'
                flag1 = db.cursor().execute(sql)
                if flag1 > 0: print(f'{sname}插入成功...............')
                else: print(f'{sname}插入失败-----------------------')
                db.commit()
            else:
                print('有数据为空')
        except Exception as e:
            print('发生异常:', e)
            db.rollback()
    db.close()