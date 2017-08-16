CREATE SCHEMA `web_app_db` ;

CREATE TABLE `web_app_db`.`messages` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `message_body` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC));

INSERT INTO `web_app_db`.`messages` (message_body) VALUES ("Hey, we got something working over here");
INSERT INTO `web_app_db`.`messages` (message_body) VALUES ("Houston we have a problem.");
INSERT INTO `web_app_db`.`messages` (message_body) VALUES ("Nevermind, we fixed it.");