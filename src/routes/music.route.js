
const express = require("express");
const authmiddleware=require("../middleware/auth.middleware")
const multer = require("multer");
const musicController = require("../controllers/music.controller");

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
});

router.post(
    "/upload",
    authmiddleware.authArtist,
    upload.single("music"),
    musicController.createMusic
);
router.post(
    "/album",
    authmiddleware.authArtist,
    musicController.createAlbum
)
router.get("/",
    authmiddleware.authUser,
    musicController.getAllMusics)
module.exports = router;
