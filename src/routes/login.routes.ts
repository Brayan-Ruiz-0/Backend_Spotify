import Express, { NextFunction, Request, Response } from "express";
import { request } from "http";
import spotifyApi from "../services/Spotify";

const Router = Express.Router();
Router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.redirect(
    spotifyApi.createAuthorizeURL([
      "ugc-image-upload",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "app-remote-control",
      "streaming",
      " playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
      " user-follow-modify",
      " user-follow-read",
      " user-read-playback-position",
      "user-top-read",
      " user-read-recently-played",
      "user-library-modify",
      "user-library-read",
      "user-read-email",
      "user-read-private",
      "user-soa-link",
      "user-soa-unlink",
      "suser-manage-entitlement",
      "user-manage-partner",
      "user-create-partner",
    ])
  );
});

Router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("request", req.query);
  const code = req.query.code;
  console.log("code", code);
  res.send(JSON.stringify(req.query));
});

export default Router;
