import express, { Express, Request, Response } from "express";
import http from "http";
import airthmeticRoute from "./routes/airthmetic.route";
import fileRoute from "./routes/file.route";

const app: Express = express();
app.use(express.json());
const PORT: number = 8080;

app.use("/airthmetic", airthmeticRoute);
app.use("/file", fileRoute);

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send({ message: "Hello from test" });
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome to nodejs world" });
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

server.on("error", () => {
  console.log("node error");
});
