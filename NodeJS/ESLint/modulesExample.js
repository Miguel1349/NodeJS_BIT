/**
 * Simulación de validación de un login
 */
const modules = {};
function require (moduleName) {
    return modules[moduleName];
};


modules['users.js'] = (function() {
    const exports = {};
    let users = new Map();
    let id = 2;
    
    exports.init = function() {
        users.set(1, {user: 'Tutancamon', password: '123456', date: new Date().toLocaleDateString()});        
        users.set(2, {user: 'Lovecarft', password: '987654', date: new Date(2019, 4, 6).toLocaleDateString()});
    }

    exports.addUser = function(name, password, creationDate) {
        id++;
        users.set(id, {user: name, password: password, date: creationDate.toLocaleDateString()});
    }

    exports.allUsers = function() {
        return users;
    }

    return exports;
}());

modules['validate.js'] = (function() {
    const exports = {};
    exports.validateUser = function(obj) {
        const users = require('users.js');
        let message = 'Su usuario no existe, verifique sus credenciales.';
        users.allUsers().forEach((value, key) => {
            if(value.user === obj.user && value.password === obj.password) {
                console.log('ture');
                message = 'Validación exitosa!!!';
            }
        });
        return message;
    }

    return exports;    
}());

const users = require('users.js');
users.init();
console.log(users.allUsers());
users.addUser('Ezequiel', 'abcdef', new Date());
console.log(users.allUsers());
const valid = require('validate.js');
console.log(valid.validateUser({user: 'Tutancamon', password: '123456'}));