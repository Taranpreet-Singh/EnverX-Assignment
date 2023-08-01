import dotenv from "dotenv";
dotenv.config();
import express, { Express, response } from "express";
import { serverConfig } from "./server-config";

const port = serverConfig.PORT;

const app: Express = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.send("Hello World");
})

app.listen(port, () => {
    console.info(`⚡️[server]: Server is running at http://localhost:${port}/`);
});
