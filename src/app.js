'use strict'
const server = require('./server').Server;
const app = new server().app;


app.listen(8080, (err) => {
    if (err) console.log(err);
    else console.log("server on 8080");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/api/v1', (req, res) => {
    res.json({
        mes: 'api v1'
    })
})

app.get('/word_not_belong', (req, res) => {
    require('./models').sequelize.query(`SELECT * FROM "Albums" WHERE to_tsvector(name) @@ to_tsquery('!${req.query.word}');`)
        .then(data => {
            console.log(data[0]);
            res.json(data[0])
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })

})

app.get('/search_by_phrase', (req, res) => {
    require('./models').sequelize.query(`
    SELECT "Tracks".id, "Tracks".name, "Tracks"."AlbumId", "Albums"."BandId" from "Bands"
    inner join "Albums" on ("Bands".id="BandId")
    inner join "Tracks" on ("AlbumId" = "Albums".id)
    where to_tsvector("Tracks".name) @@ phraseto_tsquery('${req.query.phrase}')
    `)
    .then(data => {
        console.log(data[0]);
        res.json(data[0]);
    })
    .catch(err => {
        console.log(err);
        res.send(err);
    })
})
console.log(__dirname);

// const database = require('./database');
// const Band = database.Band;
// const Album = database.Album;
// const Track = database.Track;

// async function createBand(bandObj) {
//     return await Band.create(bandObj)
//         .then(data => {
//             return data;
//         })
//         .catch(err => {
//             return err;
//         })
// }

// async function createAlbum(albumObj) {
//     return await Album.create(albumObj)
//         .then(data => {
//             return data;
//         })
//         .catch(err => {
//             return err;
//         })
// }

// async function createTrack(trackObj) {
//     return await Track.create(trackObj)
//         .then(data => {
//             return data;
//         })
//         .catch(err => {
//             return err;
//         })
// }

// async function FindTracksOfBand(id) {
//     let data = await Album.find({ where: { BandId: id } })
//     return data;
// }

// let tmp;
// FindTracksOfBand(1)
//     .then((data) => { tmp = data; })
//     .catch(err => { tmp = err; })

// console.log(tmp);
