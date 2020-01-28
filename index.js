const express = require('express');
const server = express();

server.use(express.json());

const projects = [{"id": "1", "title": "GoStack", "tasks": []}];

server.get('/projects', (req, res) => {
    res.json(projects);
});

server.post('/projects', (req, res) =>{
    const {id, title} = req.body;
    projects.push({id:`${id}`, title:`${title}`, tasks: []});
    return res.json(projects);

});

server.post('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    projects[id].tasks.push(title);

    return res.json(projects);
});

server.put('/projects/:id', (req, res) => {

    const id = Number(req.params.id);
    const { title } = req.body;

    projects[id].title = title;

    return res.json(projects[id]);
});

server.delete('/projects/:id', (req, res) => {
    
    const id = Number(req.params.id);
    const project = projects[id].title;
    
    projects.splice(id, 1);

    return res.json(`Project ${project} was deleted`);

});



server.listen(3000);