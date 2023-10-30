import  Express , {NextFunction, Request, Response} from "express";
import TestController from "../controllers/test.contoller";


const Router = Express.Router();

Router.get('/', (req: Request, res: Response, next: NextFunction) =>{
    const test = TestController.getTest()
    res.status(200).json({
        message : 'Hello World!',
        test
    })
})

export default Router