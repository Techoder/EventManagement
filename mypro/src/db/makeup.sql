-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2023 at 12:19 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

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
-- Table structure for table `makeup`
--

CREATE TABLE `makeup` (
  `mid` int(11) NOT NULL,
  `mrating` float NOT NULL,
  `mname` text NOT NULL,
  `mlocation` text NOT NULL,
  `mtype` text NOT NULL,
  `mlevel` text NOT NULL,
  `mprice` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `makeup`
--

INSERT INTO `makeup` (`mid`, `mrating`, `mname`, `mlocation`, `mtype`, `mlevel`, `mprice`) VALUES
(1, 4.3, 'Gracious Beauty Studio', '123 Beauty Avenue, Banglore', 'Makeup Artist', 'Experienced', 1600),
(2, 5, 'Krishna Beauty Parlour', 'SF-31 City Point, Zakli Talav, Borsad', 'Artist', '', 3500),
(3, 3.5, 'Narsinh Makeup Studio', '69 Tepalnagar, Vadodara', 'Artist', 'Intermediate', 2000),
(4, 4.2, 'Relif Beauty Parlour', 'Zingo complex near Baliyadev Mandir, Sisva ', 'Makeup Artist', 'Beginner', 5000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `makeup`
--
ALTER TABLE `makeup`
  ADD PRIMARY KEY (`mid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `makeup`
--
ALTER TABLE `makeup`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
