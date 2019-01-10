'use strict'

module.exports = function (sequelize, DataTypes) {
    let Band = sequelize.define('Band', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        }
    });

    Band.associate = (models) => {
        models.Band.hasMany(models.Album)
    }


    return Band;
}
