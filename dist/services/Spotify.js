"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class SpotifyService {
    constructor() {
        this.token = "";
        this.tokenApi = () => {
            const clientCredentials = `client_credentials&client_id=${this.clientId}&client_secret=${this.secretKey}`;
            console.log({ clientCredentials });
            const apiInstance = axios_1.default.create({
                baseURL: "https://accounts.spotify.com/api",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                data: {
                    grant_type: clientCredentials,
                },
            });
            return apiInstance;
        };
        this.getToken = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.tokenApi().post("token");
                this.token = res.data;
                return Promise.resolve(res.data);
            }
            catch (error) {
                console.error(error);
                return Promise.reject(error);
            }
        });
        this.clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID || "";
        this.secretKey = process.env.REACT_APP_SPOTIFY_SECRET_KEY || "";
        console.log({ clientId: this.clientId, secretKey: this.secretKey });
        this.getToken();
    }
}
exports.default = SpotifyService;
