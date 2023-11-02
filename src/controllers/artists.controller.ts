import spotifyApi from "../services/Spotify";

class ArtistsController {
  public static async getArtists() {
    try {
      /*   const res = await spotifyApi.getArtists(["0oSGxfWSnnOXhD2fKuz2Gy"]); */
      return Promise.resolve("success");
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }
}

export default ArtistsController;
