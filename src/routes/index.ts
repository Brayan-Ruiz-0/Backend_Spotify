
import express from 'express';
import testRouter from "./test.routes"
import loginRouter from "./login.routes"

const Router = express.Router();


Router.use('/test', testRouter  )
Router.use('/login', loginRouter )


export default Router;