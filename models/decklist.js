module.exports = function (sequelize, DataTypes) {
    var Decklist = sequelize.define("Decklist", {

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
            allowNull: false
        }
    },
        { timestamps: true });
    Decklist.associate = function (models) {
        Decklist.belongsTo(models.User,
            {
                as: 'creator',
                foreignKey: 'creatorId'
            });
        Decklist.belongsToMany(models.User,
            {
                as: 'upvotes',
                through: 'deckLikes'
            });
    }
    return Decklist;
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
