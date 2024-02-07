const pool = require('../db');
const {
INSERT_INTO_TODO, 
SELECT_ALL_FROM_TODO, 
SELECT_FROM_TODO_WHERE_ID_$1,
 UPDATE_TODO_WHERE_ID_$1,
 DELETE_TODO_WHERE_ID_$1
} = require('../dbQueries')

const postTodo = async (description) =>{
    try {
        const newTodo = await pool.query(INSERT_INTO_TODO,[description]);
        return newTodo.rows;
    }
    catch(err){
        console.log(err)
        throw err;
    }
    
}
const getTodo =  async () =>{
    try {
        
        const allTodo = await pool.query(SELECT_ALL_FROM_TODO);
        return allTodo.rows
    }
    catch(err){
        console.log(err)
    }
    
}
 const getIdTodo= async (id) => {
    try {

        const singleTodo = await  pool.query(SELECT_FROM_TODO_WHERE_ID_$1,[id]);
        return singleTodo.rows
        
    } catch (error) {
        console.error(error.message);
    }
}
const putTodo = async (description,id) => {
    try {

         const updatedTodo = await pool.query( UPDATE_TODO_WHERE_ID_$1,[description,id]);
        return updatedTodo;
        
    } catch (error) {
        console.log(error.message)
    }
}

const deleteTodo = async (id) => {
    try {
        const deleteTodo = await pool.query(DELETE_TODO_WHERE_ID_$1,[id]);
         return 'deleted successfully'
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    postTodo,
    getTodo,
    getIdTodo,
    putTodo,
    deleteTodo
    }