const express = require('express');
const router = express.Router();


const { postTodo, getTodo, getIdTodo, putTodo, deleteTodo } = require('../controllers/todoController');

router.post('/' , async (req,res) => {
    const {description } = req.body;
    const result =  await postTodo(description);
    res.send(result);
    });

router.get('/' , async (req,res) => {
    const result = await getTodo();
    res.json(result)
})

router.get('/:id', async (req,res) =>{
    const {id} = req.params;
    const result = await getIdTodo(id);
    res.json(result);
})

router.put('/:id',async (req,res) =>{
    const {id} = req.params;
    const {description} = req.body;
    const result = await putTodo(description,id);
    res.json(result);
})

router.delete('/:id', async (req,res) =>{
    const {id} = req.params;
    const result = await deleteTodo(id);
    res.send(result);
})

module.exports = router;