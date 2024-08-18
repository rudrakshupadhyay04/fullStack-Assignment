import { Card } from "../models/card.model.js";

export const createCard = async (req,res) => {
    try {
        const {title,description} = req.body;

        if(!title || !description){
            return res.status(400).json({
                message:"All fields are required!!!",
                success:false
            })
        }

        await Card.create({
            title,
            description
        });

        return res.status(200).json({
            message:'Card Created successfuly!!!',
            success:true
        });

    } catch (error) {
        console.log(error);
    }
}