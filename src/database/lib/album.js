const model = require('../../models').Album;

class Album{
    constructor(){
        this.model = model;
    }

    async create(album){
        return await this.model.create(album)
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            });
    }
    async update(id, newAlbum){
        return await this.model.update(newAlbum, {where: {id: id}})
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
        return await this.get(id)
            .then(data => {
                console.log(data);
                if(data == null) return Promise.resolve('no data');
                else {
                    data.destroy()
                        .then(data => {
                            return data;
                        })
                        .catch(err => {
                            return err;
                        });
                }
            })
            .catch(err => {
                return err;
            });
    }
}

module.exports.AlbumDatabaseController = Album;