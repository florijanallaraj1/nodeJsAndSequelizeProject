const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req, "TESTTTTTT")
    if (!req.body.firstName) {
        res.status(400).send({
            // a user should have a name (test)
            message: "Name can not be empty!"
        });
        return;
    }

    // Create a User
    const user = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        birthday: req.body.birthday,
        bio: req.body.bio,
        profile_picture_url: req.body.profilePictureUrl,
        cover_picture_url: req.body.coverPictureUrl,
        created_at: req.body.createdAt,
        role_revoked_on: req.body.roleRevokedOn,
        role_assigned_on: req.body.roleAsignedOn,
        role: req.body.role,
        is_banned: req.body.isBanned ? req.body.isBanned : false,
        ban_reason: req.body.banReason,
    };

    // Save User in the database
    User.create(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving User with id=" + id
        });
    });
};

exports.updateProfilePicture = (req, res) => {
    const id = req.params.id;
    
    if (req.body.profilePictureUrl) {
        User.update({profile_picture_url: req.body.profilePictureUrl}, { where: { id: id } }).then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}.`
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
    } else {
        res.send({
            message: "Profile picture cannot be empty"
        });
    }
};