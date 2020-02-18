module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        displayName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        accountType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        accountId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cardArtId: {
            type: DataTypes.STRING,
            defaultValue: "01DE001"
        },

    },
        { timestamps: true });
    User.associate = function (models) {
        User.hasMany(models.Decklist, 
        {
            as: 'createdDecks',
            foreignKey: 'createdDeckId'
        });
        User.belongsToMany(models.Decklist,
            {
                as: 'upvotes',
                through: 'deckLikes'
            });
    }



    return User;
};