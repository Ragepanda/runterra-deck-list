module.exports = function (sequelize, DataTypes) {
    var decklist = sequelize.define("decklist", {

        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cardArtId: {
            type: DataTypes.STRING,
            defaultValue: "01DE001"
        }
    },
        { timestamps: true });
    decklist.associate = function (models) {
        decklist.belongsTo(models.user,
            {
                as: 'creator',
                foreignKey: 'creatorId'
            });
        decklist.belongsToMany(models.user,
            {
                as: 'upvotes',
                through: 'deckLikes',
                foreignKey: 'likeUserId',
                otherKey: 'likedDeckId'
            });
    }
    return decklist;
};

// Things needed for a deck list NOW
// decklist code
// decklist name
// decklist description
// card id for art banner
// unique id, in case multiple people make same deck


// THINGS NEEDED ONCE WE HAVE USERBASE
//// user who created it
// Number of users who have added this deck
// 
