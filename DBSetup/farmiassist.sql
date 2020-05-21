-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 21, 2020 at 06:54 AM
-- Server version: 5.7.23-23
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notwhocp_Project`
--

-- --------------------------------------------------------

--
-- Table structure for table `CROPS`
--

CREATE TABLE `CROPS` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `CROPS`
--

INSERT INTO `CROPS` (`crop`, `description`) VALUES
('CHILLI', 'Chilli is one of the important vegetable and spice crops of the state.It is being grown both under rained and irrigated conditions.In northern Karnataka it is grown as a sole crop or mixed crop with other crops in Haveri,Bellari Dharwad and other districts.The area under chilli in the state is around 1.0 lakh hectare with annual production of 1.91 lakh tones and productivity of 7.63 quintal per acre (2016-17).'),
('ONION', 'Onion is one of the most important commercial vegetables of our state.It is used as a vegetable and spice at all stages of the crop.  In north Karnataka, onion is grown as main crop and mixed crop with other crops in Bagalkot, Vijayapura, Chitradurga, Dharwad, Gadag and Belagavi districts. It is cultivated on an area of 2.19 lakh hectare with a production of 31.22 lakh tones and productivity of 57 quintal per acre (2016-17).'),
('CORIANDER', 'Coriander is an important spice.  The crop is mainly grown under rainfed condition in black soils.It is also grown to small extent in red soils. It is grown in kharif and rabi both as sole and mixed crop.Coriander is grown Bellary,Raichur, Hassan and other districts in Karnataka. It is cultivated on an area of 5000 hectare with a production of 5000 tons and a productivity of 3.60 quintal per hectare.');

-- --------------------------------------------------------

--
-- Table structure for table `FERTILIZERS`
--

CREATE TABLE `FERTILIZERS` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `fertilizers` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `FERTILIZERS`
--

INSERT INTO `FERTILIZERS` (`crop`, `fertilizers`) VALUES
('CHILLI', 'For irrigated Farmyard manure 10 tons fertilizer N 60 kilograms, P2O5 30 kilograms K2O 30 kilograms per acre.For Rainfed Farmyard manure 10 tons fertilizer N 40 kilograms, P2O5 20 kilograms K2O 20 kilograms per acre.\r\n'),
('CORIANDER', 'Organic manure: Farmyard manure or compost 2.4 tons. Fertilizers N 24 kilograms per acre.Fertilizers P2O5 16 kilograms per acre.Fertilizers K2O 8 kilograms per acre.'),
('ONION', 'Organic manure: Farmyard manure or compost 12 tons. Fertilizers N 50 kilograms per acre.Fertilizers P2O5 20 kilograms per acre.Fertilizers K2O 50 kilograms per acre.');

-- --------------------------------------------------------

--
-- Table structure for table `INPUT`
--

CREATE TABLE `INPUT` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `input` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `INPUT`
--

INSERT INTO `INPUT` (`crop`, `input`) VALUES
('CHILLI', 'seeds Irrigated 500 grams per acre.seeds Rainfed 500 grams per acre.'),
('ONION', 'For broadcasting or Drill sowing 3 to 4 kilograms per acre.Transplanting Bulb planting 2 to 2.4 kilograms per acre.\r\nBulb planting 350 kilograms per acre.\r\n'),
('CORIANDER', '4 to 5 kilograms per acre.');

-- --------------------------------------------------------

--
-- Table structure for table `SEASON`
--

CREATE TABLE `SEASON` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `season` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SEASON`
--

INSERT INTO `SEASON` (`crop`, `season`) VALUES
('CHILLI', 'The best  season for starting the rainfed crop is May-June.  Irrigated crop can be started during October-November and January-February.'),
('CORIANDER', 'Monsoon crop should be sown in May and June and the rabi crop should be sown in middle of October.'),
('ONION', 'Onion can be grown in all seasons of the year.June or July, September or October and January or February are the best months for starting the crop.');

-- --------------------------------------------------------

--
-- Table structure for table `SOIL`
--

