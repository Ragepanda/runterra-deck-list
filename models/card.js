module.exports = function (sequelize, DataTypes) {
    var card = sequelize.define("card", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    },
        { timestamps: true });

    return card;
};