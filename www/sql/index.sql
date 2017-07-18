CREATE TABLE `multiple` (
  `quiz_id` int(10) NOT NULL AUTO_INCREMENT,
  `slug` VARCHAR(100) NOT NULL,
  `count` int(10) NOT NULL,
  `all_correct` INT NOT NULL,
  `max` FLOAT NOT NULL,
  `median` FLOAT NOT NULL,
  `mode` FLOAT NOT NULL,
  `mean` FLOAT NOT NULL,
  `create_date` DATE NOT NULL,
INDEX `SLUG` (`slug`),
UNIQUE `INDEX` (`quiz_id`)) ENGINE=InnoDB;
