const express = require('express');
const routers = require('./routes');
const bodyParser = require('body-parser');

const albumsRouter = routers.AlbumsRouter;
const bandsRouter = routers.BandsRouter;
const tracksRouter = routers.TrackRouter;

class Server {
    constructor(){
        this.app = express();
        this.config();
    }
    config(){
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
        this.app.use('/albums', albumsRouter)
        this.app.use('/bands', bandsRouter)
        this.app.use('/tracks', tracksRouter);
        this.app.use('/scripts', express.static(__dirname + '/scripts'));
        this.root = __dirname;
    }
}

module.exports.Server = Server;