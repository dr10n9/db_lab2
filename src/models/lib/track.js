'use strict'

module.exports = function (sequelize, DataTypes) {
    let Track = sequelize.define('Track', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        length: {
            type: DataTypes.INTEGER
        }
    });

    Track.associate = (models) => {
        Track.belongsTo(models.Album);
    }

    return Track;
}