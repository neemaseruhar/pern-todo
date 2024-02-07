// CREATE DATABASE perntodo;

// CREATE TABLE todo(
     
//      todo_id SERIAL PRIMARY KEY,
//      description VARCHAR(255)
// );

const INSERT_INTO_TODO = "INSERT INTO todo (description) VALUES ($1) RETURNING *" ;

const SELECT_ALL_FROM_TODO= "SELECT * FROM  todo" ;

const   SELECT_FROM_TODO_WHERE_ID_$1=  "SELECT * FROM todo WHERE todo_id = $1" ;

const  UPDATE_TODO_WHERE_ID_$1= "UPDATE todo SET description = $1 WHERE todo_id= $2" ;

const DELETE_TODO_WHERE_ID_$1 ="DELETE FROM todo WHERE todo_id = $1" ;

module.exports ={
INSERT_INTO_TODO, 
SELECT_ALL_FROM_TODO, 
SELECT_FROM_TODO_WHERE_ID_$1,
 UPDATE_TODO_WHERE_ID_$1,
 DELETE_TODO_WHERE_ID_$1
}