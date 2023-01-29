-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : mariadb:3306
-- Généré le : lun. 16 jan. 2023 à 15:46
-- Version du serveur : 10.9.2-MariaDB-1:10.9.2+maria~ubu2204
-- Version de PHP : 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `menelas`
--


-- --------------------------------------------------------

--
-- Structure de la table `Date_exercise_sessions`
--

CREATE TABLE `Date_exercise_sessions` (
  `id` int(11) NOT NULL,
  `sets` int(11) NOT NULL,
  `reps` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `rest` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `id_date_session` int(11) DEFAULT NULL,
  `id_exercise_session` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `Date_sessions`
--

CREATE TABLE `Date_sessions` (
  `id` int(11) NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `id_session` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `Exercises` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `id_user` int(11) DEFAULT NULL,
  `id_muscle` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Exercises`
--

INSERT INTO `Exercises` (`id`, `name`, `description`, `image_url`, `createdAt`, `updatedAt`, `id_user`, `id_muscle`) VALUES
(1, 'Crunch', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 1),
(2, 'Planche', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 1),
(3, 'Releve de jambes', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 1),
(4, 'Curl barre pronation', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 2),
(5, 'Curl barre EZ supination', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 3),
(6, 'Curl araignee', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 3),
(7, 'Curl marteau', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 3),
(8, 'Tractions', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 4),
(9, 'Tirage vertical machine', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 4),
(10, 'Tirage horizontal machine', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 4),
(11, 'Rowing barre', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 4),
(12, 'Souleve de terre', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 4),
(13, 'Developpe militaire barre', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 5),
(14, 'Elevations laterales', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 5),
(15, 'Face pull', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 5),
(16, 'Fentes avant avec halteres', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 6),
(17, 'Hip thrust', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 6),
(18, 'Curl jambe assis', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 7),
(19, 'Souleve de terre roumain', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 7),
(20, 'Superman', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 8),
(21, 'Extension mollets a la barre debout', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 9),
(22, 'Extension mollets a la machine assis', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 9),
(23, 'Extensions mollets a la presse', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 9),
(24, 'Developpe couche a la barre', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 10),
(25, 'Developpe incline au halteres', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 10),
(26, 'Dips', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 10),
(27, 'Pompes', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 10),
(28, 'Squat barre', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 11),
(29, 'Presse a cuisses', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 11),
(30, 'Fentes', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 11),
(31, 'Extensions de jambes', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 11),
(32, 'Shrug avant a la barre', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 12),
(33, 'Developpe couche a la barre prise serree', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 13),
(34, 'Barre front', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 13),
(35, 'Extension triceps poulie haute', NULL, NULL, '2023-01-14 20:36:04', '2023-01-14 20:36:04', 1, 13);

-- --------------------------------------------------------

--
-- Structure de la table `Exercise_sessions`
--

CREATE TABLE `Exercise_sessions` (
  `id` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `superset` boolean DEFAULT 0,
  `sets` int(11) NOT NULL,
  `reps` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `rest` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `id_exercise` int(11) DEFAULT NULL,
  `id_session` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Exercise_sessions`
--

INSERT INTO `Exercise_sessions` (`id`, `order`, `superset`,`sets`, `reps`, `weight`, `rest`, `createdAt`, `updatedAt`, `id_exercise`, `id_session`) VALUES
(1, 1, 0, 3, '10-10-10', '30-30-30', '02:00:00', '2023-01-16 15:41:53', '2023-01-16 15:41:53', 24, 1),
(2, 2, 0, 3, '10-10-10', '27-27-27', '02:00:00', '2023-01-16 15:41:53', '2023-01-16 15:41:53', 9, 1),
(3, 3, 0, 3, '10-10-10', '60-60-60', '02:00:00', '2023-01-16 15:41:53', '2023-01-16 15:41:53', 29, 1),
(4, 4, 0, 3, '15-15-15', '4-4-4', '01:30:00', '2023-01-16 15:41:53', '2023-01-16 15:41:53', 14, 1),
(5, 5, 0, 3, '12-12-12', '10-10-10', '01:30:00', '2023-01-16 15:41:53', '2023-01-16 15:41:53', 4, 1),
(6, 6, 0, 3, '12-12-12', '10-10-10', '01:30:00', '2023-01-16 15:41:53', '2023-01-16 15:41:53', 4, 1);


CREATE TABLE `Muscles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Muscles`
--

INSERT INTO `Muscles` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Abdominaux', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(2, 'Avant-bras', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(3, 'Biceps', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(4, 'Dos', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(5, 'Epaules', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(6, 'Fessiers', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(7, 'Ischio-jambiers', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(8, 'Lombaires', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(9, 'Mollets', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(10, 'Pectoraux', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(11, 'Quadriceps', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(12, 'Trapezes', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06'),
(13, 'Triceps', NULL, '2023-01-14 19:28:06', '2023-01-14 19:28:06');


-- --------------------------------------------------------

--
-- Structure de la table `Sessions`
--

CREATE TABLE `Sessions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `id_user` int(11) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `id_session_group` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Sessions`
--

INSERT INTO `Sessions` (`id`, `name`, `createdAt`, `updatedAt`, `id_user`, `notes`, `id_session_group`) VALUES
(1, 'Full Body debutant', '2023-01-16 15:25:50', '2023-01-16 15:25:50', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `Session_groups`
--

CREATE TABLE `Session_groups` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `id_user` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Session_groups`
--

INSERT INTO `Session_groups` (`id`, `name`, `createdAt`, `updatedAt`, `id_user`, `description`) VALUES
(1, 'Seances predefinies', '2023-01-16 15:23:12', '2023-01-16 15:23:12', 1, NULL);


CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `height` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`id`, `mail`, `lastname`, `firstname`, `height`, `weight`, `phoneNumber`, `createdAt`, `updatedAt`) VALUES
(1, 'menelas_admin.menelas@gmail.com', 'admin', 'admin', 174, 73, '0123456789', '2023-01-14 20:35:49', '2023-01-14 20:35:49'),
(2, 'jeremy.krzeczowski77@gmail.com', 'Krzeczowski', 'Jeremy', 174, 73, '0123456789', '2023-01-14 20:35:49', '2023-01-14 20:35:49'),
(3, 'nico.dvne@gmail.com', 'Davenne', 'Nicolas', 174, 73, '0123456789', '2023-01-14 20:35:49', '2023-01-14 20:35:49');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Date_exercise_sessions`
--
ALTER TABLE `Date_exercise_sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_date_session` (`id_date_session`),
  ADD KEY `id_exercise_session` (`id_exercise_session`);

--
-- Index pour la table `Date_sessions`
--
ALTER TABLE `Date_sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_session` (`id_session`);

ALTER TABLE `Exercises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_muscle` (`id_muscle`);

--
-- Index pour la table `Exercise_sessions`
--
ALTER TABLE `Exercise_sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_exercise` (`id_exercise`),
  ADD KEY `id_session` (`id_session`);

--
-- Index pour la table `Muscles`
--
ALTER TABLE `Muscles`
  ADD PRIMARY KEY (`id`);


--
-- Index pour la table `Sessions`
--
ALTER TABLE `Sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_session_group` (`id_session_group`);

--
-- Index pour la table `Session_groups`
--
ALTER TABLE `Session_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);


ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Date_exercise_sessions`
--
ALTER TABLE `Date_exercise_sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Date_sessions`
--
ALTER TABLE `Date_sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Exercises`
--
ALTER TABLE `Exercises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `Exercise_sessions`
--
ALTER TABLE `Exercise_sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `Muscles`
--
ALTER TABLE `Muscles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `Sessions`
--
ALTER TABLE `Sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `Session_groups`
--
ALTER TABLE `Session_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Date_exercise_sessions`
--
ALTER TABLE `Date_exercise_sessions`
  ADD CONSTRAINT `Date_exercise_sessions_ibfk_1` FOREIGN KEY (`id_date_session`) REFERENCES `Date_sessions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Date_exercise_sessions_ibfk_2` FOREIGN KEY (`id_exercise_session`) REFERENCES `Exercise_sessions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `Date_sessions`
--
ALTER TABLE `Date_sessions`
  ADD CONSTRAINT `Date_sessions_ibfk_1` FOREIGN KEY (`id_session`) REFERENCES `Sessions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `Exercises`
--
ALTER TABLE `Exercises`
  ADD CONSTRAINT `Exercises_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Exercises_ibfk_2` FOREIGN KEY (`id_muscle`) REFERENCES `Muscles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `Exercise_sessions`
--
ALTER TABLE `Exercise_sessions`
  ADD CONSTRAINT `Exercise_sessions_ibfk_15` FOREIGN KEY (`id_exercise`) REFERENCES `Exercises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Exercise_sessions_ibfk_16` FOREIGN KEY (`id_session`) REFERENCES `Sessions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `Sessions`
--
ALTER TABLE `Sessions`
  ADD CONSTRAINT `Sessions_ibfk_25` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Sessions_ibfk_26` FOREIGN KEY (`id_session_group`) REFERENCES `Session_groups` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `Session_groups`
--
ALTER TABLE `Session_groups`
  ADD CONSTRAINT `Session_groups_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