CREATE TABLE `SOIL` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `soil` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SOIL`
--

INSERT INTO `SOIL` (`crop`, `soil`) VALUES
('CHILLI', 'Well drained loamy soil is  best suited for the crop.It is also comes up well in sandy black and red loamy soils.'),
('CORIANDER', 'In black soils, prepare the land by harrowing twice.  One or two ploughings are to be given annually in red loamy soils.Split the seeds into two halves by trampling or running a light wooden roller.  This helps in economizing seeds and to hasten germination. Treat the seeds with Organo-mercuric compound.'),
('ONION', 'This crop can be grown in different types of soils.But well drained sandy loam soil is suitable');

-- --------------------------------------------------------

--
-- Table structure for table `TYPES`
--

CREATE TABLE `TYPES` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `TYPES`
--

INSERT INTO `TYPES` (`crop`, `type`) VALUES
('CHILLI', 'Rainfed crop.'),
('CHILLI', 'Irrigated crop.'),
('CORIANDER', 'Rainfed crop.'),
('ONION', 'Irrigated crop.');

-- --------------------------------------------------------

--
-- Table structure for table `WEED`
--

CREATE TABLE `WEED` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `weedcontrol` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `WEED`
--

INSERT INTO `WEED` (`crop`, `weedcontrol`) VALUES
('CHILLI', 'On the day of sowing or next day, spray 800 ml butachlor 50 EC weedicide per acre.Per acre 300 litre spray solution is necessary.On the same day or next day after transplanting the chilli seedlings, spray 1 litre pendimethalin 30 EC per acre. Intercultural operation after 30 days of weedicide spray can control seed propagated weeds.Garlic Green chilli Kerosene extract preparation method,For requirement of  one hectare,crush 600 g garlic and 600 g green chilli and soaked 600 ml  kerosene separately for 2 hours.Then filter the extracts and mix both of them. Add 0.4 kg soap water to this extract and used for spraying at 5 ml per litre of water.'),
('ONION', 'Spray 1.3 litre Pendimethalin 30 EC per acre in 300 litre of water on the same day or next day of sowing when the soil is wet.Spray with 800 ml of Butachlor 50 EC weedicide dissolving in 400 litres water per acre immediately after transplanting.  After 30 days after transplanting spray with 440 ml of Oxyflurofen 23.5 EC dissolving in 400 litres water per acre.  While spraying weedicide sufficient soil moisture should be there.  This will control all weeds except Hariyali and Nutgrass.   In onion – chilli intercrop system, spray 1.3 litre Pendimethalin 30 EC per acre on the same day or next day of sowing.  400 litres of spray solution.Hand weed once after 40 days.In order to control cuscuta in Zone 3, spray 1.3 litre  pendimethalin 30 EC  in 300 litre water per acre on the next day of transplanting. Spray 4.4 ml oxyflorofen 23.5 EC in 300 litre of water per acre.'),
('CORIANDER', 'On the same day or next day of sowing spray with 400 g metalachlor  50 EC in 300 litres water.  The soil should be wet and porous  while applying weedicide. Except Hariyali and Nutgrass, other weeds can be controlled.');

-- --------------------------------------------------------

--
-- Table structure for table `YIELD`
--

CREATE TABLE `YIELD` (
  `crop` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `yield` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `YIELD`
--

INSERT INTO `YIELD` (`crop`, `yield`) VALUES
('CHILLI', 'The green chilli yiled starts 40-50 days after transplanting. Dry fruits can be harvested 70-80 days after transplanting. The average yield expected is as follows, Irrigated Green chillies 3,000 to 4,800 kilograms per acre. Rainfed Green chillies 8000 to 10000 kilograms per acre.Irrigated Dry chillies 300 to 400 kilograms per acre.Irrigated Green chillies 800 to 1,000 kilograms per acre.\r\n'),
('ONION', 'The crop will be ready for harvest when the leaves turn yellow and  top 50 percent of the  leaves fall off.  The bulbs are uprooted and  cured in  the sun  in the field itself for a week.  An average crop can yield upto 10,000 to 12,000 kilograms acre.'),
('CORIANDER', 'Coriander comes to harvest in 90 to 100 days under rainfed conditions 200 to 300 kilograms seed yield can be obtained per acre.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
