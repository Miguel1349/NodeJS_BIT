const { getAllusers, getUserByID, createUser, deleteUser} = require('../controllers/UserController');

const route = app => {
    app.get('/users', getAllusers);
    app.get('/users/:id', getUserByID);
    app.post('/user', createUser);
    app.delete('/users/:id', deleteUser);
    app.get('/', (request, response) => {
        response.render('index', { title: 'Plantilla Pug', message: 'Plantillas con Pug'});
    });
};

module.exports = {route};
