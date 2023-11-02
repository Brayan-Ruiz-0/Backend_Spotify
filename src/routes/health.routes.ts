import express from "express";
import SpotifyService from "../services/Spotify";

const Router = express.Router();

Router.get("/", async (req, res) => {
  console.log("init");
  const spotifyService = new SpotifyService();
  const data = await spotifyService.getToken();
  res.status(200).json({
    data,
  });
});

export default Router;
