-- MariaDB dump 10.19  Distrib 10.9.3-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: menelas
-- ------------------------------------------------------
-- Server version	10.9.3-MariaDB-1:10.9.3+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `date_exercise_seance`
--

DROP TABLE IF EXISTS `date_exercise_seance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `date_exercise_seance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_date_seance` int(11) DEFAULT NULL,
  `id_exercise_seance` int(11) DEFAULT NULL,
  `sets` int(11) DEFAULT NULL,
  `reps` varchar(50) DEFAULT NULL,
  `weight` varchar(50) DEFAULT NULL,
  `rest` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_des_ds` (`id_date_seance`),
  KEY `fk_des_e` (`id_exercise`),
  CONSTRAINT `fk_des_ds` FOREIGN KEY (`id_date_seance`) REFERENCES `date_seance` (`id`),
  CONSTRAINT `fk_des_e` FOREIGN KEY (`id_exercise`) REFERENCES `exercise` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `date_exercise_seance`
--

LOCK TABLES `date_exercise_seance` WRITE;
/*!40000 ALTER TABLE `date_exercise_seance` DISABLE KEYS */;
/*!40000 ALTER TABLE `date_exercise_seance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `date_seance`
--

DROP TABLE IF EXISTS `date_seance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `date_seance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_seance` int(11) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ds_seance` (`id_seance`),
  CONSTRAINT `fk_ds_seance` FOREIGN KEY (`id_seance`) REFERENCES `seance` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `date_seance`
--

LOCK TABLES `date_seance` WRITE;
/*!40000 ALTER TABLE `date_seance` DISABLE KEYS */;
/*!40000 ALTER TABLE `date_seance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exercise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_muscle` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `image_url` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_exercise_muscle` (`id_muscle`),
  KEY `fk_exercise_user` (`id_user`),
  CONSTRAINT `fk_exercise_muscle` FOREIGN KEY (`id_muscle`) REFERENCES `muscle` (`id`),
  CONSTRAINT `fk_exercise_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
INSERT INTO `exercise` VALUES
(1,1,1,'Crunch',NULL,NULL),
(2,1,1,'Planche',NULL,NULL),
(3,1,1,'Releve de jambes',NULL,NULL),
(4,2,1,'Curl barre pronation',NULL,NULL),
(5,3,1,'Curl barre EZ supination',NULL,NULL),
(6,3,1,'Curl araignee',NULL,NULL),
(7,3,1,'Curl marteau',NULL,NULL),
(8,4,1,'Tractions',NULL,NULL),
(9,4,1,'Tirage vertical machine',NULL,NULL),
(10,4,1,'Tirage horizontal machine',NULL,NULL),
(11,4,1,'Rowing barre',NULL,NULL),
(12,4,1,'Souleve de terre',NULL,NULL),
(13,5,1,'Developpe militaire barre',NULL,NULL),
(14,5,1,'Elevations laterales',NULL,NULL),
(15,5,1,'Face pull',NULL,NULL),
(16,6,1,'Fentes avant avec halteres',NULL,NULL),
(17,6,1,'Hip thrust',NULL,NULL),
(18,7,1,'Curl jambe assis',NULL,NULL),
(19,7,1,'Souleve de terre roumain',NULL,NULL),
(20,8,1,'Superman',NULL,NULL),
(21,9,1,'Extension mollets a la barre debout',NULL,NULL),
(22,9,1,'Extension mollets a la machine assis',NULL,NULL),
(23,9,1,'Extensions mollets a la presse',NULL,NULL),
(24,10,1,'Developpe couche a la barre',NULL,NULL),
(25,10,1,'Developpe incline au halteres',NULL,NULL),
(26,10,1,'Dips',NULL,NULL),
(27,10,1,'Pompes',NULL,NULL),
(28,11,1,'Squat barre',NULL,NULL),
(29,11,1,'Presse a cuisses',NULL,NULL),
(30,11,1,'Fentes',NULL,NULL),
(31,11,1,'Extensions de jambes',NULL,NULL),
(32,12,1,'Shrug avant a la barre',NULL,NULL),
(33,13,1,'Developpe couche a la barre prise serree',NULL,NULL),
(34,13,1,'Barre front',NULL,NULL),
(35,13,1,'Extension triceps poulie haute',NULL,NULL);
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercise_seance`
--

DROP TABLE IF EXISTS `exercise_seance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exercise_seance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_exercise` int(11) DEFAULT NULL,
  `id_seance` int(11) DEFAULT NULL,
  `sets` int(11) DEFAULT NULL,
  `reps` varchar(50) DEFAULT NULL,
  `weight` varchar(50) DEFAULT NULL,
  `rest` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_es_exercice` (`id_exercise`),
  KEY `fk_es_seance` (`id_seance`),
  CONSTRAINT `fk_es_exercice` FOREIGN KEY (`id_exercise`) REFERENCES `exercise` (`id`),
  CONSTRAINT `fk_es_seance` FOREIGN KEY (`id_seance`) REFERENCES `seance` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise_seance`
--

LOCK TABLES `exercise_seance` WRITE;
/*!40000 ALTER TABLE `exercise_seance` DISABLE KEYS */;
INSERT INTO `exercise_seance` VALUES
(1,24,1,3,'10-10-10','30-30-30','02:00:00'),
(2,9,1,3,'10-10-10','27-27-27','02:00:00'),
(3,29,1,3,'10-10-10','60-60-60','02:00:00'),
(4,14,1,3,'15-15-15','4-4-4','01:30:00'),
(5,4,1,3,'12-12-12','10-10-10','01:30:00'),
(6,4,1,3,'12-12-12','10-10-10','01:30:00');
/*!40000 ALTER TABLE `exercise_seance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `muscle`
--

DROP TABLE IF EXISTS `muscle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `muscle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muscle`
--

LOCK TABLES `muscle` WRITE;
/*!40000 ALTER TABLE `muscle` DISABLE KEYS */;
INSERT INTO `muscle` VALUES
(1,'Abdominaux',NULL),
(2,'Avant-bras',NULL),
(3,'Biceps',NULL),
(4,'Dos',NULL),
(5,'Epaules',NULL),
(6,'Fessiers',NULL),
(7,'Ischio-jambiers',NULL),
(8,'Lombaires',NULL),
(9,'Mollets',NULL),
(10,'Pectoraux',NULL),
(11,'Quadriceps',NULL),
(12,'Trapezes',NULL),
(13,'Triceps',NULL);
/*!40000 ALTER TABLE `muscle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `param`
--

DROP TABLE IF EXISTS `param`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `param` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `valeur_num` decimal(10,0) DEFAULT NULL,
  `valeur_alpha` varchar(250) DEFAULT NULL,
  `valeur_date` datetime DEFAULT NULL,
  `valeur_time` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `param`
--

LOCK TABLES `param` WRITE;
/*!40000 ALTER TABLE `param` DISABLE KEYS */;
/*!40000 ALTER TABLE `param` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seance`
--

DROP TABLE IF EXISTS `seance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_seance_group` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `notes` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_seance_user` (`id_user`),
  KEY `fk_seance_group` (`id_seance_group`),
  CONSTRAINT `fk_seance_group` FOREIGN KEY (`id_seance_group`) REFERENCES `seance_group` (`id`),
  CONSTRAINT `fk_seance_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seance`
--

LOCK TABLES `seance` WRITE;
/*!40000 ALTER TABLE `seance` DISABLE KEYS */;
INSERT INTO `seance` VALUES
(1,1,1,'Full Body debutant',NULL);
/*!40000 ALTER TABLE `seance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seance_group`
--

DROP TABLE IF EXISTS `seance_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seance_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_group_user` (`id_user`),
  CONSTRAINT `fk_group_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seance_group`
--

LOCK TABLES `seance_group` WRITE;
/*!40000 ALTER TABLE `seance_group` DISABLE KEYS */;
INSERT INTO `seance_group` VALUES
(1,1,'Seances predefinies',NULL);
/*!40000 ALTER TABLE `seance_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(100) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
(1,'jeremy.krzeczowski77@gmail.com','admin','admin','b36703323f5e057b1fd5eb515b30d4c3c295eb47a69fbb6935e35de888df84f0',174,73,'0123456789'),
(2,'jeremy.krzeczowski77@gmail.com','Krzeczowski','Jeremy','b36703323f5e057b1fd5eb515b30d4c3c295eb47a69fbb6935e35de888df84f0',174,73,'0123456789'),
(3,'nico.dvne@gmail.com','Davenne','Nicolas','b36703323f5e057b1fd5eb515b30d4c3c295eb47a69fbb6935e35de888df84f0',174,73,'0123456789');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-03 10:08:31
