-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2024 at 02:40 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hoidanit`
--

-- --------------------------------------------------------

--
-- Table structure for table `facilities`
--

CREATE TABLE `facilities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `facilities`
--

INSERT INTO `facilities` (`id`, `name`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'Ha Noi', 'Yen Nghia, Ha Dong, Ha Noi', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Da Nang', 'Son Tra, Da Nang', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Ho Chi Minh City', 'Ben Thanh, HCMC', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Binh Duong', '123, Binh Duong', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-create-allcode.js'),
('migration-create-booking.js'),
('migration-create-clinic.js'),
('migration-create-doctor-clinic-specialty.js'),
('migration-create-facility.js'),
('migration-create-history.js'),
('migration-create-schedule.js'),
('migration-create-specialty.js'),
('migration-create-user-schedule.js'),
('migration-create-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `positionId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `address`, `phonenumber`, `gender`, `image`, `roleId`, `positionId`, `createdAt`, `updatedAt`) VALUES
(1, 'uchihahaha@gmail.com', '$2a$10$rCv7ZT/WtENmXnrsw3bF9uB.7ohbNmqFm9w9oS4wa4lsAtOAJdi7S', 'NMD', 'nguyen', 'ussr', '09875473543', 1, NULL, '1', NULL, '2024-09-08 15:53:43', '2024-09-12 08:26:42'),
(2, 'ehehe@gmail.com', '$2a$10$Nj3CzSFbS6mIQ3KVOJs.beqL1ucuAHB5jKClFQrvP/MU/ua8hESBa', 'Cassandra', 'Smith', '31 Agadez', '09875473543', 0, NULL, '3', NULL, '2024-09-12 08:42:23', '2024-09-12 08:42:23'),
(3, 'reubenmccormack23@outlook.com', '$2a$10$7ZSV7g4YT2/I74vQ7z2YpOrgmDZPTXUn/bXsV6lS.bnsdOJvjRiRe', 'Charlie', 'Olivivera', '99 Ng. 88 P. Trần Quý Cáp', '0987547432', 0, NULL, '3', NULL, '2024-09-15 14:09:15', '2024-09-15 14:09:15'),
(4, 'hoidanit96@gmail.com', '$2a$10$fjF4x2Es6uCISos.C4i/1uaaPqPXs4.NfRwCPsPaftg2nlcFgyyuK', 'datdz', 'hihi', 'HCMC', '0984848484', 1, NULL, '1', NULL, '2024-09-22 16:24:49', '2024-09-25 21:22:51'),
(5, 'dat69@gmail.com', '$2a$10$XaRNzszCZtCHdjdsuajGxOGZ0aI3RiBpuMS/Vukt2tlJhiIMs8Lly', '123', '321', '678', NULL, 0, NULL, NULL, NULL, '2024-09-24 15:44:42', '2024-09-24 15:44:42'),
(6, 'xxx@gmail.com', '$2a$10$PRdYwhmcCoCdWXCSaU7IW.CXr2KGGEok9.z9bScqjuTJmZJ5m8Sne', 'X', 'XX', 'So 8 Thien Quang', '0379688819', 1, NULL, NULL, NULL, '2024-10-06 17:48:12', '2024-10-06 17:48:12'),
(7, 'siuchiu34re@gmail.com', '$2a$10$Q67L7akV6JuMn8WyZP1LSOZX0gDKBeTg2Zy8ekJdqnMtf/zwnOkk6', 'ga', 'ga', 'ga', '0987547432', 1, NULL, NULL, NULL, '2024-10-06 20:57:43', '2024-10-06 20:57:43'),
(8, 'siuchi23u@gmail.com', '$2a$10$Q67L7akV6JuMn8WyZP1LSOZX0gDKBeTg2Zy8ekJdqnMtf/zwnOkk6', 'da', 'da', '31 Agadez', '098709870987', 1, NULL, NULL, NULL, '2024-10-06 20:59:18', '2024-10-06 20:59:18'),
(9, 'admin69@gmail.com', '$2a$10$RPKu72vw2NFOJ51N0YZxyOBst4rXNiufj/9WIXdzqupP0EcucEClC', 'da', 'da', 'da', '011111111', 1, NULL, '3', NULL, '2024-10-06 21:29:51', '2024-10-06 21:29:51'),
(10, 'siuchiux@gmail.com', '$2a$10$DmXjphS3eKJ2ZZOZtrQfROW.A5YRJYi39PA4Zt9BONmZCkMRYCl0a', 'x', 'xx', 'haha', '09765765765', 0, NULL, '3', NULL, '2024-10-07 10:18:06', '2024-10-07 10:18:06');

-- --------------------------------------------------------

--
-- Table structure for table `userschedules`
--

CREATE TABLE `userschedules` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `facilityId` int(11) DEFAULT NULL,
  `appointmentDate` datetime NOT NULL,
  `appointmentTime` time NOT NULL,
  `status` enum('scheduled','completed','canceled') DEFAULT 'scheduled',
  `symptom` text DEFAULT NULL,
  `isConfirmed` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userschedules`
--

INSERT INTO `userschedules` (`id`, `userId`, `facilityId`, `appointmentDate`, `appointmentTime`, `status`, `symptom`, `isConfirmed`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2024-10-01 00:00:00', '07:00:00', 'scheduled', 'Headache', 0, '2024-10-07 10:22:23', '2024-10-07 10:22:23'),
(2, 2, 2, '2024-10-02 00:00:00', '09:00:00', 'completed', 'Fever', 1, '2024-10-07 10:22:23', '2024-10-07 10:22:23'),
(3, 3, 3, '2024-10-03 00:00:00', '14:00:00', 'canceled', 'Cough', 0, '2024-10-07 10:22:23', '2024-10-07 10:22:23'),
(4, 4, 4, '2024-10-04 00:00:00', '16:00:00', 'scheduled', 'Back pain', 0, '2024-10-07 10:22:23', '2024-10-07 10:22:23'),
(5, 5, 1, '2024-10-05 00:00:00', '07:00:00', 'completed', 'Stomach ache', 1, '2024-10-07 10:22:23', '2024-10-07 10:22:23'),
(6, 6, 2, '2024-10-06 00:00:00', '09:00:00', 'canceled', 'Dizziness', 0, '2024-10-07 10:22:23', '2024-10-07 10:22:23'),
(7, 7, 3, '2024-10-07 00:00:00', '14:00:00', 'scheduled', 'Nausea', 0, '2024-10-07 10:22:23', '2024-10-07 10:22:23'),
(8, 8, 4, '2024-10-08 00:00:00', '16:00:00', 'completed', 'Fatigue', 1, '2024-10-07 10:22:23', '2024-10-07 10:22:23'),
(9, 9, 1, '2024-10-09 00:00:00', '07:00:00', 'canceled', 'Sore throat', 0, '2024-10-07 10:22:23', '2024-10-07 10:22:23'),
(10, 10, 1, '2024-10-10 00:00:00', '09:00:00', 'scheduled', 'Chest pain', 0, '2024-10-07 10:22:23', '2024-10-07 10:22:23'),
(11, 1, 3, '2024-10-02 00:00:00', '07:00:00', 'completed', 'Back pain', 1, '2024-10-07 10:50:07', '2024-10-07 12:07:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `facilities`
--
ALTER TABLE `facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userschedules`
--
ALTER TABLE `userschedules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `facilityId` (`facilityId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `facilities`
--
ALTER TABLE `facilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `userschedules`
--
ALTER TABLE `userschedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `userschedules`
--
ALTER TABLE `userschedules`
  ADD CONSTRAINT `userschedules_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `userschedules_ibfk_2` FOREIGN KEY (`facilityId`) REFERENCES `facilities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
