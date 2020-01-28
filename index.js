const express = require('express');
const server = express();

server.use(express.json());

const projects = [{"id": "0", "title": "GoStack", "tasks": []}];


function checkProjectID(req, res, next) {
    const { id } = req.params;
    const project = projects.find(p => p.id == id);

    if (!project){
        return res.status(400).json({ error: 'Project not found' });

    } else {
        return next();
    }
};



server.get('/projects', (req, res) => {
    res.json(projects);
});

server.post('/projects', (req, res) =>{
    const {id, title} = req.body;
    projects.push({id:`${id}`, title:`${title}`, tasks: []});
    return res.json(projects);

});

server.post('/projects/:id/tasks', checkProjectID, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    projects[id].tasks.push(title);

    return res.json(projects);
});

server.put('/projects/:id', checkProjectID, (req, res) => {

    const id = Number(req.params.id);
    const { title } = req.body;

    projects[id].title = title;

    return res.json(projects[id]);
});

server.delete('/projects/:id', checkProjectID, (req, res) => {
    
    const id = Number(req.params.id);
    const project = projects[id].title;
    
    projects.splice(id, 1);

    return res.json(`Project ${project} was deleted`);

});





server.listen(3000);