const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:11111111@localhost:5432/lab2');

const fs = require('fs');
const path = require('path');

const basename  = path.basename(__filename);

let db = {};
fs.readdirSync(__dirname + '/lib')
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        console.log(file);
        let model = sequelize['import'](path.join(__dirname + '/lib', file));
        console.log(model);
        // model = model.replace(/^\w/, c => c.toUpperCase());
        db[model.name] = model;
    })
    console.log(db);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
    db[modelName].sync();
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;