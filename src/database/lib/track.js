const model = require('../../models').Track;

class Track{
    constructor(){
        this.model = model;
    }

    async create(track){
        return await this.model.create(track)
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            });
    }
    async update(id, newTrack){
        return await this.model.update(newTrack, {where: {id: id}})
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

module.exports.TrackDatabaseController = Track;