import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as path from "path";
import { json2csv } from "json-2-csv";
import * as XLSX from "xlsx";

const router: Router = Router();

router.get("/create-csv", async (req: Request, res: Response) => {
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

router.get("/create-excel", async (req: Request, res: Response) => {
  let response: any;
  let filePath = path.join(__dirname, "../sample.json");

  try {
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data: any) => {
      if (err) {
        response = err;
        res.send({
          message: "Error in json to excel" + err.message,
          data: response.message,
          success: false,
        });
      } else {
        const josnData = JSON.parse(data);
        const worksheet = XLSX.utils.json_to_sheet(josnData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        // Write workbook to a file
        XLSX.writeFile(workbook, "data.xlsx");
        res.send({
          message: "Json to excel converted successful",
          success: true,
        });
      }
    });
  } catch (error) {
    res.send({
      message: error,
      success: false,
    });
  }
});

export default router;
