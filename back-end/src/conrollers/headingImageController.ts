import { RequestHandler } from "express"
import { HeadingImage } from "../models/headingImage"
import { verifyUser } from "../services/authService"


export const getHeader: RequestHandler = async (req, res, next) => {
    try {
        let headr = await HeadingImage.findOne({ where: { headingImageId: 1 } })
        if (headr) {
            res.status(200).send(headr)
        } else {
            res.status(404).send()
        }
    } catch {
        res.status(500).send()
    }
}

export const editHeader: RequestHandler = async (req, res, next) => {
    try {
        let usr = await verifyUser(req)
        if (usr && usr.userType === 'admin') {
            let editedHeader: HeadingImage = req.body
            let hdr = await HeadingImage.findOne({ where: { headingImageId: 1 } })
            if (hdr) {
                HeadingImage.update(editedHeader, { where: { headingImageId: 1 } })
                res.status(202).send()
            } else {
                await HeadingImage.create(editedHeader)
                res.status(201).send()
            }
        } else {
            res.status(401).send()
        }
    } catch {
        res.status(500).send()
    }
}