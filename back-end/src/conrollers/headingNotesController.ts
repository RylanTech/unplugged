import { RequestHandler } from "express"
import { HomepageNotes } from "../models/homepageNotes"
import { verifyUser } from "../services/authService"

export const getNotes: RequestHandler = async (req, res, next) => {
    try {
        let notes = await HomepageNotes.findAll()

        if (notes) {
            res.status(200).send(notes)
        } else {
            res.status(404).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const createNote: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        
        if (usr && usr.userType === 'admin') {
            let newNote: HomepageNotes = req.body
            let created = await HomepageNotes.create(newNote)
            if (created) {
                res.status(201).send(created)
            } else {
                res.status(400).send()
            }
        } else {
            res.status(401).send("Must be an admin user")
        }
        
    } catch {
        res.status(500).send()
    }
}