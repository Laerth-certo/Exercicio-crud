const express = require('express')
const router = express.Router()




const listaTarefas = ['Acordar cedo ', 'Ir a igreja', 'Fazer a janta']


router.get('/tarefas', (req, res)=>{

    res.json(listaTarefas)
})


router.get('/tarefas/:id', (req, res)=>{

    const id = req.params.id
    res.json(listaTarefas[id])
})


router.post('/tarefas', (req, res)=>{
    
    const tarefa = req.body
    listaTarefas.push(tarefa.tarefa)

    res.json({mensagem: "Tarefa criada com sucesso!"})
})


router.delete('/tarefas/:id', (req, res)=>{

    const id = req.params.id
    listaTarefas.splice(id, 1)
    res.json({mensagem: "Tarefa excluída com sucesso!"})
})


router.put('/tarefas/:id', (req, res)=>{

    const id = req.params.id
    const novaTarefa = req.body
    listaTarefas[id] = novaTarefa.tarefa

    res.json({mensagem: "Tarefa atualiza com sucesso!"})
})

module.exports = router