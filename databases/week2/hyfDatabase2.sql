-- Active: 1744807536938@@127.0.0.1@3306@hackyourfuture
SELECT * from task

/* add a task */
INSERT into task (title,description,created,updated,due_date,status_id,user_id) VALUES
("Go Tur", "tur til paris this summer", "2025-04-30","2025-04-30", "2025-07-30", 1,1 )

SELECT * from task WHERE title ="go tur"


update task set title = "Go Tour to Paris" where title="Go Tur"

SELECT * from task where  title ="Go Tour to Paris"

UPDATE task set due_date="2025-06-16" where title="go tour to paris"

update task set status_id=2 where title = "go tour to paris"


update task set status_id = 3 where id= 36

/* task complete */

DELETE from task where id=36

/* part 2 */

CREATE DATABASE School


CREATE Table class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) not NULL,
    begins DATETIME,
    ends DATETIME
)



use School



CREATE Table student( id int PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) not NULL,
email VARCHAR(50),
phone int,
class_id INT,
Foreign Key (class_id) REFERENCES class(id)

)


create INDEX nameIndex ON student(NAME)


SELECT * from student

alter Table class   ADD COLUMN status ENUM("not-started", "ongoing", "finished")


/* part 3 */
use hackyourfuture



