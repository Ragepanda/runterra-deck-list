module.exports = function (sequelize, DataTypes) {
    var article = sequelize.define("article", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        layout: {
            type: DataTypes.STRING,
            allowNull: false
        }

        
    },
        { timestamps: true });

    return article;
};