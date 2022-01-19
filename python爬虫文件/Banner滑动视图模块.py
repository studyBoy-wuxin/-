import json
import jsonpath
from DBUtil import get_DB
import requests

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

# 获取滑动视图模块内容
def get_bannerList():
    url = 'http://www.kuwo.cn/api/www/banner/index/bannerList'
    params={
        'httpsStatus': 1,
        'reqId': '6f6cc680 - 3415 - 11ec - 8deb - ab25212e67de'
    }
    resp = requests.get(url=url,headers=headers,params=params)
    if resp.status_code==200:
        # 返回python对象(字典)形式的数据
        return json.loads(resp.content)

def saveBannerIntoDB():
    a = get_bannerList()
    img_url_list = jsonpath.jsonpath(a,'$.data..pic')
    for img_url in img_url_list:
        db = get_DB()
        sql = f'insert into banner(url) values("{img_url}")'
        db.cursor().execute(sql)
        db.commit()
    db.close()

if __name__ == '__main__':
    saveBannerIntoDB()