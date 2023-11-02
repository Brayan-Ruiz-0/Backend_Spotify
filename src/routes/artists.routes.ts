import express from "express";
import ArtistsController from "../controllers/artists.controller";

const Router = express.Router();

Router.get("/", async (req, res) => {
  const artists = await ArtistsController.getArtists();
  res.status(200).json({
    artists,
  });
});

export default Router;
