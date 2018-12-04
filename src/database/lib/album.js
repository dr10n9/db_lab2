'use strict'

module.exports = function (sequelize, DataTypes) {
    let Album = sequelize.define('Album', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        tracksCount: {
            type: DataTypes.INTEGER
        }
    });

    Album.associate = (models) => {
        models.Album.belongsTo(models.Band);
    };

    return Album;
}