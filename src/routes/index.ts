
import express from 'express';

import testRouter from "./test.routes";
/* import loginRouter from "./login.routes" */
import artistsRouter from "./artists.routes";
import healthRouter from "./health.routes";

const Router = express.Router();

Router.use("/test", testRouter);
/* Router.use("/login", loginRouter); */
Router.use("/artists", artistsRouter);
Router.use("/health", healthRouter);


export default Router;