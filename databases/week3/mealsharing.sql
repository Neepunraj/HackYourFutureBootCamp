-- Active: 1744807536938@@127.0.0.1@3306@mealsharingdb
create DATABASE mealSharingDB


create Table Meal(
    id int AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) not NULL,
    description  TEXT,
    location varchar(255),
    `when` DATETIME not NULL,
    max_reservations INT,
    price DECIMAL(7,2),
    createdAt DATE

)
/* meal table created */

select * FROM meal

/* reservation table */

create table Reservations(
    id int AUTO_INCREMENT PRIMARY KEY,
    no_of_guests int not NULL,
    contact_number VARCHAR(20),
    cotact_name VARCHAR(100),
    contact_email   VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    meal_id int not NULL,
    Foreign Key (meal_id) REFERENCES Meal(id)

)


alter Table reservations RENAME COLUMN cotact_name  to contact_name

SELECT * from reservations



/* review table  */


create table Reviews(
    id int AUTO_INCREMENT PRIMARY KEY  ,
    title VARCHAR(255) not NULL,
    description text,
    meal_id int not NULL,
    stars INT ,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    Foreign Key (meal_id) REFERENCES  Meal(id)
)

select * from reviews



INSERT into meal (title,description,location,`when`,max_reservations,price,`createdAt`)
VALUES
('Italian Pasta Night', 'Fresh handmade pasta with a variety of sauces.', 'Copenhagen', '2025-05-20 18:30:00', 20, 85.00, CURRENT_DATE),
('Sushi Saturday', 'Assorted sushi platters prepared by a Japanese chef.', 'Aarhus', '2025-05-25 19:00:00', 15, 120.00, CURRENT_DATE),
('BBQ Feast', 'Slow-cooked ribs, burgers, and grilled veggies.', 'Odense', '2025-06-01 17:00:00', 25, 75.00, CURRENT_DATE),
('Vegan Delight', 'A full-course plant-based gourmet dinner.', 'Copenhagen', '2025-05-22 18:00:00', 18, 65.00, CURRENT_DATE),
('Greek Night', 'Moussaka, tzatziki, and fresh pita straight from the oven.', 'Roskilde', '2025-05-30 20:00:00', 30, 90.00, CURRENT_DATE);

SELECT * from meal


INSERT into reservations(no_of_guests, meal_id, createdAt, contact_number,contact_name,contact_email)
VALUES
(10,1,CURRENT_TIMESTAMP,"22630180","Neepun Raj Shrestha","neepun8@gmail.com"),
(20,2,CURRENT_TIMESTAMP,"12121212","lars Nesson","lars@gmail.com"),
(30,3,CURRENT_TIMESTAMP,"22530080","Nairs Nesson","Nairs@gmail.com"),
(12,6,CURRENT_TIMESTAMP,"50630050","Robin Nesson","gas@gmail.com"),
(3, 3, CURRENT_TIMESTAMP, '33334444', 'Lars Pedersen', 'lars@example.com'),
(6, 4, CURRENT_TIMESTAMP, '55556666', 'Emma Holm', 'emma@example.com'),
(2, 5, CURRENT_TIMESTAMP, '77778888', 'Nikos Papas', 'nikos@example.com');



INSERT into reviews(title,description,meal_id,stars,`createdAt`)
VALUES
('5 star food',"the momo was really awesome",1,5,CURRENT_TIMESTAMP),
('Delicious','the food was great',2,4,CURRENT_TIMESTAMP),
('Meat lover’s dream', 'The ribs were fall-off-the-bone good, and everything was hot and fresh.', 3, 5, CURRENT_TIMESTAMP),
('Tasty but small portions', 'The vegan dishes were great but could’ve been more filling.', 4, 3, CURRENT_TIMESTAMP),
('Great atmosphere', 'Loved the Greek music and the food brought back memories of Athens.', 5, 4, CURRENT_TIMESTAMP);



/* queries
 */

 select * from meal

 select * from meal where title = "momo"

 select * from meal where price >90

 select * from meal where price <80

 /* get meals that still has available reservations */
 SELECT Meal.* from meal left JOIN reservations on meal_id = reservations.meal_id where (reservations.no_of_guests < meal.max_reservations or reservations.no_of_guests is NULL)
 GROUP BY meal.id

 

 /* meal that partially match title */

 select * from meal where title LIKE 'chow%'

 /* meals created between two dates */

 select * from meal where `createdAt` BETWEEN '2025-05-0' and '2025-08-10'

 /* get meals with high review only with 5 stars
  */

  select * from meal join reviews on meal.id = reviews.meal_id where stars > 4

  /* get reservations for specific meal , momo has id = 1  sorted by cretaed date */

  select * from reservations where reservations.meal_id = 1 order BY `createdAt`


  /* sort all meals by aveg no of starts in the reviews */

  select * from meal JOIN reviews on meal.id = reviews.meal_id order by stars DESC /* from 5 start to low */