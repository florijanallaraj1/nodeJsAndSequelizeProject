module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        birthday: {
            type: Sequelize.DATE
        },
        bio: {
            type: Sequelize.STRING
        },
        profile_picture_url: {
            type: Sequelize.STRING
        },
        cover_picture_url: {
            type: Sequelize.STRING
        },
        created_at: {
            type: Sequelize.DATE
        },
        role_revoked_on: {
            type: Sequelize.STRING
        },
        role_assigned_on: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        is_banned: {
            type: Sequelize.BOOLEAN
        },
        ban_reason: {
            type: Sequelize.STRING
        }

    });

    return User;
};