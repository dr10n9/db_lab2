const model = require('../../models').Band;

class Band{
    constructor(){
        this.model = model;
    }

    async create(band){
        return await this.model.create(band)
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            });
    }
    async update(id, newBand){
        return await this.model.update(newBand, {where: {id: id}})
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            })
    }
    async get(id){
        return await this.model.find({where: {id: id}})
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            })
    }
    async getAll(){
        return await this.model.findAll()
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            })
    }
    async delete(id){
        return await this.model.delete({where: {id: id}})
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            })
    }
}

module.exports.BandDatabaseController = Band;