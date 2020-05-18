-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2020 at 05:10 PM
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
-- Database: `farmiassist`
--

-- --------------------------------------------------------

--
-- Table structure for table `crop`
--

CREATE TABLE `crop` (
  `CropName` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `CultivationType` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `CultivationDescrip` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `CropDescrip` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `SeedInput` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `YeildDescrip` tinytext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `crop`
--

INSERT INTO `crop` (`CropName`, `CultivationType`, `CultivationDescrip`, `CropDescrip`, `SeedInput`, `YeildDescrip`) VALUES
('CHILLI', 'IRRIGATED', 'Nursery\r\nFor one acre area prepare 6 raised seed beds   of 7.5 m. long , 1.2 m,  wide and 10 cm. height   Apply 30 kg (3-4 baskets)  well decomposed farmyard manure to each  bed along with ½  kg. of 15:15:15 complex fertilizer and mix them well in the soil.  Treat the per kilo seeds with 2 g. thiram 75 W.P. and sown in 8 cm. rows or broadcast thinly on the beds. Cover the beds with farmyard manure or thin layer of  soil.\r\nTransplanting \r\nPrepare the land by deep ploughing, and clod crushing for transplanting of seedlings.  Apply the entire quantity of farmyard manure and mix it well in the soil.  Prepare ridges and furrows at 75 cm. apart and apply 50% of recommended N, P2O5 and K2O at the time of planting. Provide light irrigation and plant two seedlings per hill at 45 cm  apart on one side of the ridge. Top dress the crop with the remaining 50% of N, P2O5 and K2O six weeks after transplanting and take up earthing up.', 'Chilli is one of the important vegetable and spice crops of the state.  It is being grown both under rained and irrigated conditions.  In northern Karnataka it is grown as a sole crop or mixed crop with other crops in Haveri, Bellari Dharwad and other districts. The area under chilli in the state is around 1.0 lakh hectare with annual production of 1.91 lakh tones and productivity of 7.63 quintal per acre (2016-17).', '500 grams per acre.', 'Green chillies 3,000-4800 kgs per acre.\r\nDry chillies 300-400 kgs per acre.');

-- --------------------------------------------------------

--
-- Table structure for table `fertilizers`
--

CREATE TABLE `fertilizers` (
  `CropName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `CultivationType` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `QuantityDescrip` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `fertilizers`
--

INSERT INTO `fertilizers` (`CropName`, `CultivationType`, `Type`, `QuantityDescrip`) VALUES
('CHILLI', 'IRRIGATED', 'FERTILIZERS', 'N 60kg per acre, P2O5 30kg per acre, K2O 30kg per acre');

-- --------------------------------------------------------

--
-- Table structure for table `season`
--

CREATE TABLE `season` (
  `CropName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `SeasonDescrip` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `season`
--

INSERT INTO `season` (`CropName`, `SeasonDescrip`) VALUES
('CHILLI', 'The best  season for starting the rainfed crop is May-June.  Irrigated crop can be started during October-November and January-February.');

-- --------------------------------------------------------

--
-- Table structure for table `soil`
--

CREATE TABLE `soil` (
  `CropName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `SoilDescrip` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `soil`
--

INSERT INTO `soil` (`CropName`, `SoilDescrip`) VALUES
('CHILLI', 'Well drained loamy soil is  best suited for the crop.  It is also comes up well in sandy black and red loamy soils.');

-- --------------------------------------------------------

--
-- Table structure for table `weed`
--

CREATE TABLE `weed` (
  `CropName` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `WeedManagementDes` mediumtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `weed`
--

INSERT INTO `weed` (`CropName`, `WeedManagementDes`) VALUES
('CHILLI', 'On the day of sowing or next day, spray 800 ml butachlor 50 EC weedicide per acre, On the same day or next day after transplanting the chilli seedlings, spray 1 litre pendimethalin 30 EC per acre');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crop`
--
ALTER TABLE `crop`
  ADD PRIMARY KEY (`CropName`,`CultivationType`);

--
-- Indexes for table `fertilizers`
--
ALTER TABLE `fertilizers`
  ADD PRIMARY KEY (`CropName`,`CultivationType`,`Type`);

--
-- Indexes for table `season`
--
ALTER TABLE `season`
  ADD PRIMARY KEY (`CropName`);

--
-- Indexes for table `soil`
--
ALTER TABLE `soil`
  ADD PRIMARY KEY (`CropName`);

--
-- Indexes for table `weed`
--
ALTER TABLE `weed`
  ADD PRIMARY KEY (`CropName`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
