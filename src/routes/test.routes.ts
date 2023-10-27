import  Express , {NextFunction, Request, Response} from "express";
import Test from "../controllers/test";


const Router = Express.Router();

Router.get('/', (req: Request, res: Response, next: NextFunction) =>{
    const test = Test.getTest
    res.status(200).json({
        message : 'Hello World!',
        
    })
})

export default Router