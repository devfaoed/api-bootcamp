-- syntax for creatung table in sql
-- CREATE TABLE tablename;

-- CREATE TABLE table_name (
--     column1 datatype,
--     column2 datatype,
--     column3 datatype,
  
-- );


CREATE TABLE `offenders` (
    `id` int(11) NOT NULL,
    `fullname` varchar(100) DEFAULT NULL,
    `country` varchar(100) DEFAULT NULL,
    `Ostate` varchar(100) DEFAULT NULL,
    `Oaddress` varchar(100) DEFAULT NULL,
    `offence` varchar(100) DEFAULT NULL,
    `date` timestamp NULL DEFAULT current_timestamp()
);

