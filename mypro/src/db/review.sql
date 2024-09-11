-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 03, 2023 at 08:05 AM
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
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `rid` int(10) NOT NULL,
  `rname` text NOT NULL,
  `rdate` text NOT NULL,
  `rstar` float NOT NULL,
  `rcontent` text NOT NULL,
  `rcategory` text NOT NULL,
  `rfor` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`rid`, `rname`, `rdate`, `rstar`, `rcontent`, `rcategory`, `rfor`) VALUES
(1, 'Tanish', '11/09/2023', 5, 'Good', 'Venues', 'Taj Hotel'),
(3, 'Tanish', '11/09/2023', 4, 'very good', 'Photography', 'Xesus Digital Studio'),
(4, 'Tanish', '11/09/2023', 3, 'ok service', 'Photography', 'Xesus Digital Studio'),
(5, 'Tanish', '11/09/2023', 1, 'Very Bad Experience\n', 'Photography', 'Xesus Digital Studio'),
(6, 'Tanish', '11/09/2023', 5, 'Excellent', 'Photography', 'Xesus Digital Studio');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`rid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `rid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
