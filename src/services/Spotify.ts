import axios from "axios";
import "dotenv/config";

class SpotifyService {
  private clientId: string;
  private secretKey: string;
  private token: string = "";

  constructor() {
    this.clientId = process.env.CLIENT_ID || "";
    this.secretKey = process.env.SECRET_KEY || "";
    console.log({ clientId: this.clientId, secretKey: this.secretKey });
    this.getToken();
  }

  private tokenApi = () => {
    const clientCredentials = `client_credentials&client_id=${this.clientId}&client_secret=${this.secretKey}`;
    console.log({ clientCredentials });
    const apiInstance = axios.create({
      baseURL: "https://accounts.spotify.com/api",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        client_id: this.clientId,
        client_secret: this.clientId,
        grant_type: "client_credentials",
      },
    });

    const artists = axios.get(
      "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb",
      {
        headers: {
          Authorization: `Bearer BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV`,
        },
      }
    );
    return apiInstance;
  };

  public getToken = async () => {
    try {
      const res = await this.tokenApi().post("token");
      this.token = res.data;
      return Promise.resolve(res.data);
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  };
}

export default SpotifyService;
