/*
Navicat MySQL Data Transfer

Source Server         : 201db
Source Server Version : 50559
Source Host           : 192.168.1.201:3306
Source Database       : test_resume

Target Server Type    : MYSQL
Target Server Version : 50559
File Encoding         : 65001

Date: 2018-12-06 09:57:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for base_info
-- ----------------------------
DROP TABLE IF EXISTS `base_info`;
CREATE TABLE `base_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL COMMENT '姓名',
  `age` tinyint(3) NOT NULL COMMENT '年龄',
  `phone` varchar(20) NOT NULL COMMENT ' 手机号码',
  `education` varchar(8) NOT NULL COMMENT '学历',
  `experience` varchar(10) NOT NULL COMMENT '经验年限',
  `introduction` char(150) NOT NULL COMMENT '简介',
  `create_time` datetime NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for comprehensive_capacity
-- ----------------------------
DROP TABLE IF EXISTS `comprehensive_capacity`;
CREATE TABLE `comprehensive_capacity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `base_id` int(11) NOT NULL COMMENT 'base_info.id',
  `tag_id` int(11) NOT NULL COMMENT '能力标签id',
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for education_experience
-- ----------------------------
DROP TABLE IF EXISTS `education_experience`;
CREATE TABLE `education_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `base_id` int(11) NOT NULL COMMENT 'base_info.id',
  `school` varchar(30) NOT NULL COMMENT '学校',
  `specialities` varchar(30) NOT NULL COMMENT '专业',
  `eduction` varchar(30) NOT NULL COMMENT '学历',
  `enrollment_time` date NOT NULL COMMENT '入学时间',
  `graduation_time` date NOT NULL COMMENT '毕业时间',
  `create_time` datetime NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for project_experience
-- ----------------------------
DROP TABLE IF EXISTS `project_experience`;
CREATE TABLE `project_experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `base_id` int(11) NOT NULL COMMENT 'base_info.id',
  `name` varchar(255) NOT NULL COMMENT '项目名称',
  `company` varchar(50) NOT NULL COMMENT '公司',
  `description` varchar(255) NOT NULL COMMENT '项目描述',
  `start_time` date NOT NULL COMMENT '开始时间',
  `end_time` date NOT NULL COMMENT '结束时间',
  `create_time` datetime NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(32) NOT NULL COMMENT '密码',
  `emial` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
