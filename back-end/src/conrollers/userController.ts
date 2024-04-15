import { RequestHandler } from "express";
import { user } from "../models/user";
import { comparePasswords, hashPassword } from "../services/auth";
import { signUserToken, verifyUser } from "../services/authService";

export const getUser: RequestHandler = async (req, res, next) => {
    let usr = await verifyUser(req)
    let userId = req.params.id

    if (usr && usr.userType === "admin" || usr && usr.userId === parseInt(userId)) {
        let reqUsr = user.findByPk(userId)
        res.status(200).json(reqUsr)
    } else {
        res.status(401).send()
    }
}

export const getallUsers: RequestHandler = async (req, res, next) => {
    let usr = await verifyUser(req)

    if (usr && usr.userType === "admin") {
        let users = await user.findAll();
        res.status(200).json(users)
    } else {
        res.status(401).send()
    }
};

export const createAdminUser: RequestHandler = async (req, res, next) => {
    try {
        let newUser: user = req.body;
        if (newUser.username && newUser.password && newUser.church) {
            let hashedPassword = await hashPassword(newUser.password);
            newUser.password = hashedPassword;

            newUser.userType = "admin"
            
            let created = await user.create(newUser);
            res.status(201).json({
                username: created.username,
                userId: created.userId,
                church: created.church,
                userType: created.userType
            });
        }
        else {
            res.status(400).send('Username, password & church required');
        }
    } catch {
        res.status(500).send()
    }
}

export const createUser: RequestHandler = async (req, res, next) => {
    try {
        let newUser: user = req.body;
        if (newUser.username && newUser.password) {
            let hashedPassword = await hashPassword(newUser.password);
            newUser.password = hashedPassword;
            newUser.userType === "church"
            let created = await user.create(newUser);
            res.status(201).json({
                username: created.username,
                userId: created.userId
            });
        }
        else {
            res.status(400).send('Username, password & church required');
        }
    } catch {
        res.status(500).send()
    }
}

export const loginUser: RequestHandler = async (req, res, next) => {

    try {
        // Look up user by their username
        let existingUser: user | null = await user.findOne({
            where: { username: req.body.username }
        });

        // If user exists, check that password matches
        if (existingUser) {
            let passwordsMatch = await comparePasswords(req.body.password, existingUser.password);

            // If passwords match, create a JWT
            if (passwordsMatch) {
                let token = await signUserToken(existingUser);
                res.status(200).json(token);
            }
            else {
                res.status(203).json('Invalid password');
            }
        }
        else {
            res.status(203).json('Invalid username');
        }
    } catch {
        res.status(500).send()
    }
}

export const verify: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)

        if (usr) {
            res.status(200).send(true)
        } else {
            res.status(200).send(false)
        }
    } catch {
        res.status(500).send()
    }
}