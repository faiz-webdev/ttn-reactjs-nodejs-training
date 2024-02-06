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
  try {
    let response: string | Error;
    const text = req.body.text;
    const filePath = path.join(__dirname, "../new_file.txt");
    if (!fs.existsSync(filePath)) {
      const writeFilte = fs.writeFileSync("new_file.txt", text);
      res.send({ message: "Content write success", success: true });
    } else {
      fs.appendFile(filePath, text, (err) => {
        if (err) {
          response = err;
          res.send({ message: "Error in read file", data: response });
        } else {
          res.send({ message: "Content write success", success: true });
        }
      });
    }
  } catch (error) {
    res.send({ message: error, success: false });
  }
});

router.get("/copy-file", async (req: Request, res: Response) => {
  let response: string | Error;
  const filePath = path.join(__dirname, "../test.txt");
  fs.copyFile(filePath, path.join(__dirname, "../copied_file.txt"), (err) => {
    if (err) {
      response = err;
      res.send({ message: "Error in copied file", err });
    } else {
      const ress: string = fs.readFileSync("copied_file.txt", {
        encoding: "utf8",
      });
      res.send({ message: "Copied file", data: ress.toString() });
    }
  });
});

export default router;
