// const express = require('express');
// const app = express();


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
