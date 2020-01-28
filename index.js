const express = require('express');
const server = express();

server.use(express.json());

const projects = [{"id": "0", "title": "GoStack", "tasks": []}, {"id": "8", "title": "GoStack", "tasks": []}, {"id": "4", "title": "GoStack", "tasks": []}, {"id": "6", "title": "GoStack", "tasks": []} ,{"id": "9", "title": "GoStack", "tasks": []}];





function checkProjectID(req, res, next) {
    const { id } = req.params;
    const project = projects.find(p => p.id == id);

    if (!project){
        return res.status(400).json({ error: 'Project not found' });

    } else {
        return next();
    }
};

function logRequest(req, res, next){
    console.count("Requests");

    return next();

};

server.use(logRequest);


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

    const project = projects.find(item => item.id == id);

    project.tasks.push(title);

    return res.json(projects);
});

server.put('/projects/:id', checkProjectID, (req, res) => {

    const { id } = req.params;
    const { title } = req.body;

    let project = projects.find(item => item.id == id);

    project.title = title;

    return res.json(project);
});

server.delete('/projects/:id', checkProjectID, (req, res) => {
    
    const { id } = req.params;

    project = projects.findIndex(item => item.id == id);
    
    const projectName = projects[project].title;
    projects.splice(project, 1);

    return res.json(`Project ${projectName} was deleted`);

});





server.listen(3000);