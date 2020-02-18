module.exports = function (sequelize, DataTypes) {
    var Article = sequelize.define("Article", {
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

    return Article;
};