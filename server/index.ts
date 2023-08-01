import dotenv from "dotenv";
dotenv.config();
import express, { Express, Router, response } from "express";
import { serverConfig } from "./server-config";
import { errorHandler } from "./middleware/errorHandler.middleware";
import { router } from "./posts/blogPost.route";

const port = serverConfig.PORT;

const app: Express = express();
const indexRouter = Router();
indexRouter.use('/api/posts', router)

app.use(express.json());

app.use(indexRouter)
app.use(errorHandler)

app.listen(port, () => {
    console.info(`⚡️[server]: Server is running at http://localhost:${port}/`);
});
