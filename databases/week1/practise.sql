select * from task


/*  task that dont have valid due_date  + 8 */
select * from task where due_date is NULL
/* number of task that dont have valid due_date  + 8 */

select COUNT(*) from task where due_date is NULL


/* 27  task has the valid date */
select COUNT(*) from task where due_date is not NULL

SELECT * from status
/* results id 1,2,3 with notstarted , in progress, done */

select * from task where status_id = 1
/* task that has not been started  */

select COUNT(*) from task WHERE status_id = 1
/* 8 */

SELECT * from task where status_id = 3 


select COUNT(*) from task where status_id = 3
/* total 12 task are done */

/* not marked as done */

select * from task where status_id != 3 


select * from task order by created DESC
/* most recently created */


/* single most recently created task */
select * from task order by created desc LIMIT 1


select title , due_date, description from task where title like "%database%"  or  description like "%database%"

/* title or desctipiton conttains database  */

/* get title and status as text of all task  */

SELECT  title, status.name as newStatus from task left JOIN  