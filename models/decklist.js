module.exports = function (sequelize, DataTypes) {
    var decklist = sequelize.define("decklist", {
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
        },

        
    },
        { timestamps: true });

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
