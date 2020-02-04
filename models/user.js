module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {

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
            type: DataTypes.STRING
        },

    },
        { timestamps: true });
    user.associate = function (models) {
        user.hasMany(models.decklist, 
        {
            as: 'createdDecks',
            foreignKey: 'createdDeckId'
        });
        user.belongsToMany(models.decklist,
            {
                as: 'upvotes',
                through: 'deckLikes',
                foreignKey: 'likedDeckId',
                otherKey: 'likeUserId'
            });
    }



    return user;
};