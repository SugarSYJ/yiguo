/*
Navicat MySQL Data Transfer

Source Server         : yiguo
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yiguo

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-08 11:20:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ind
-- ----------------------------
DROP TABLE IF EXISTS `ind`;
CREATE TABLE `ind` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ind
-- ----------------------------
INSERT INTO `ind` VALUES ('1', '../images/index/a1.jpg', '2018-02-06 16:46:24');
INSERT INTO `ind` VALUES ('2', '../images/index/a2.jpg', '2018-02-06 16:46:26');
INSERT INTO `ind` VALUES ('3', '../images/index/a3.jpg', '2018-02-06 16:46:28');
INSERT INTO `ind` VALUES ('4', '../images/index/a4.jpg', '2018-02-06 16:46:29');
INSERT INTO `ind` VALUES ('5', '../images/index/a5.jpg', '2018-02-06 16:46:31');
INSERT INTO `ind` VALUES ('6', '../images/index/a6.jpg', '2018-02-06 16:46:32');
INSERT INTO `ind` VALUES ('7', '../images/index/a7.jpg', '2018-02-06 16:46:34');
INSERT INTO `ind` VALUES ('8', '../images/index/a8.jpg', '2018-02-06 16:46:49');
INSERT INTO `ind` VALUES ('9', '../images/index/a9.jpg', '2018-02-06 16:46:50');
INSERT INTO `ind` VALUES ('10', '../images/index/a10.jpg', '2018-02-06 16:46:54');
INSERT INTO `ind` VALUES ('11', '../images/index/a11.jpg', '2018-02-06 16:46:56');
INSERT INTO `ind` VALUES ('12', '../images/index/a12.jpg', '2018-02-06 16:46:58');
INSERT INTO `ind` VALUES ('13', '../images/index/a13.jpg', '2018-02-06 16:47:00');
INSERT INTO `ind` VALUES ('14', '../images/index/a14.jpg', '2018-02-06 16:47:21');
INSERT INTO `ind` VALUES ('15', '../images/index/a15.jpg', '2018-02-06 16:47:35');
INSERT INTO `ind` VALUES ('16', '../images/index/a16.jpg', '2018-02-06 16:47:36');
INSERT INTO `ind` VALUES ('17', '../images/index/a17.jpg', '2018-02-06 16:47:38');
INSERT INTO `ind` VALUES ('18', '../images/index/a18.jpg', '2018-02-06 16:47:40');
INSERT INTO `ind` VALUES ('19', '../images/index/a19.jpg', '2018-02-06 16:47:41');
INSERT INTO `ind` VALUES ('20', '../images/index/a20.jpg', '2018-02-06 16:47:42');
INSERT INTO `ind` VALUES ('21', '../images/index/a21.jpg', '2018-02-06 16:47:43');
INSERT INTO `ind` VALUES ('22', '../images/index/a22.jpg', '2018-02-06 16:48:04');
INSERT INTO `ind` VALUES ('23', '../images/index/a23.jpg', '2018-02-06 16:48:04');
INSERT INTO `ind` VALUES ('24', '../images/index/a24.jpg', '2018-02-06 16:48:05');
INSERT INTO `ind` VALUES ('25', '../images/index/a25.jpg', '2018-02-06 16:48:08');
INSERT INTO `ind` VALUES ('26', '../images/index/a28.jpg', '2018-02-06 19:02:58');
INSERT INTO `ind` VALUES ('27', '../images/index/a27.jpg', '2018-02-06 16:48:10');
INSERT INTO `ind` VALUES ('28', '../images/index/a26.jpg', '2018-02-06 19:03:03');
INSERT INTO `ind` VALUES ('29', '../images/index/a29.jpg', '2018-02-06 16:48:20');
INSERT INTO `ind` VALUES ('30', '../images/index/a30.jpg', '2018-02-06 16:48:25');
INSERT INTO `ind` VALUES ('31', '../images/index/a31.jpg', '2018-02-06 16:48:26');
INSERT INTO `ind` VALUES ('32', '../images/index/a32.jpg', '2018-02-06 16:48:27');
INSERT INTO `ind` VALUES ('33', '../images/index/a33.jpg', '2018-02-06 16:48:28');
INSERT INTO `ind` VALUES ('34', '../images/index/a36.jpg', '2018-02-06 19:07:42');
INSERT INTO `ind` VALUES ('35', '../images/index/a35.jpg', '2018-02-06 16:48:30');
INSERT INTO `ind` VALUES ('36', '../images/index/a34.jpg', '2018-02-06 19:07:45');
INSERT INTO `ind` VALUES ('37', '../images/index/a37.jpg', '2018-02-06 16:48:32');
INSERT INTO `ind` VALUES ('38', '../images/index/a38.jpg', '2018-02-06 16:48:39');
INSERT INTO `ind` VALUES ('39', '../images/index/a39.jpg', '2018-02-06 16:48:41');
INSERT INTO `ind` VALUES ('40', '../images/index/a40.jpg', '2018-02-06 16:48:43');
INSERT INTO `ind` VALUES ('41', '../images/index/a41.jpg', '2018-02-06 16:48:45');
INSERT INTO `ind` VALUES ('42', '../images/index/a44.jpg', '2018-02-06 19:08:09');
INSERT INTO `ind` VALUES ('43', '../images/index/a43.jpg', '2018-02-06 16:48:49');
INSERT INTO `ind` VALUES ('44', '../images/index/a42.jpg', '2018-02-06 19:08:12');
INSERT INTO `ind` VALUES ('45', '../images/index/a45.jpg', '2018-02-06 16:48:54');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `imgurl_1` varchar(255) DEFAULT NULL,
  `imgurl_2` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `dds` varchar(255) DEFAULT NULL,
  `dai` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=112 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '内蒙古散养羊腩块500g', '../images/list/b1.jpg', '../images/list/c1.jpg', '../images/list/d1.jpg', '56.50', '促', '鲜会馆满减专场', '500g/袋', '2018-02-05 14:58:34');
INSERT INTO `list` VALUES ('2', '内蒙古散养羊肉粒400g', '../images/list/b2.jpg', '../images/list/c2.jpg', '../images/list/d2.jpg', '55.90', '促', '鲜会馆满减专场', '400g/袋', '2018-02-05 14:58:49');
INSERT INTO `list` VALUES ('3', '内蒙古散养羊蝎子500g', '../images/list/b3.jpg', '../images/list/c3.jpg', '../images/list/d3.jpg', '36.90', '促', '该商品不与U币、其他优惠券、现金券及抵用卡同享', '500g/袋', '2018-02-05 14:58:56');
INSERT INTO `list` VALUES ('4', '内蒙古散养羊寸排500g', '../images/list/b4.jpg', '../images/list/c4.jpg', '../images/list/d4.jpg', '59.90', '促', '该商品不与U币、其他优惠券、现金券及抵用卡同享', '500g/袋', '2018-02-05 14:59:01');
INSERT INTO `list` VALUES ('5', '内蒙古散养法式单骨羊排500g', '../images/list/b5.jpg', '../images/list/c5.jpg', '../images/list/d5.jpg', '69.80', '促', '鲜会馆满减专场', '500g/袋', '2018-02-05 14:59:05');
INSERT INTO `list` VALUES ('6', '内蒙古散养带皮羊肉块500g', '../images/list/b6.jpg', '../images/list/c6.jpg', '../images/list/d6.jpg', '56.50', '促', '鲜会馆满减专场', '500g/袋', '2018-02-05 14:59:08');
INSERT INTO `list` VALUES ('7', '内蒙羔羊肉卷250g', '../images/list/b7.jpg', '../images/list/c7.jpg', '../images/list/d7.jpg', '25.90', '促', '该商品不与U币、其他优惠券、现金券及抵用卡同享', '250g/袋', '2018-02-05 14:59:16');
INSERT INTO `list` VALUES ('8', '民维大牧汗上脑羔羊肉200g', '../images/list/b8.jpg', '../images/list/c8.jpg', '../images/list/d8.jpg', '39.90', '促', '该商品不与U币、其他优惠券、现金券及抵用卡同享', '200g/袋', '2018-02-05 14:59:22');
INSERT INTO `list` VALUES ('9', '民维大牧汗羊寸排500g', '../images/list/b9.jpg', '../images/list/c9.jpg', '../images/list/d9.jpg', '49.90', '促', '鲜会馆满减专场', '500g/袋', '2018-02-05 14:59:26');
INSERT INTO `list` VALUES ('10', '原膳新西兰精制羔羊卷500g', '../images/list/b10.jpg', '../images/list/c10.jpg', '../images/list/d10.jpg', '49.00', '促', '该商品不与U币、其他优惠券、现金券及抵用卡同享', '500g/袋', '2018-02-05 14:59:29');
INSERT INTO `list` VALUES ('11', '原膳新西兰精制羔羊卷500g', '../images/list/b11.jpg', '../images/list/c11.jpg', '../images/list/d11.jpg', '69.00', '促', '该商品不与U币、其他优惠券、现金券及抵用卡同享', '500g/袋', '2018-02-05 14:59:32');
INSERT INTO `list` VALUES ('12', '原膳新西兰精制羔羊卷500g', '../images/list/b12.jpg', '../images/list/c12.jpg', '../images/list/d12.jpg', '49.00', '促', '鲜会馆满减专场', '500g/袋', '2018-02-05 14:59:37');
INSERT INTO `list` VALUES ('13', '庄野牧场羔羊肉片560g', '../images/list/b13.jpg', '../images/list/c13.jpg', '../images/list/d13.jpg', '43.80', '促', '鲜会馆满减专场', '560g/袋', '2018-02-05 14:59:43');
INSERT INTO `list` VALUES ('14', '内蒙古散养带皮羊肉块300g', '../images/list/b14.jpg', '../images/list/c14.jpg', '../images/list/d14.jpg', '46.90', '促', '鲜会馆满减专场', '300g/袋', '2018-02-05 14:59:49');
INSERT INTO `list` VALUES ('15', '内蒙古散养法式单骨羊排600g', '../images/list/b15.jpg', '../images/list/c15.jpg', '../images/list/d15.jpg', '58.80', '促', '该商品不与U币、其他优惠券、现金券及抵用卡同享', '600g/袋', '2018-02-05 14:59:55');
INSERT INTO `list` VALUES ('16', '民维大牧汗羊寸排400g', '../images/list/b16.jpg', '../images/list/c16.jpg', '../images/list/d16.jpg', '56.00', '促', '该商品不与U币、其他优惠券、现金券及抵用卡同享', '400g/袋', '2018-02-05 15:00:01');
INSERT INTO `list` VALUES ('17', '原膳新西兰精制羔羊卷600g', '../images/list/b17.jpg', '../images/list/c17.jpg', '../images/list/d17.jpg', '47.80', '促', '鲜会馆满减专场', '600g/袋', '2018-02-05 15:00:06');
INSERT INTO `list` VALUES ('18', '内蒙古散养羊蝎子500g', '../images/list/b18.jpg', '../images/list/c18.jpg', '../images/list/d18.jpg', '59.70', '促', '该商品不与U币、其他优惠券、现金券及抵用卡同享', '500g/袋', '2018-02-05 15:00:09');
INSERT INTO `list` VALUES ('19', '原膳新西兰精制羔羊卷500g', '../images/list/b19.jpg', '../images/list/c19.jpg', '../images/list/d19.jpg', '48.80', '促', '该商品不与U币、其他优惠券、现金券及抵用卡同享', '500g/袋', '2018-02-05 15:00:14');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tel` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('17', '13413413411', '96e79218965eb72c92a549dd5a330112', '2018-02-08 10:20:56');
INSERT INTO `user` VALUES ('16', '13411111119', '96e79218965eb72c92a549dd5a330112', '2018-02-08 10:17:23');
INSERT INTO `user` VALUES ('14', '', 'd41d8cd98f00b204e9800998ecf8427e', '2018-02-07 20:59:34');
SET FOREIGN_KEY_CHECKS=1;
