-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2020 at 03:38 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `farmiassisten`
--

-- --------------------------------------------------------

--
-- Table structure for table `crops`
--

CREATE TABLE `crops` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `crops`
--

INSERT INTO `crops` (`crop`, `description`) VALUES
('CHILLI', 'Chilli is one of the important vegetable and spice crops of the state.It is being grown both under rained and irrigated conditions.In northern Karnataka it is grown as a sole crop or mixed crop with other crops in Haveri,Bellari Dharwad and other districts.The area under chilli in the state is around 1.0 lakh hectare with annual production of 1.91 lakh tones and productivity of 7.63 quintal per acre (2016-17).');

-- --------------------------------------------------------

--
-- Table structure for table `fertilizers`
--

CREATE TABLE `fertilizers` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `fertilizers` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `fertilizers`
--

INSERT INTO `fertilizers` (`crop`, `fertilizers`) VALUES
('CHILLI', 'For irrigated Farmyard manure 10 tons fertilizer N 60 kilograms, P2O5 30 kilograms K2O 30 kilograms per acre.For Rainfed Farmyard manure 10 tons fertilizer N 40 kilograms, P2O5 20 kilograms K2O 20 kilograms per acre.\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `input`
--

CREATE TABLE `input` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `input` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `input`
--

INSERT INTO `input` (`crop`, `input`) VALUES
('CHILLI', 'seeds Irrigated 500 grams per acre.seeds Rainfed 500 grams per acre.');

-- --------------------------------------------------------

--
-- Table structure for table `season`
--

CREATE TABLE `season` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `season` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `season`
--

INSERT INTO `season` (`crop`, `season`) VALUES
('CHILLI', 'The best  season for starting the rainfed crop is May-June.  Irrigated crop can be started during October-November and January-February.');

-- --------------------------------------------------------

--
-- Table structure for table `soil`
--

CREATE TABLE `soil` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `soil` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `soil`
--

INSERT INTO `soil` (`crop`, `soil`) VALUES
('CHILLI', 'Well drained loamy soil is  best suited for the crop.It is also comes up well in sandy black and red loamy soils.');

-- --------------------------------------------------------

--
-- Table structure for table `weed`
--

CREATE TABLE `weed` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `weedcontrol` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `weed`
--

INSERT INTO `weed` (`crop`, `weedcontrol`) VALUES
('CHILLI', 'On the day of sowing or next day, spray 800 ml butachlor 50 EC weedicide per acre.Per acre 300 litre spray solution is necessary.On the same day or next day after transplanting the chilli seedlings, spray 1 litre pendimethalin 30 EC per acre. Intercultural operation after 30 days of weedicide spray can control seed propagated weeds.Garlic Green chilli Kerosene extract preparation method,For requirement of  one hectare,crush 600 g garlic and 600 g green chilli and soaked 600 ml  kerosene separately for 2 hours.Then filter the extracts and mix both of them. Add 0.4 kg soap water to this extract and used for spraying at 5 ml per litre of water.');

-- --------------------------------------------------------

--
-- Table structure for table `yield`
--

CREATE TABLE `yield` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `yield` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `yield`
--

INSERT INTO `yield` (`crop`, `yield`) VALUES
('CHILLI', 'The green chilli yiled starts 40-50 days after transplanting. Dry fruits can be harvested 70-80 days after transplanting. The average yield expected is as follows, Irrigated Green chillies 3,000 to 4,800 kilograms per acre. Rainfed Green chillies 8000 to 10000 kilograms per acre.Irrigated Dry chillies 300 to 400 kilograms per acre.Irrigated Green chillies 800 to 1,000 kilograms per acre.\r\n');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
