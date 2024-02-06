import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as path from "path";
import { json2csv } from "json-2-csv";

const router: Router = Router();

router.get("/create-excel", async (req: Request, res: Response) => {
  let response: any;
  const filePath = path.join(__dirname, "../sample.json");
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      response = err;
      res.send({ message: "Read fileaa", data: response.message() });
    } else {
      response = JSON.parse(data);
      const jsonData = json2csv(response);
      const writeFilte = fs.writeFileSync("excel-file.csv", jsonData);
      res.send({ message: "Read fileeee", data: writeFilte });
    }
  });
});

export default router;
