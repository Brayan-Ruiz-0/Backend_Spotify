
import express from 'express';
import testRouter from "./test.routes"


const Router = express.Router();


Router.use('/test', testRouter  )


export default Router;