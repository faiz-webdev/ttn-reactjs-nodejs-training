import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as path from "path";

const router: Router = Router();

router.get("/read", async (req: Request, res: Response) => {
  let response: string | Error;
  const filePath = path.join(__dirname, "../test.txt");
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      response = err;
      res.send({ message: "Read file", data: response });
    } else {
      response = data;
      res.send({ message: "Read file", data: response });
    }
  });
});

router.post("/write", async (req: Request, res: Response) => {
  let response: string | Error;
  const text = req.body.text;
  const filePath = path.join(__dirname, "../test.txt");
  fs.writeFile(filePath, text, (err) => {
    if (err) {
      response = err;
      res.send({ message: "Read file", data: response });
    } else {
      res.send({ message: "Content write success" });
    }
  });
});

router.get("/copy-file", async (req: Request, res: Response) => {
  let response: string | Error;
  const text = req.body.text;
  const filePath = path.join(__dirname, "../test.txt");
  fs.copyFile(filePath, "copied_file.txt", (err) => {
    if (err) {
      response = err;
      res.send({ message: "Error in copied file", err });
    } else {
      const ress: string = fs.readFileSync("copied_file.txt", {
        encoding: "utf8",
      });
      console.log("copied_file.txt", ress.toString());
      res.send({ message: "Copied file", ress });
    }
  });
});

export default router;
