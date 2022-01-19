/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : onlinemusic

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 11/11/2021 20:25:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bang
-- ----------------------------
DROP TABLE IF EXISTS `bang`;
CREATE TABLE `bang`  (
  `id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bang
-- ----------------------------
INSERT INTO `bang` VALUES ('158', '抖音歌曲榜', 'https://img3.kuwo.cn/star/upload/7/7/1635289915.png');
INSERT INTO `bang` VALUES ('16', '酷我热歌榜', 'https://img3.kuwo.cn/star/upload/9/9/1635237648.png');
INSERT INTO `bang` VALUES ('17', '酷我新歌榜', 'https://img3.kuwo.cn/star/upload/3/9/1635289904.png');
INSERT INTO `bang` VALUES ('93', '酷我飙升榜', 'https://img3.kuwo.cn/star/upload/5/3/1635289912.png');

-- ----------------------------
-- Table structure for bang_music
-- ----------------------------
DROP TABLE IF EXISTS `bang_music`;
CREATE TABLE `bang_music`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `bangid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mid` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 57 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bang_music
-- ----------------------------
INSERT INTO `bang_music` VALUES (1, '93', '196956874');
INSERT INTO `bang_music` VALUES (2, '93', '196815080');
INSERT INTO `bang_music` VALUES (3, '93', '195184896');
INSERT INTO `bang_music` VALUES (4, '93', '186617123');
INSERT INTO `bang_music` VALUES (5, '93', '196926056');
INSERT INTO `bang_music` VALUES (6, '93', '150602055');
INSERT INTO `bang_music` VALUES (7, '93', '196898210');
INSERT INTO `bang_music` VALUES (8, '93', '194098849');
INSERT INTO `bang_music` VALUES (9, '93', '193290598');
INSERT INTO `bang_music` VALUES (10, '93', '180108159');
INSERT INTO `bang_music` VALUES (11, '93', '176704915');
INSERT INTO `bang_music` VALUES (12, '93', '162457325');
INSERT INTO `bang_music` VALUES (13, '93', '170255832');
INSERT INTO `bang_music` VALUES (14, '93', '190591966');
INSERT INTO `bang_music` VALUES (15, '17', '196804621');
INSERT INTO `bang_music` VALUES (16, '17', '196898210');
INSERT INTO `bang_music` VALUES (17, '17', '196992370');
INSERT INTO `bang_music` VALUES (18, '17', '196670066');
INSERT INTO `bang_music` VALUES (19, '17', '195815423');
INSERT INTO `bang_music` VALUES (20, '17', '196779790');
INSERT INTO `bang_music` VALUES (21, '17', '196956874');
INSERT INTO `bang_music` VALUES (22, '17', '196815080');
INSERT INTO `bang_music` VALUES (23, '17', '196812493');
INSERT INTO `bang_music` VALUES (24, '17', '196476445');
INSERT INTO `bang_music` VALUES (25, '17', '196670153');
INSERT INTO `bang_music` VALUES (26, '17', '196227964');
INSERT INTO `bang_music` VALUES (27, '17', '196395317');
INSERT INTO `bang_music` VALUES (28, '17', '196798063');
INSERT INTO `bang_music` VALUES (29, '17', '196515132');
INSERT INTO `bang_music` VALUES (30, '16', '28879676');
INSERT INTO `bang_music` VALUES (31, '16', '187717362');
INSERT INTO `bang_music` VALUES (32, '16', '187717013');
INSERT INTO `bang_music` VALUES (33, '16', '150373516');
INSERT INTO `bang_music` VALUES (34, '16', '193290598');
INSERT INTO `bang_music` VALUES (35, '16', '186917318');
INSERT INTO `bang_music` VALUES (36, '16', '150602055');
INSERT INTO `bang_music` VALUES (37, '16', '185147833');
INSERT INTO `bang_music` VALUES (38, '16', '177504089');
INSERT INTO `bang_music` VALUES (39, '16', '169428024');
INSERT INTO `bang_music` VALUES (40, '16', '175381933');
INSERT INTO `bang_music` VALUES (41, '16', '156483846');
INSERT INTO `bang_music` VALUES (42, '16', '182356622');
INSERT INTO `bang_music` VALUES (43, '158', '191893500');
INSERT INTO `bang_music` VALUES (44, '158', '183284945');
INSERT INTO `bang_music` VALUES (45, '158', '86279129');
INSERT INTO `bang_music` VALUES (46, '158', '28879676');
INSERT INTO `bang_music` VALUES (47, '158', '194025455');
INSERT INTO `bang_music` VALUES (48, '158', '187717362');
INSERT INTO `bang_music` VALUES (49, '158', '190580670');
INSERT INTO `bang_music` VALUES (50, '158', '196670066');
INSERT INTO `bang_music` VALUES (51, '158', '148411214');
INSERT INTO `bang_music` VALUES (52, '158', '184600062');
INSERT INTO `bang_music` VALUES (53, '158', '187717013');
INSERT INTO `bang_music` VALUES (54, '158', '192095277');
INSERT INTO `bang_music` VALUES (55, '158', '184274130');
INSERT INTO `bang_music` VALUES (56, '158', '194050093');

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner`  (
  `bid` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`bid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES (1, 'https://kwimg4.kuwo.cn/star/upload/47/52/1557311466098_.png');
INSERT INTO `banner` VALUES (2, 'https://kwimg4.kuwo.cn/star/upload/62/27/1634316992909_.jpg');
INSERT INTO `banner` VALUES (3, 'https://kwimg2.kuwo.cn/star/upload/90/57/1634786463213_.jpg');
INSERT INTO `banner` VALUES (4, 'https://kwimg3.kuwo.cn/star/upload/ecom/1633056344133.jpg');
INSERT INTO `banner` VALUES (5, 'https://kwimg1.kuwo.cn/star/upload/94/28/1631809740820_.jpg');

-- ----------------------------
-- Table structure for love_music
-- ----------------------------
DROP TABLE IF EXISTS `love_music`;
CREATE TABLE `love_music`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `mid` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `uid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of love_music
-- ----------------------------
INSERT INTO `love_music` VALUES (4, '183284945', '3119004028');
INSERT INTO `love_music` VALUES (7, '150602055', '3119004028');
INSERT INTO `love_music` VALUES (8, '156483846', '3119004028');
INSERT INTO `love_music` VALUES (9, '148411214', '3119004028');
INSERT INTO `love_music` VALUES (11, '156483846', '3119006961');
INSERT INTO `love_music` VALUES (12, '150373516', '3119006961');
INSERT INTO `love_music` VALUES (13, '96338', '3119006961');
INSERT INTO `love_music` VALUES (14, '23676164', '3119006961');
INSERT INTO `love_music` VALUES (15, '196227964', '3119006961');
INSERT INTO `love_music` VALUES (16, '170255832', '3119006961');
INSERT INTO `love_music` VALUES (18, '1872875660', '3119006961');
INSERT INTO `love_music` VALUES (19, '1463165983', '3119006961');
INSERT INTO `love_music` VALUES (21, '5257138', '3119006961');
INSERT INTO `love_music` VALUES (22, '183284945', '3119006961');
INSERT INTO `love_music` VALUES (23, '608483', '3119006961');
INSERT INTO `love_music` VALUES (24, '196898210', '3119004028');
INSERT INTO `love_music` VALUES (25, '150602055', '3119009371');
INSERT INTO `love_music` VALUES (26, '196898210', '3119009371');

-- ----------------------------
-- Table structure for music
-- ----------------------------
DROP TABLE IF EXISTS `music`;
CREATE TABLE `music`  (
  `mid` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(35) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `artist` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `audio_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `songTimeMinutes` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`mid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of music
-- ----------------------------
INSERT INTO `music` VALUES ('1010956', '想自由', '林宥嘉', 'https://img3.kuwo.cn/star/albumcover/500/14/85/3534971494.jpg', 'https://ec-sycdn.kuwo.cn/c93982dde74c62453f2ad6579dc5cf46/618bce98/resource/n2/49/62/2328990451.mp3', '04:41');
INSERT INTO `music` VALUES ('1028225', '温柔', '五月天', 'https://img2.kuwo.cn/star/albumcover/500/1/73/1295950904.jpg', 'https://ee-sycdn.kuwo.cn/dbfe244eb797f383eb6434ae2009d4de/618bce39/resource/n2/92/16/577520618.mp3', '04:29');
INSERT INTO `music` VALUES ('1041190', '相约一九九八', '王菲&那英', 'https://img4.kuwo.cn/star/albumcover/500/24/68/1662692079.jpg', 'https://other-web-ra01-sycdn.kuwo.cn/3c15685fe8fbc4ae816b33bcc4dd62c4/618c7b1b/resource/n3/192/7/59/1562083263.mp3', '05:10');
INSERT INTO `music` VALUES ('11914646', '浪费(Live)', '林宥嘉&郁可唯', 'https://img1.kuwo.cn/star/albumcover/500/94/82/4031717254.jpg', 'https://other-web-ri01-sycdn.kuwo.cn/cdc14322357543631bff6b395eeae823/618bce99/resource/n1/37/82/2993608499.mp3', '04:55');
INSERT INTO `music` VALUES ('1238936', '浪费', '林宥嘉', 'https://img2.kuwo.cn/star/albumcover/500/62/27/4252007167.jpg', 'https://ec-sycdn.kuwo.cn/0c50e7a280a0e4916a4e4b3138afe2cf/618bce98/resource/n2/2/42/856621988.mp3', '05:07');
INSERT INTO `music` VALUES ('1238943', '傻子', '林宥嘉', 'https://img2.kuwo.cn/star/albumcover/500/62/27/4252007167.jpg', 'https://other-web-ra01-sycdn.kuwo.cn/c7ca3d69ad1c34e6ccca8eabfbbd6f22/618bce9a/resource/n3/33/12/2940516396.mp3', '03:34');
INSERT INTO `music` VALUES ('13332892', '你是我的眼', '林宥嘉', 'https://img4.kuwo.cn/star/albumcover/500/30/5/788311717.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/c7f8af34609cac212b5527f683276746/618bce98/resource/n2/30/25/3792106436.mp3', '04:43');
INSERT INTO `music` VALUES ('140064959', '稻香', '周杰伦&林俊杰', 'https://img1.kuwo.cn/star/starheads/500/10/6/294045140.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/4aca858a5a8a121bd2396cecd5bcce0d/618c7ab9/resource/n2/25/44/97165461.mp3', '03:18');
INSERT INTO `music` VALUES ('148411214', '虞兮叹', '闻人听書_', 'http://localhost:8888/OnlineMusic/image/虞兮叹.jpg', 'http://localhost:8888/OnlineMusic/audio/虞兮叹.mp3', '03:30');
INSERT INTO `music` VALUES ('150373516', '逃之夭夭(DJheap九天版)', '张禾禾', 'http://localhost:8888/OnlineMusic/image/逃之夭夭(DJheap九天版).jpg', 'http://localhost:8888/OnlineMusic/audio/逃之夭夭(DJheap九天版).mp3', '03:45');
INSERT INTO `music` VALUES ('150602055', '听闻远方有你', '刘艺雯', 'http://localhost:8888/OnlineMusic/image/听闻远方有你.jpg', 'http://localhost:8888/OnlineMusic/audio/听闻远方有你.mp3', '04:19');
INSERT INTO `music` VALUES ('156483846', '踏山河', '七叔（叶泽浩）', 'http://localhost:8888/OnlineMusic/image/踏山河.jpg', 'http://localhost:8888/OnlineMusic/audio/踏山河.mp3', '02:48');
INSERT INTO `music` VALUES ('1566122', '微风细雨', '王菲', 'https://img3.kuwo.cn/star/albumcover/500/94/83/2436100980.jpg', 'https://other-web-rb01-sycdn.kuwo.cn/0110b517e979469236f819c6e5de8b0f/618c7b1d/resource/n3/92/65/3469793424.mp3', '03:42');
INSERT INTO `music` VALUES ('159783', '千千阙歌', '陈慧娴', 'http://localhost:8888/OnlineMusic/image/千千阙歌.jpg', 'http://localhost:8888/OnlineMusic/audio/千千阙歌.mp3', '05:01');
INSERT INTO `music` VALUES ('162457325', '等你归来', '程响', 'http://localhost:8888/OnlineMusic/image/等你归来.jpg', 'http://localhost:8888/OnlineMusic/audio/等你归来.mp3', '03:55');
INSERT INTO `music` VALUES ('164616', '分手快乐', '梁静茹', 'http://localhost:8888/OnlineMusic/image/分手快乐.jpg', 'http://localhost:8888/OnlineMusic/audio/分手快乐.mp3', '04:36');
INSERT INTO `music` VALUES ('169099251', '反方向的钟', '李荣浩', 'https://img1.kuwo.cn/star/starheads/500/3/59/861969788.jpg', 'https://gq-sycdn.kuwo.cn/14ea570b0f1bb47186a7b7f9f8793e9e/618c7624/resource/n3/5/95/2130489421.mp3', '00:27');
INSERT INTO `music` VALUES ('169428024', '大风吹', '王赫野', 'http://localhost:8888/OnlineMusic/image/大风吹.jpg', 'http://localhost:8888/OnlineMusic/audio/大风吹.mp3', '02:43');
INSERT INTO `music` VALUES ('170255832', '如果爱还在', '雨中百合', 'http://localhost:8888/OnlineMusic/image/如果爱还在.jpg', 'http://localhost:8888/OnlineMusic/audio/如果爱还在.mp3', '05:23');
INSERT INTO `music` VALUES ('175381933', '万疆', '李玉刚', 'http://localhost:8888/OnlineMusic/image/万疆.jpg', 'http://localhost:8888/OnlineMusic/audio/万疆.mp3', '03:54');
INSERT INTO `music` VALUES ('176704915', '这世界那么多人', '莫文蔚', 'http://localhost:8888/OnlineMusic/image/这世界那么多人.jpg', 'http://localhost:8888/OnlineMusic/audio/这世界那么多人.mp3', '04:45');
INSERT INTO `music` VALUES ('177504089', '半生雪', '七叔（叶泽浩）', 'http://localhost:8888/OnlineMusic/image/半生雪.jpg', 'http://localhost:8888/OnlineMusic/audio/半生雪.mp3', '02:56');
INSERT INTO `music` VALUES ('180108159', '提笔忘情', '关歆', 'http://localhost:8888/OnlineMusic/image/提笔忘情.jpg', 'http://localhost:8888/OnlineMusic/audio/提笔忘情.mp3', '03:23');
INSERT INTO `music` VALUES ('181031101', '热爱105°C的你(DJ小劲版)', '阿肆&DJ小劲', 'https://img4.kuwo.cn/star/albumcover/500/88/23/2295922199.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/1440733cc6527ac1b7c3e74312e2fbef/618c7e0f/resource/n2/51/4/2361746283.mp3', '06:37');
INSERT INTO `music` VALUES ('182356622', '最后的人', '杨小壮', 'http://localhost:8888/OnlineMusic/image/最后的人.jpg', 'http://localhost:8888/OnlineMusic/audio/最后的人.mp3', '04:08');
INSERT INTO `music` VALUES ('183284945', '失眠的夜(DJ热搜版)', '宋孟君', 'http://localhost:8888/OnlineMusic/image/失眠的夜(DJ热搜版).jpg', 'http://localhost:8888/OnlineMusic/audio/失眠的夜(DJ热搜版).mp3', '03:46');
INSERT INTO `music` VALUES ('184274130', '时光背面的我', '刘至佳&韩瞳', 'http://localhost:8888/OnlineMusic/image/时光背面的我.jpg', 'http://localhost:8888/OnlineMusic/audio/时光背面的我.mp3', '03:01');
INSERT INTO `music` VALUES ('184600062', 'STAY', 'The Kid LAROI&Justin Bieber', 'http://localhost:8888/OnlineMusic/image/STAY.jpg', 'http://localhost:8888/OnlineMusic/audio/STAY.mp3', '02:21');
INSERT INTO `music` VALUES ('185147833', '骁', '井胧&井迪儿', 'http://localhost:8888/OnlineMusic/image/骁.jpg', 'http://localhost:8888/OnlineMusic/audio/骁.mp3', '02:38');
INSERT INTO `music` VALUES ('185691817', '热爱105°C的你(DJ版片段)', '阿肆', 'https://img3.kuwo.cn/star/starheads/500/8/4/2588073624.jpg', 'https://ch-sycdn.kuwo.cn/4df313fa6be1dfc531740bf1ea0b7d91/618c7e10/resource/n3/29/66/3651376405.mp3', '00:08');
INSERT INTO `music` VALUES ('186617123', '或许', '程今', 'http://localhost:8888/OnlineMusic/image/或许.jpg', 'http://localhost:8888/OnlineMusic/audio/或许.mp3', '03:22');
INSERT INTO `music` VALUES ('186702858', '默(Live)', '李荣浩&周杰伦', 'https://img2.kuwo.cn/star/albumcover/500/76/43/3044819121.jpg', 'https://cg-sycdn.kuwo.cn/b2ff51ed967f5a99d812308b5de91a23/618c7296/resource/n1/27/50/2823934668.mp3', '02:13');
INSERT INTO `music` VALUES ('186702932', '我爱你中国(Live)', '那英&汪峰&李荣浩&李克勤&吴莫愁&吉克隽逸&张碧晨&黄霄雲', 'https://img2.kuwo.cn/star/albumcover/500/76/43/3044819121.jpg', 'https://cg-sycdn.kuwo.cn/d5b04eab7ed411960d3f37897cbdc6ab/618c7297/resource/n3/14/84/132854764.mp3', '04:06');
INSERT INTO `music` VALUES ('186917318', '画离弦', '海伦', 'http://localhost:8888/OnlineMusic/image/画离弦.jpg', 'http://localhost:8888/OnlineMusic/audio/画离弦.mp3', '03:46');
INSERT INTO `music` VALUES ('187717013', '孤城', '洛先生', 'http://localhost:8888/OnlineMusic/image/孤城.jpg', 'http://localhost:8888/OnlineMusic/audio/孤城.mp3', '04:07');
INSERT INTO `music` VALUES ('187717362', '五十年以后', '海来阿木', 'http://localhost:8888/OnlineMusic/image/五十年以后.jpg', 'http://localhost:8888/OnlineMusic/audio/五十年以后.mp3', '05:10');
INSERT INTO `music` VALUES ('189275417', '我们好好的', '李荣浩', 'https://img3.kuwo.cn/star/albumcover/500/39/99/3766482543.jpg', 'https://cl-sycdn.kuwo.cn/a35a88ddcfe6f1587eb889ee729693d4/618c7297/resource/n1/74/92/545751764.mp3', '04:32');
INSERT INTO `music` VALUES ('189944705', 'sunshing', '毛', 'https://img4.kuwo.cn/star/albumcover/500/32/94/661240023.jpg', 'https://cd-sycdn.kuwo.cn/cfc2fdc2078c32b4ba8e72422c17bc9e/618d09b0/resource/n1/69/35/2441251668.mp3', '01:14');
INSERT INTO `music` VALUES ('189944708', 'love', '毛', 'https://img4.kuwo.cn/star/albumcover/500/32/94/661240023.jpg', 'https://cj-sycdn.kuwo.cn/407038f411cbb2709e88e73fd44d965c/618d09b0/resource/n3/10/25/2945569520.mp3', '01:14');
INSERT INTO `music` VALUES ('189944713', 'dont', '毛', 'https://img4.kuwo.cn/star/albumcover/500/32/94/661240023.jpg', 'https://cj-sycdn.kuwo.cn/b7d657092718ca84da36e891d9566d7e/618d09af/resource/n2/82/64/407391808.mp3', '01:14');
INSERT INTO `music` VALUES ('189944714', 'day', '毛', 'https://img4.kuwo.cn/star/albumcover/500/32/94/661240023.jpg', 'https://cl-sycdn.kuwo.cn/e031acf9ab86ea0b6b6c1d01533cee78/618d09b0/resource/n1/54/43/3404876026.mp3', '01:14');
INSERT INTO `music` VALUES ('189944715', 'sun', '毛', 'https://img4.kuwo.cn/star/albumcover/500/32/94/661240023.jpg', 'https://cj-sycdn.kuwo.cn/bcde5744eee0d712a50b330d96dc970b/618d09af/resource/n2/80/54/3810624520.mp3', '01:14');
INSERT INTO `music` VALUES ('190580670', '曲终人亦散', 'en', 'http://localhost:8888/OnlineMusic/image/曲终人亦散.jpg', 'http://localhost:8888/OnlineMusic/audio/曲终人亦散.mp3', '03:22');
INSERT INTO `music` VALUES ('190591966', '错位的遗憾', '赵洋', 'http://localhost:8888/OnlineMusic/image/错位的遗憾.jpg', 'http://localhost:8888/OnlineMusic/audio/错位的遗憾.mp3', '03:17');
INSERT INTO `music` VALUES ('191893500', '我怕来者不是你(dj版)', '小蓝背心', 'http://localhost:8888/OnlineMusic/image/我怕来者不是你(dj版).jpg', 'http://localhost:8888/OnlineMusic/audio/我怕来者不是你(dj版).mp3', '02:34');
INSERT INTO `music` VALUES ('192095277', '不修(DJR7版)', '房田立', 'http://localhost:8888/OnlineMusic/image/不修(DJR7版).jpg', 'http://localhost:8888/OnlineMusic/audio/不修(DJR7版).mp3', '03:51');
INSERT INTO `music` VALUES ('192834405', '湾', '王菲', 'https://img3.kuwo.cn/star/albumcover/500/58/21/1798539267.jpg', 'https://cd-sycdn.kuwo.cn/3aededa795927e2d2ecbe4ac89bf0951/618c7b1c/resource/n1/31/70/405761661.mp3', '04:17');
INSERT INTO `music` VALUES ('193290598', '如愿', '王菲', 'http://localhost:8888/OnlineMusic/image/如愿.jpg', 'http://localhost:8888/OnlineMusic/audio/如愿.mp3', '04:25');
INSERT INTO `music` VALUES ('194025455', '偏爱和例外', '烟(许佳豪)', 'http://localhost:8888/OnlineMusic/image/偏爱和例外.jpg', 'http://localhost:8888/OnlineMusic/audio/偏爱和例外.mp3', '02:50');
INSERT INTO `music` VALUES ('194050093', '问风', '金渔', 'http://localhost:8888/OnlineMusic/image/问风.jpg', 'http://localhost:8888/OnlineMusic/audio/问风.mp3', '03:34');
INSERT INTO `music` VALUES ('194098849', '浮生记', '海来阿木', 'http://localhost:8888/OnlineMusic/image/浮生记.jpg', 'http://localhost:8888/OnlineMusic/audio/浮生记.mp3', '03:19');
INSERT INTO `music` VALUES ('195184896', '慢慢', '游历', 'http://localhost:8888/OnlineMusic/image/慢慢.jpg', 'http://localhost:8888/OnlineMusic/audio/慢慢.mp3', '03:09');
INSERT INTO `music` VALUES ('195815423', '最好的礼物', '周深', 'http://localhost:8888/OnlineMusic/image/最好的礼物.jpg', 'http://localhost:8888/OnlineMusic/audio/最好的礼物.mp3', '04:26');
INSERT INTO `music` VALUES ('195827569', 'unconditional L♡VE', '倉木麻衣', 'http://localhost:8888/OnlineMusic/image/unconditional L♡VE.jpg', 'http://localhost:8888/OnlineMusic/audio/unconditional L♡VE.mp3', '03:51');
INSERT INTO `music` VALUES ('196227964', '美好的世界', '周深', 'http://localhost:8888/OnlineMusic/image/美好的世界.jpg', 'http://localhost:8888/OnlineMusic/audio/美好的世界.mp3', '04:15');
INSERT INTO `music` VALUES ('196395317', '再见', '于文文', 'http://localhost:8888/OnlineMusic/image/再见.jpg', 'http://localhost:8888/OnlineMusic/audio/再见.mp3', '03:42');
INSERT INTO `music` VALUES ('196476445', 'Boom Boom', 'S.K.Y左林杰', 'http://localhost:8888/OnlineMusic/image/Boom Boom.jpg', 'http://localhost:8888/OnlineMusic/audio/Boom Boom.mp3', '03:01');
INSERT INTO `music` VALUES ('196515132', '又是一年秋风起', '陈瑞', 'http://localhost:8888/OnlineMusic/image/又是一年秋风起.jpg', 'http://localhost:8888/OnlineMusic/audio/又是一年秋风起.mp3', '03:55');
INSERT INTO `music` VALUES ('196670066', '人生不过三杯酒', '花姐', 'http://localhost:8888/OnlineMusic/image/人生不过三杯酒.jpg', 'http://localhost:8888/OnlineMusic/audio/人生不过三杯酒.mp3', '03:15');
INSERT INTO `music` VALUES ('196670153', '与君同尘', '阿云嘎', 'http://localhost:8888/OnlineMusic/image/与君同尘.jpg', 'http://localhost:8888/OnlineMusic/audio/与君同尘.mp3', '04:36');
INSERT INTO `music` VALUES ('196679799', '乌鸦', '周迪lion', 'http://localhost:8888/OnlineMusic/image/乌鸦.jpg', 'http://localhost:8888/OnlineMusic/audio/乌鸦.mp3', '03:54');
INSERT INTO `music` VALUES ('196779790', '曲水流觞', '吴梓敬', 'http://localhost:8888/OnlineMusic/image/曲水流觞.jpg', 'http://localhost:8888/OnlineMusic/audio/曲水流觞.mp3', '04:00');
INSERT INTO `music` VALUES ('196798063', '如果', '单小源', 'http://localhost:8888/OnlineMusic/image/如果.jpg', 'http://localhost:8888/OnlineMusic/audio/如果.mp3', '02:56');
INSERT INTO `music` VALUES ('196804621', '风吟诛仙', '毛不易', 'http://localhost:8888/OnlineMusic/image/风吟诛仙.jpg', 'http://localhost:8888/OnlineMusic/audio/风吟诛仙.mp3', '04:03');
INSERT INTO `music` VALUES ('196812493', '潜龙勿用', '郑云龙', 'http://localhost:8888/OnlineMusic/image/潜龙勿用.jpg', 'http://localhost:8888/OnlineMusic/audio/潜龙勿用.mp3', '03:12');
INSERT INTO `music` VALUES ('196815080', '谁', '曾至锋', 'http://localhost:8888/OnlineMusic/image/谁.jpg', 'http://localhost:8888/OnlineMusic/audio/谁.mp3', '02:17');
INSERT INTO `music` VALUES ('196898210', '威凤吟', '周深', 'http://localhost:8888/OnlineMusic/image/威凤吟.jpg', 'http://localhost:8888/OnlineMusic/audio/威凤吟.mp3', '04:01');
INSERT INTO `music` VALUES ('196926056', '别把我比下去', '沃啼', 'http://localhost:8888/OnlineMusic/image/别把我比下去.jpg', 'http://localhost:8888/OnlineMusic/audio/别把我比下去.mp3', '02:26');
INSERT INTO `music` VALUES ('196956874', '我是来揍你的(Live)', '戴佩妮&摩登兄弟刘宇宁', 'http://localhost:8888/OnlineMusic/image/我是来揍你的(Live).jpg', 'http://localhost:8888/OnlineMusic/audio/我是来揍你的(Live).mp3', '04:00');
INSERT INTO `music` VALUES ('196992370', '凌晨两点', '许琳', 'http://localhost:8888/OnlineMusic/image/凌晨两点.jpg', 'http://localhost:8888/OnlineMusic/audio/凌晨两点.mp3', '01:12');
INSERT INTO `music` VALUES ('197076764', '星合', 'all at once&赖美云', 'http://localhost:8888/OnlineMusic/image/星合.jpg', 'http://localhost:8888/OnlineMusic/audio/星合.mp3', '03:46');
INSERT INTO `music` VALUES ('197130345', 'All You Need Is Love', 'Katy Perry', 'http://localhost:8888/OnlineMusic/image/All You Need Is Love.jpg', 'http://localhost:8888/OnlineMusic/audio/All You Need Is Love.mp3', '03:26');
INSERT INTO `music` VALUES ('197220704', '穿梭星河', '梦然', 'http://localhost:8888/OnlineMusic/image/穿梭星河.jpg', 'http://localhost:8888/OnlineMusic/audio/穿梭星河.mp3', '04:27');
INSERT INTO `music` VALUES ('197262985', '我和2035有个约', '李汶翰&王博文&李承夕', 'http://localhost:8888/OnlineMusic/image/我和2035有个约.jpg', 'http://localhost:8888/OnlineMusic/audio/我和2035有个约.mp3', '03:33');
INSERT INTO `music` VALUES ('197635972', '情人', '李荣浩', 'https://img3.kuwo.cn/star/albumcover/500/13/65/559458480.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/0e2a8058c173dd3ac17a4e3bb050b3fd/618c7296/resource/n1/67/88/2718789371.mp3', '06:54');
INSERT INTO `music` VALUES ('197854121', '尽管如此，还是', '阿肆&徐佳莹', 'https://img2.kuwo.cn/star/albumcover/500/29/65/9508921.jpg', 'https://cp-sycdn.kuwo.cn/473134145cd4032c6586de0e08617402/618c7e0d/resource/n3/45/37/2554840847.mp3', '04:39');
INSERT INTO `music` VALUES ('203164', '西海情歌', '刀郎', 'http://localhost:8888/OnlineMusic/image/西海情歌.jpg', 'http://localhost:8888/OnlineMusic/audio/西海情歌.mp3', '05:44');
INSERT INTO `music` VALUES ('226043', '大约在冬季', '齐秦', 'http://localhost:8888/OnlineMusic/image/大约在冬季.jpg', 'http://localhost:8888/OnlineMusic/audio/大约在冬季.mp3', '03:53');
INSERT INTO `music` VALUES ('23657828', '好宝宝', '早教歌曲', 'http://localhost:8888/OnlineMusic/image/好宝宝.jpg', 'http://localhost:8888/OnlineMusic/audio/好宝宝.mp3', '03:07');
INSERT INTO `music` VALUES ('23676164', '爱河', '神马乐团', 'http://localhost:8888/OnlineMusic/image/爱河.jpg', 'http://localhost:8888/OnlineMusic/audio/爱河.mp3', '05:12');
INSERT INTO `music` VALUES ('28513310', '雪宝宝', '早教歌曲', 'http://localhost:8888/OnlineMusic/image/雪宝宝.jpg', 'http://localhost:8888/OnlineMusic/audio/雪宝宝.mp3', '01:39');
INSERT INTO `music` VALUES ('28879676', '阿衣莫', '阿吉太组合', 'http://localhost:8888/OnlineMusic/image/阿衣莫.jpg', 'http://localhost:8888/OnlineMusic/audio/阿衣莫.mp3', '05:14');
INSERT INTO `music` VALUES ('29569620', '世界上的另一个我', '郭采洁&阿肆', 'https://img3.kuwo.cn/star/albumcover/500/59/7/2569133597.jpg', 'https://ck-sycdn.kuwo.cn/37f59b3e8d065b6ac53497bc9450e888/618c7e0e/resource/n3/72/57/2670927391.mp3', '03:58');
INSERT INTO `music` VALUES ('307486', '我爱的人', '林宥嘉', 'https://img2.kuwo.cn/star/albumcover/500/30/93/3240981406.jpg', 'https://other-web-ra01-sycdn.kuwo.cn/c81e82e82cadeee16f4eecef0f805c59/618bce99/resource/n1/192/30/31/232219022.mp3', '04:27');
INSERT INTO `music` VALUES ('3138971', '龙的传人', '王力宏', 'https://img2.kuwo.cn/star/albumcover/500/0/35/423765565.jpg', 'https://other-web-ra01-sycdn.kuwo.cn/609c52ca540b9ae2960e8290cf21ede3/618bcee6/resource/n3/320/56/41/4270587991.mp3', '04:43');
INSERT INTO `music` VALUES ('315892', 'Last Dance', '伍佰 And China Blue', 'http://localhost:8888/OnlineMusic/image/Last Dance.jpg', 'http://localhost:8888/OnlineMusic/audio/Last Dance.mp3', '04:31');
INSERT INTO `music` VALUES ('32442107', '戒烟', '李荣浩', 'https://img1.kuwo.cn/star/albumcover/500/33/59/4158242717.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/91a2d50b6590de3390a32a1923f7491a/618c7296/resource/n1/45/46/3686353905.mp3', '04:54');
INSERT INTO `music` VALUES ('32673026', '是风动', '银临&河图', 'http://localhost:8888/OnlineMusic/image/是风动.jpg', 'http://localhost:8888/OnlineMusic/audio/是风动.mp3', '04:48');
INSERT INTO `music` VALUES ('326980', '容易受伤的女人(国语版)', '王菲', 'https://img4.kuwo.cn/star/albumcover/500/5/83/3408860767.jpg', 'https://other-web-ra01-sycdn.kuwo.cn/ce098d3b436d914ae9980c78d9946d37/618c7b1c/resource/n3/192/60/67/2990719694.mp3', '04:20');
INSERT INTO `music` VALUES ('3426427', '预谋邂逅', '阿肆', 'https://img2.kuwo.cn/star/albumcover/500/56/85/762537431.jpg', 'https://other-web-ri01-sycdn.kuwo.cn/aba2da37778f9925a17b217fa4e1575e/618c7e0f/resource/n2/14/42/3301713248.mp3', '04:16');
INSERT INTO `music` VALUES ('3426431', '我在人民广场吃炸鸡', '阿肆', 'https://img2.kuwo.cn/star/albumcover/500/56/85/762537431.jpg', 'https://other-web-rf01-sycdn.kuwo.cn/a38cb338695937b97ee3e7420432d8fa/618c7e0e/resource/n3/6/60/2377194493.mp3', '03:35');
INSERT INTO `music` VALUES ('3514083', '李白', '李荣浩', 'https://img1.kuwo.cn/star/albumcover/500/44/31/1093414045.jpg', 'https://other-web-rd01-sycdn.kuwo.cn/f5d933cf542e7ed9f88f1d776ddce4bf/618c7295/resource/n2/15/16/3858894549.mp3', '04:33');
INSERT INTO `music` VALUES ('3514084', '模特', '李荣浩', 'https://img1.kuwo.cn/star/albumcover/500/44/31/1093414045.jpg', 'https://other-web-rd01-sycdn.kuwo.cn/aab27193cc16bf64d688817d2c4b02aa/618c7296/resource/n3/56/63/71348555.mp3', '05:06');
INSERT INTO `music` VALUES ('352589', '被风吹过的夏天', '林俊杰&金莎', 'https://img1.kuwo.cn/star/albumcover/500/81/72/704369943.jpg', 'https://other-web-ra01-sycdn.kuwo.cn/2a7187fdc37bcf26886444b34b0656b1/618c7aba/resource/n1/192/35/78/715435302.mp3', '04:12');
INSERT INTO `music` VALUES ('36747696', '女儿国', '张靓颖&李荣浩', 'https://img2.kuwo.cn/star/albumcover/500/51/14/419812497.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/4f097640b9081ed1736267fb9a0e7c09/618c7296/resource/n3/3/33/3068418278.mp3', '05:03');
INSERT INTO `music` VALUES ('373778', '爱的就是你', '王力宏', 'http://localhost:8888/OnlineMusic/image/爱的就是你.jpg', 'http://localhost:8888/OnlineMusic/audio/爱的就是你.mp3', '04:49');
INSERT INTO `music` VALUES ('388154', '残酷月光', '林宥嘉', 'https://img3.kuwo.cn/star/albumcover/500/52/0/2300721873.jpg', 'https://other-web-rc01-sycdn.kuwo.cn/045e9033b03931232531c0a1c830d812/618bce98/resource/n3/3/39/2340341827.mp3', '04:29');
INSERT INTO `music` VALUES ('388158', '神秘嘉宾', '林宥嘉', 'https://img3.kuwo.cn/star/albumcover/500/52/0/2300721873.jpg', 'https://ec-sycdn.kuwo.cn/55616975b11a56853c125b00a52f9e97/618bce99/resource/n1/22/10/3067702808.mp3', '05:30');
INSERT INTO `music` VALUES ('39947305', 'Lucky Strike', 'Maroon 5', 'http://localhost:8888/OnlineMusic/image/Lucky Strike.jpg', 'http://localhost:8888/OnlineMusic/audio/Lucky Strike.mp3', '03:05');
INSERT INTO `music` VALUES ('40495328', '喜欢', '阿肆', 'https://img1.kuwo.cn/star/albumcover/500/71/79/2407218741.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/18d148d3b2caebd8d673a7ee302e9795/618c7e0e/resource/n3/5/18/3379295606.mp3', '04:10');
INSERT INTO `music` VALUES ('40843100', '石头剪刀布', '贝瓦儿歌', 'http://localhost:8888/OnlineMusic/image/石头剪刀布.jpg', 'http://localhost:8888/OnlineMusic/audio/石头剪刀布.mp3', '03:01');
INSERT INTO `music` VALUES ('41189743', 'One little finger', '宝宝巴士', 'http://localhost:8888/OnlineMusic/image/One little finger.jpg', 'http://localhost:8888/OnlineMusic/audio/One little finger.mp3', '01:45');
INSERT INTO `music` VALUES ('41189846', 'Bingo', '宝宝巴士', 'http://localhost:8888/OnlineMusic/image/Bingo.jpg', 'http://localhost:8888/OnlineMusic/audio/Bingo.mp3', '01:38');
INSERT INTO `music` VALUES ('41382122', '起床歌', '阿肆', 'https://img3.kuwo.cn/star/albumcover/500/59/46/1123714426.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/c07e2ebf203986f0f5a8454fca67acc2/618c7e10/resource/n3/22/84/3014088241.mp3', '03:18');
INSERT INTO `music` VALUES ('4799031', '护花使者', '李克勤', 'http://localhost:8888/OnlineMusic/image/护花使者.jpg', 'http://localhost:8888/OnlineMusic/audio/护花使者.mp3', '03:17');
INSERT INTO `music` VALUES ('493281', '风的季节', 'Soler', 'http://localhost:8888/OnlineMusic/image/风的季节.jpg', 'http://localhost:8888/OnlineMusic/audio/风的季节.mp3', '04:09');
INSERT INTO `music` VALUES ('51682400', '微风细雨 (2013追梦巨星耀北京邓丽君60周年纪念演唱会)', '王菲', 'https://img2.kuwo.cn/star/starheads/500/36/85/2653431369.jpg', 'https://ny01-sycdn.kuwo.cn/14e6f1d64b1a72bd81b18575eff59dd2/618c7b1b/resource/n2/8/96/3313635644.mp3', '03:20');
INSERT INTO `music` VALUES ('51801293', '仰世而来', '阿肆', 'https://img1.kuwo.cn/star/albumcover/500/86/34/1184412474.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/d18b2d437db6f3e859a4d54a30c8beab/618c7e0f/resource/n3/26/65/369729543.mp3', '04:38');
INSERT INTO `music` VALUES ('54358656', '好宝宝', '贝瓦儿歌&高维那', 'http://localhost:8888/OnlineMusic/image/好宝宝.jpg', 'http://localhost:8888/OnlineMusic/audio/好宝宝.mp3', '02:57');
INSERT INTO `music` VALUES ('54809340', '毛', '宇野誠一郎', 'https://img4.kuwo.cn/star/albumcover/500/30/92/3189025836.jpg', 'https://sb-sycdn.kuwo.cn/fb674c82edb225bb6f27c0adb0771398/618d09af/resource/n1/28/88/2946597860.mp3', '04:12');
INSERT INTO `music` VALUES ('58446884', '喜欢(Live)', '阿肆', 'https://img3.kuwo.cn/star/starheads/500/8/4/2588073624.jpg', 'https://sf-sycdn.kuwo.cn/0f048a3df574e576b38326423ad69afa/618c7e0f/resource/n3/53/99/1105182812.mp3', '00:54');
INSERT INTO `music` VALUES ('58550', '后来', '刘若英', 'http://localhost:8888/OnlineMusic/image/后来.jpg', 'http://localhost:8888/OnlineMusic/audio/后来.mp3', '05:41');
INSERT INTO `music` VALUES ('59156062', '成全', '林宥嘉', 'https://img2.kuwo.cn/star/albumcover/500/40/2/1376132079.jpg', 'https://ed-sycdn.kuwo.cn/357dd92c9775c4f4f00978023fd7ff3c/618bce98/resource/n1/50/74/2726043910.mp3', '05:09');
INSERT INTO `music` VALUES ('608483', '初恋情人', '刘小慧', 'http://localhost:8888/OnlineMusic/image/初恋情人.jpg', 'http://localhost:8888/OnlineMusic/audio/初恋情人.mp3', '04:41');
INSERT INTO `music` VALUES ('6109152', '太想念', '彭筝', 'http://localhost:8888/OnlineMusic/image/太想念.jpg', 'http://localhost:8888/OnlineMusic/audio/太想念.mp3', '03:50');
INSERT INTO `music` VALUES ('614564', '说谎', '林宥嘉', 'https://img4.kuwo.cn/star/albumcover/500/19/4/3819650566.jpg', 'https://other-web-ra01-sycdn.kuwo.cn/719a990fdee86ae57ec38d7c7924b09e/618bce97/resource/n2/192/28/38/370307294.mp3', '04:25');
INSERT INTO `music` VALUES ('614567', '心酸', '林宥嘉', 'https://img4.kuwo.cn/star/albumcover/500/19/4/3819650566.jpg', 'https://other-web-ra01-sycdn.kuwo.cn/a123997a57b52635d5f29a0a9e60d802/618bce9a/resource/n3/320/28/42/1416663405.mp3', '04:10');
INSERT INTO `music` VALUES ('6363709', '直到你降临', '阿肆', 'https://img2.kuwo.cn/star/albumcover/500/13/11/1955059533.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/2b8e8fed110149900b14fc398703acf7/618c7e0f/resource/n1/39/4/4272004197.mp3', '04:39');
INSERT INTO `music` VALUES ('6531868', '好心分手', '王力宏&卢巧音', 'https://img2.kuwo.cn/star/albumcover/500/42/83/1281413896.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/ba391f72bb7d1275a4a24b6ca44867f7/618bcee7/resource/n1/65/69/2382051706.mp3', '02:59');
INSERT INTO `music` VALUES ('666070', '天若有情', '影视原声', 'http://localhost:8888/OnlineMusic/image/天若有情.jpg', 'http://localhost:8888/OnlineMusic/audio/天若有情.mp3', '03:48');
INSERT INTO `music` VALUES ('6716068', '兜圈', '林宥嘉', 'https://img3.kuwo.cn/star/albumcover/500/80/53/4262362159.jpg', 'https://st-sycdn.kuwo.cn/b751dbc60885d805784f857218ec44ad/618bce99/resource/n1/29/81/779020182.mp3', '04:05');
INSERT INTO `music` VALUES ('6863659', '爸爸妈妈', '李荣浩', 'https://img2.kuwo.cn/star/albumcover/500/25/72/3579948989.jpg', 'https://other-web-rh01-sycdn.kuwo.cn/409bb03798e0d18f72b46c35f16ab3cc/618c7295/resource/n3/42/19/240014166.mp3', '04:44');
INSERT INTO `music` VALUES ('69956895', '祖国的花朵', '优秀少年（GOOD BOYS）', 'http://localhost:8888/OnlineMusic/image/祖国的花朵.jpg', 'http://localhost:8888/OnlineMusic/audio/祖国的花朵.mp3', '02:58');
INSERT INTO `music` VALUES ('71320542', '课间进行曲', '阿肆', 'https://img3.kuwo.cn/star/albumcover/500/61/93/4196836923.jpg', 'https://ss-sycdn.kuwo.cn/fd5f9e15456f5321d06f04f98cc51442/618c7e0e/resource/n3/77/85/3851461209.mp3', '02:27');
INSERT INTO `music` VALUES ('71936514', '忆戏 京师名伶', '双笙（陈元汐）', 'http://localhost:8888/OnlineMusic/image/忆戏 京师名伶.jpg', 'http://localhost:8888/OnlineMusic/audio/忆戏 京师名伶.mp3', '04:03');
INSERT INTO `music` VALUES ('71988945', '热爱105°C的你', '阿肆', 'https://img4.kuwo.cn/star/albumcover/500/14/32/2512037783.jpg', 'https://sr-sycdn.kuwo.cn/9154da67d24cda2e4fc0a2378d679362/618c7e0e/resource/n3/29/20/1632068246.mp3', '03:15');
INSERT INTO `music` VALUES ('72015933', '追寻年少的光', '林宥嘉&郁可唯', 'https://img1.kuwo.cn/star/albumcover/500/66/59/3413994937.jpg', 'https://sq-sycdn.kuwo.cn/472786cf114f2e225afed9b4eb17d199/618bce9a/resource/n1/74/21/3414894220.mp3', '04:52');
INSERT INTO `music` VALUES ('80458', '沉默是金', '张国荣', 'http://localhost:8888/OnlineMusic/image/沉默是金.jpg', 'http://localhost:8888/OnlineMusic/audio/沉默是金.mp3', '04:12');
INSERT INTO `music` VALUES ('83001418', '麻雀', '李荣浩', 'https://img3.kuwo.cn/star/albumcover/500/73/15/379034916.jpg', 'https://ec-sycdn.kuwo.cn/710e16f27ace6a2a96937c0582fa0137/618c7295/resource/n3/79/71/3886302342.mp3', '04:12');
INSERT INTO `music` VALUES ('83180587', '偏爱', '阿肆', 'https://img3.kuwo.cn/star/albumcover/500/84/81/3056693210.jpg', 'https://sw-sycdn.kuwo.cn/c6455064766c31a861d5d9eff26a2958/618c7e10/resource/n1/76/9/900337209.mp3', '03:15');
INSERT INTO `music` VALUES ('836053', '金刚经', '王菲', 'https://img2.kuwo.cn/star/albumcover/500/11/52/644903926.jpg', 'https://other-web-ra01-sycdn.kuwo.cn/8d1cbfec51f8bb43de0b820a81304317/618c7b1c/resource/n2/54/87/2420788772.mp3', '39:21');
INSERT INTO `music` VALUES ('844993', '需要人陪', '王力宏', 'https://img1.kuwo.cn/star/albumcover/500/7/31/3494839048.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/f3bd92425a484ab133b5bf8ac3b10621/618bcee5/resource/n3/35/22/2742626963.mp3', '04:11');
INSERT INTO `music` VALUES ('853270', '老街', '李荣浩', 'https://img2.kuwo.cn/star/albumcover/500/82/27/3094154924.jpg', 'https://other-web-rf01-sycdn.kuwo.cn/ff805b1b3583ff1cb5c9f4d261e5afac/618c7295/resource/n1/70/53/363024338.mp3', '05:19');
INSERT INTO `music` VALUES ('85419990', '缘分一道桥(Live)', '王力宏&谭维维', 'https://img3.kuwo.cn/star/albumcover/500/12/6/113865214.jpg', 'https://sr-sycdn.kuwo.cn/aeb429d559abba75ae105133b3c497ae/618bcee6/resource/n2/43/51/3013144121.mp3', '03:57');
INSERT INTO `music` VALUES ('86279129', '下辈子不一定还能遇见你', '陈雅森', 'http://localhost:8888/OnlineMusic/image/下辈子不一定还能遇见你.jpg', 'http://localhost:8888/OnlineMusic/audio/下辈子不一定还能遇见你.mp3', '03:58');
INSERT INTO `music` VALUES ('92572', '漫步人生路', '邓丽君', 'http://localhost:8888/OnlineMusic/image/漫步人生路.jpg', 'http://localhost:8888/OnlineMusic/audio/漫步人生路.mp3', '03:41');
INSERT INTO `music` VALUES ('941528', '因为爱情', '陈奕迅&王菲', 'https://img1.kuwo.cn/star/albumcover/500/34/38/2770038380.jpg', 'https://other-web-nf01-sycdn.kuwo.cn/c750437d71b9225f606b98f17bea476f/618c7b1b/resource/n1/9/11/2616007562.mp3', '03:36');
INSERT INTO `music` VALUES ('96338', '海阔天空', 'Beyond', 'http://localhost:8888/OnlineMusic/image/海阔天空.jpg', 'http://localhost:8888/OnlineMusic/audio/海阔天空.mp3', '05:22');
INSERT INTO `music` VALUES ('96822', '离别', '阿杜', 'http://localhost:8888/OnlineMusic/image/离别.jpg', 'http://localhost:8888/OnlineMusic/audio/离别.mp3', '03:52');
INSERT INTO `music` VALUES ('9889931', '嘿！小葵花', '贝瓦儿歌', 'http://localhost:8888/OnlineMusic/image/嘿！小葵花.jpg', 'http://localhost:8888/OnlineMusic/audio/嘿！小葵花.mp3', '03:23');
INSERT INTO `music` VALUES ('9918286', '致姗姗来迟的你', '阿肆&林宥嘉', 'https://img4.kuwo.cn/star/albumcover/500/62/36/3817881913.jpg', 'https://other-web-ri01-sycdn.kuwo.cn/5e364d0e3ffbb1dac6288fd9eff220ac/618bce98/resource/n1/32/36/534050028.mp3', '04:06');

-- ----------------------------
-- Table structure for recommend
-- ----------------------------
DROP TABLE IF EXISTS `recommend`;
CREATE TABLE `recommend`  (
  `rid` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `author` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `info` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `listencnt` int NULL DEFAULT NULL COMMENT '收听次数',
  PRIMARY KEY (`rid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of recommend
-- ----------------------------
INSERT INTO `recommend` VALUES ('1082685104', '每日最新单曲推荐', '酷小编', 'https://img1.kuwo.cn/star/userpl2015/10/13/1632991266148_132026710_500.jpg', '每日单曲推荐', 202389235);
INSERT INTO `recommend` VALUES ('2918750534', '【伤感】茶凉了、就别在续了', '水日皿', 'https://img1.kuwo.cn/star/userpl2015/25/47/1575544364009_130048625_500.jpg', '茶凉了、就别在续了。', 620513);
INSERT INTO `recommend` VALUES ('2988406473', '【经典怀旧】把岁月唱成昨日.', '古清风', 'https://img1.kuwo.cn/star/userpl2015/22/96/1585937003343_194859222_500.jpg', '无论岁月飘摇还是安宁,都是生命经历的味道,无论缘来缘去,都是生命里至美的点缀.', 3031937);
INSERT INTO `recommend` VALUES ('2993844456', '经典老歌：错过的是青春，爱过的是永远', '梦恃永恒v', 'https://img1.kuwo.cn/star/userpl2015/85/76/1586766224145_493167685_500.jpg', '怀念青涩纯真的时光，岁月一去不复返', 2715737);
INSERT INTO `recommend` VALUES ('3163360634', '【经典伤感】还没好好的感受，就走到了尽头。', 'Komorebi_', 'https://img1.kuwo.cn/star/userpl2015/10/35/1615379071926_540017810_500.jpg', '精选24首经典伤感歌曲，80后最爱听的伤感音乐，确确定不来听听吗？歌单灵感选自一一王菲《红豆》', 359389);

-- ----------------------------
-- Table structure for recommend_music
-- ----------------------------
DROP TABLE IF EXISTS `recommend_music`;
CREATE TABLE `recommend_music`  (
  `rmID` int NOT NULL AUTO_INCREMENT,
  `mid` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `rid` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`rmID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of recommend_music
-- ----------------------------
INSERT INTO `recommend_music` VALUES (1, '195827569', '1082685104');
INSERT INTO `recommend_music` VALUES (2, '197262985', '1082685104');
INSERT INTO `recommend_music` VALUES (3, '197220704', '1082685104');
INSERT INTO `recommend_music` VALUES (4, '197130345', '1082685104');
INSERT INTO `recommend_music` VALUES (5, '196679799', '1082685104');
INSERT INTO `recommend_music` VALUES (6, '197076764', '1082685104');
INSERT INTO `recommend_music` VALUES (7, '96338', '2988406473');
INSERT INTO `recommend_music` VALUES (8, '80458', '2988406473');
INSERT INTO `recommend_music` VALUES (9, '315892', '2993844456');
INSERT INTO `recommend_music` VALUES (10, '203164', '2993844456');
INSERT INTO `recommend_music` VALUES (11, '493281', '2993844456');
INSERT INTO `recommend_music` VALUES (12, '23676164', '2918750534');
INSERT INTO `recommend_music` VALUES (13, '164616', '3163360634');
INSERT INTO `recommend_music` VALUES (14, '96822', '3163360634');
INSERT INTO `recommend_music` VALUES (15, '58550', '3163360634');
INSERT INTO `recommend_music` VALUES (16, '226043', '3163360634');
INSERT INTO `recommend_music` VALUES (17, '39947305', '1334859587');
INSERT INTO `recommend_music` VALUES (18, '373778', '1081853570');
INSERT INTO `recommend_music` VALUES (19, '71936514', '2952206467');
INSERT INTO `recommend_music` VALUES (20, '32673026', '2952206467');
INSERT INTO `recommend_music` VALUES (21, '92572', '2833376845');
INSERT INTO `recommend_music` VALUES (22, '666070', '2833376845');
INSERT INTO `recommend_music` VALUES (23, '159783', '2833376845');
INSERT INTO `recommend_music` VALUES (24, '4799031', '2833376845');
INSERT INTO `recommend_music` VALUES (25, '608483', '2833376845');
INSERT INTO `recommend_music` VALUES (26, '28513310', '2832466831');
INSERT INTO `recommend_music` VALUES (27, '23657828', '2832466831');
INSERT INTO `recommend_music` VALUES (28, '69956895', '2832466831');
INSERT INTO `recommend_music` VALUES (29, '41189743', '2832466831');
INSERT INTO `recommend_music` VALUES (30, '40843100', '2832466831');
INSERT INTO `recommend_music` VALUES (31, '41189846', '2832466831');
INSERT INTO `recommend_music` VALUES (32, '54358656', '2832466831');
INSERT INTO `recommend_music` VALUES (33, '9889931', '2832466831');
INSERT INTO `recommend_music` VALUES (34, '148411214', '1082685104');
INSERT INTO `recommend_music` VALUES (35, '150373516', '1082685104');
INSERT INTO `recommend_music` VALUES (36, '150602055', '1082685104');
INSERT INTO `recommend_music` VALUES (37, '164616', '2918750534');
INSERT INTO `recommend_music` VALUES (38, '190580670', '2918750534');
INSERT INTO `recommend_music` VALUES (39, '190591966', '2918750534');
INSERT INTO `recommend_music` VALUES (40, '96822', '2918750534');
INSERT INTO `recommend_music` VALUES (41, '608483', '2918750534');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `Uid` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Uname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sex` int NULL DEFAULT NULL,
  `avater_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Upassword` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Uid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3119004028', '邹泽世', 0, 'http://localhost:8888/OnlineMusic/User_Avater/第十周.jpg', '123456');
INSERT INTO `user` VALUES ('3119006961', '庄少哲', 0, 'http://localhost:8888/OnlineMusic/User_Avater/第十周.jpg', '123456');
INSERT INTO `user` VALUES ('3119009371', '许梓蔚1', 0, 'http://localhost:8888/OnlineMusic/User_Avater/第十周.jpg', '123456');

SET FOREIGN_KEY_CHECKS = 1;
