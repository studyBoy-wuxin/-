import pymysql

# 获取到 游标对象 cursor
def get_DB():
    return pymysql.connect(host='localhost',
                    user='root',
                    password='admin',
                    database='onlinemusic',
                    port=3306)