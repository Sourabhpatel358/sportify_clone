
const musicModel = require("../models/music.model");
const albumModel=require("../models/album.model");
const { uploadFile } = require("../storage/storage.service");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {

        // 4. Check request data
        const { title } = req.body;
        const file = req.file;

        if (!title || !file) {
            return res.status(400).json({
                message: "Title or music file is missing."
            });
        }

        // 5. Upload music file
        const result = await uploadFile(
            file.buffer.toString("base64")
        );

        // 6. Save music in MongoDB
        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id
        });

        return res.status(201).json({
            message: "Music created successfully",
            music
        });

    

        return res.status(500).json({
            message: "Failed to create music",
            error: error.message
        });
    }


async function createAlbum(req,res){
    
        
        const {title,musicIds}=req.body;
        const album = await albumModel.create({
            title,
            artist:decoded.id,
            music:musicIds,
        })
        res.status(201).json({
            message:"album created successfully",
            album:{
                id:album._id,
                title:album.title,
                artist:album.artist,
                music:album.music,
            }
        })
    
}

async function getAllMusics(req,res){
    const musics=await musicModel.find().populate("artist","username email")

    res.status(200).json({
        message:"musics fetched successfully",
        musics:musics,
    })
}
module.exports={createMusic,createAlbum,getAllMusics};