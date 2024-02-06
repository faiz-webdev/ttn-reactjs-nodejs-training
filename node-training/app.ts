import express, { Express, Request, Response } from "express";

const app: Express = express();
app.use(express.json());

const port: number = 3001;

app.get("/", (req: Request, res: Response) => {
    console.log('first')
  res.status(200).send({ message: "Welcome" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
