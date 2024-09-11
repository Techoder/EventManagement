-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2023 at 08:06 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wms`
--

-- --------------------------------------------------------

--
-- Table structure for table `request_booking`
--

CREATE TABLE `request_booking` (
  `rid` int(10) NOT NULL,
  `name` text NOT NULL,
  `country` text NOT NULL,
  `phone` bigint(10) NOT NULL,
  `email` text NOT NULL,
  `date` text NOT NULL,
  `guests` int(10) NOT NULL,
  `rooms` int(10) NOT NULL,
  `type` text NOT NULL,
  `time` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `request_booking`
--

INSERT INTO `request_booking` (`rid`, `name`, `country`, `phone`, `email`, `date`, `guests`, `rooms`, `type`, `time`) VALUES
(1, 'Tanish Kamdar', 'UK', 9511660266, 'profire2021k@gmail.com', '2023-08-25', 1, 1, 'wedding', '12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `request_booking`
--
ALTER TABLE `request_booking`
  ADD PRIMARY KEY (`rid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `request_booking`
--
ALTER TABLE `request_booking`
  MODIFY `rid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
